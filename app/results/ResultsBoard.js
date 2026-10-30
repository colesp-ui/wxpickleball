"use client";

import { useMemo, useState } from "react";

const FILTERS = [
  { key: "All", label: "All Meets" },
  { key: "Varsity", label: "Varsity" },
  { key: "JV", label: "JV" },
  { key: "Club", label: "Club" },
  { key: "Preseason", label: "Preseason" }
];

function category(team) {
  const text = String(team || "").toLowerCase();
  if (text.includes("pre-season") || text.includes("preseason") || text.includes("friendly") || text.includes("exhibition")) return "Preseason";
  if (text.includes("junior varsity") || text === "jv" || text.includes(" jv")) return "JV";
  if (text.includes("varsity")) return "Varsity";
  if (text.includes("club")) return "Club";
  return team || "Other";
}

function dateValue(raw) {
  const match = String(raw).match(/^(\d{1,2})\/(\d{1,2})\/(\d{2,4})$/);
  if (!match) return 0;
  let year = Number(match[3]);
  if (year < 100) year += 2000;
  return new Date(year, Number(match[1]) - 1, Number(match[2])).getTime();
}

function dateLabel(raw) {
  const stamp = dateValue(raw);
  if (!stamp) return raw;
  return new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(stamp));
}

function opponentInitials(name) {
  const words = String(name).split(/\s+/).filter(Boolean);
  return words.map((word) => word.charAt(0).toUpperCase()).slice(0, 2).join("");
}

function scoreLabel(value) {
  return String(value || "").trim().replace(/(\d)\s*-\s*(\d)/g, "$1–$2");
}

function parseGames(row) {
  return [row["Game 1"], row["Game 2"], row["Game 3"]]
    .filter((score) => score && String(score).trim() !== "-")
    .map((score) => {
      const label = scoreLabel(score);
      const parts = String(score).match(/^(\d+)\s*-\s*(\d+)$/);
      return { label, wxWon: parts ? Number(parts[1]) > Number(parts[2]) : false, oppWon: parts ? Number(parts[1]) < Number(parts[2]) : false };
    });
}

function groupResults(rows) {
  const groups = new Map();
  for (const row of rows) {
    if (!row.Date || !row.Opponent || !row.Team || !row["Match Type"] || !row.Winner) continue;
    const key = [row.Date, row.Opponent, row.Team].join("|");
    if (!groups.has(key)) groups.set(key, { key, date: row.Date, opponent: row.Opponent, team: row.Team, category: category(row.Team), matches: [] });
    const winner = String(row.Winner).trim().toLowerCase().replace(/[^a-z0-9]/g, "");
    const isWx = winner === "wx" || winner === "woodscross" || winner === "woodscrosshighschool";
    const isDream = /dream\s*breaker/i.test(String(row["Match Type"]));
    groups.get(key).matches.push({
      type: row["Match Type"], players: row["WX Players"] || "Team roster",
      winner: row.Winner, isWx, isDream, games: parseGames(row)
    });
  }
  return [...groups.values()].map((meet) => {
    const wx = meet.matches.filter((match) => match.isWx).length;
    const opponent = meet.matches.filter((match) => !match.isWx).length;
    const standard = meet.matches.filter((match) => !match.isDream);
    const standardWx = standard.filter((match) => match.isWx).length;
    return { ...meet, wx, opponentScore: opponent, standardWx, standardOpponent: standard.length - standardWx, isWxWin: wx > opponent, dreambreakers: meet.matches.filter((match) => match.isDream) };
  }).sort((a, b) => dateValue(b.date) - dateValue(a.date));
}

function MatchCard({ match, opponent }) {
  return (
    <article className={"wx-match-card " + (match.isWx ? "wx-match-won" : "wx-match-lost")}>
      <div className="wx-match-top">
        <span className="wx-match-type">{match.type}</span>
        <span className={"wx-result-tag " + (match.isWx ? "wx-result-win" : "wx-result-loss")}>
          {match.isWx ? "WX WIN" : opponent + " WIN"}
        </span>
      </div>
      <div className="wx-match-players">{match.players}</div>
      <div className="wx-game-row">
        <span className="wx-game-label">GAMES</span>
        {match.games.map((game, i) => (
          <span key={i} className={"wx-game-pill " + (game.wxWon ? "wx-game-pill-win" : "")}>{game.label}</span>
        ))}
      </div>
    </article>
  );
}

function MeetCard({ meet, index }) {
  const count = meet.matches.length;
  return (
    <article className="wx-meet-card">
      <div className="wx-meet-meta">
        <span className="wx-meet-date"><span className="wx-meta-dot"></span>{dateLabel(meet.date)}</span>
        <span className="wx-meet-type">{meet.category === "Preseason" ? "PRESEASON EXHIBITION" : meet.team.toUpperCase()}</span>
      </div>

      <div className="wx-scoreboard">
        <div className="wx-side wx-side-home">
          <div className="wx-team-logo"><img src="/Logo.png" alt="WX Pickleball" /></div>
          <div><div className="wx-team-name">WOODS CROSS</div><div className="wx-team-short">WX PICKLEBALL</div></div>
        </div>
        <div className="wx-score-center">
          <div className="wx-score-kicker">FINAL SCORE</div>
          <div className="wx-score-numbers">
            <span className={meet.isWxWin ? "wx-leading-score" : ""}>{meet.wx}</span>
            <i>:</i>
            <span className={!meet.isWxWin && meet.opponentScore > meet.wx ? "wx-leading-score" : ""}>{meet.opponentScore}</span>
          </div>
          <div className={"wx-outcome " + (meet.isWxWin ? "wx-outcome-win" : "wx-outcome-loss")}>
            {meet.isWxWin ? "WOODS CROSS WINS" : meet.opponent.toUpperCase() + " WINS"}
          </div>
        </div>
        <div className="wx-side wx-side-away">
          <div className="wx-opponent-mark">{opponentInitials(meet.opponent)}</div>
          <div><div className="wx-team-name">{meet.opponent.toUpperCase()}</div><div className="wx-team-short">OPPONENT</div></div>
        </div>
      </div>

      <div className="wx-meet-summary">
        <div><strong>{meet.standardWx}–{meet.standardOpponent}</strong><span>DOUBLES MATCHES</span></div>
        <div><strong>{meet.dreambreakers.length ? meet.dreambreakers[0].games.map((game) => game.label).join(", ") : "—"}</strong><span>DREAMBREAKER {meet.dreambreakers.length ? "SCORE" : "NOT PLAYED"}</span></div>
        <div><strong>{count}</strong><span>TOTAL MATCHUPS</span></div>
      </div>

      <details className="wx-meet-details" open={index === 0}>
        <summary>
          <span>Match-by-match results</span>
          <span className="wx-toggle-right">{count} MATCHUPS <span className="wx-chevron">⌄</span></span>
        </summary>
        <div className="wx-matches-grid">
          {meet.matches.filter((match) => !match.isDream).map((match, i) =>
            <MatchCard key={i} match={match} opponent={meet.opponent} />
          )}
          {meet.dreambreakers.map((match, i) =>
            <div className="wx-dream-row" key={i}>
              <div className="wx-dream-icon">⚡</div>
              <div className="wx-dream-info"><strong>DREAMBREAKER</strong><span>Team tiebreaker · {match.players}</span></div>
              <div className="wx-dream-score">{match.games.map((game) => game.label).join(" / ")}</div>
              <div className={"wx-result-tag " + (match.isWx ? "wx-result-win" : "wx-result-loss")}>
                {match.isWx ? "WX WIN" : meet.opponent + " WIN"}
              </div>
            </div>
          )}
        </div>
      </details>
    </article>
  );
}

export default function ResultsBoard({ rows, live }) {
  const [filter, setFilter] = useState("All");
  const meets = useMemo(() => groupResults(rows), [rows]);
  const visible = useMemo(() => meets.filter((meet) => filter === "All" || meet.category === filter), [meets, filter]);
  const varsityMeets = meets.filter((meet) => meet.category === "Varsity");
  const varsityWins = varsityMeets.filter((meet) => meet.isWxWin).length;
  const preseasonMeets = meets.filter((meet) => meet.category === "Preseason");
  const matchesLogged = meets.reduce((total, meet) => total + meet.matches.length, 0);

  return (
    <div className="wx-results-page">
      <header className="wx-results-nav">
        <div className="container wx-results-nav-inner">
          <a href="/" className="wx-results-brand"><img src="/Logo.png" alt="" /><span><b>WX PICKLEBALL</b><small>WOODS CROSS HIGH SCHOOL</small></span></a>
          <nav aria-label="Results page navigation"><a href="/">HOME</a><a href="/#schedule">SCHEDULE</a><a href="/results" aria-current="page">MEET RESULTS</a><a href="/#coaches">COACHES</a></nav>
        </div>
      </header>

      <section className="wx-results-hero">
        <div className="container wx-results-hero-inner">
          <div className="wx-results-overline"><span></span>2026–27 SEASON · THE SCOREBOOK</div>
          <h1>MEET <em>RESULTS.</em></h1>
          <p>The matchups. The scores. The moments that make the season. Explore every Woods Cross pickleball meet, game by game.</p>
          <div className="wx-hero-stats">
            <div><span>VARSITY RECORD</span><strong>{varsityMeets.length ? varsityWins + "–" + (varsityMeets.length - varsityWins) : "—"}</strong><small>{varsityMeets.length ? "Official results" : "Season meets upcoming"}</small></div>
            <div><span>PRESEASON MEETS</span><strong>{preseasonMeets.length}</strong><small>Exhibition play</small></div>
            <div><span>MATCHUPS LOGGED</span><strong>{matchesLogged}</strong><small>Across all meets</small></div>
          </div>
        </div>
      </section>

      <main className="wx-results-main">
        <div className="container">
          <div className="wx-results-title-row">
            <div><span className="wx-section-eyebrow">GAME DAY ARCHIVE</span><h2>Every meet. Every match.</h2><p>See the team score, then open each meet for individual match results.</p></div>
            <div className="wx-source-label"><span className="wx-status-dot"></span>{live ? "Results feed connected" : "Published scorebook"}</div>
          </div>

          <div className="wx-results-filters" role="group" aria-label="Filter meet results">
            {FILTERS.map((item) => (
              <button type="button" key={item.key} aria-pressed={filter === item.key}
                className={filter === item.key ? "wx-filter active" : "wx-filter"}
                onClick={() => setFilter(item.key)}>
                {item.label} <span>{item.key === "All" ? meets.length : meets.filter((meet) => meet.category === item.key).length}</span>
              </button>
            ))}
          </div>

          {visible.length ? <div className="wx-meets-list">{visible.map((meet, i) => <MeetCard key={meet.key} meet={meet} index={i} />)}</div> :
            <div className="wx-results-empty"><span>🏓</span><h3>No {filter === "All" ? "" : filter.toLowerCase() + " "}results yet</h3><p>When scores for this team are published, the meet cards will appear here.</p></div>
          }
          <div className="wx-results-bottom"><p>Scores are displayed from the WX Pickleball scorebook. Preseason exhibitions do not count toward the official Varsity record.</p><a href="/#schedule">VIEW SEASON SCHEDULE <span>→</span></a></div>
        </div>
      </main>
      <footer className="wx-results-footer"><div className="container"><span>© 2026 WX Pickleball · Woods Cross High School</span><a href="/">BACK TO HOME <span>→</span></a></div></footer>
    </div>
  );
}
