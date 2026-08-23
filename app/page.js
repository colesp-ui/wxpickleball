import "./globals.css";

const LOGO = "data:image/webp;base64,UklGRs6X...";

const games = [
  { date: "SEP 3", title: "Season Opener", meta: "Opponent / location TBD" },
  { date: "SEP 10", title: "Region Match", meta: "Opponent / location TBD" },
  { date: "SEP 17", title: "Region Match", meta: "Opponent / location TBD" },
];

export default function Home() {
  return (
    <>
      <header className="topbar">
        <div className="container nav">
          <a className="brand" href="#home">
            <img className="brand-logo" src={LOGO} alt="WX Pickleball logo" />
            <div className="brand-copy"><strong>WX PICKLEBALL</strong><span>Woods Cross High School</span></div>
          </a>
          <nav className="navlinks">
            <a href="#team">Team</a>
            <a href="#schedule">Schedule</a>
            <a href="#tournaments">Tournaments</a>
            <a href="#sponsors">Sponsors</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="nav-cta" href="#contact">JOIN / SUPPORT</a>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-inner">
              <div className="kicker">Woods Cross High School Pickleball</div>
              <h1>PLAY TOGETHER.<br/>COMPETE TO WIN.</h1>
              <p>One team. One program. A home for Woods Cross pickleball players, families, schedules, results, tournaments, and sponsors.</p>
              <div className="actions">
                <a className="btn btn-primary" href="#schedule">View Schedule</a>
                <a className="btn btn-secondary" href="#team">Meet the Team</a>
              </div>
            </div>
            <div className="hero-logo-wrap">
              <img className="hero-logo" src={LOGO} alt="WX Pickleball wildcat logo" />
            </div>
          </div>
        </section>

        <section className="quick-strip">
          <div className="container quick-grid">
            <div><strong>TEAM</strong><span>Varsity + JV</span></div>
            <div><strong>SEASON</strong><span>2026</span></div>
            <div><strong>HOME</strong><span>Woods Cross, Utah</span></div>
            <div><strong>PROGRAM</strong><span>Compete • Improve • Represent</span></div>
          </div>
        </section>

        <section className="section" id="team">
          <div className="container">
            <div className="kicker">The Program</div>
            <h2>Built to compete. Built together.</h2>
            <p className="section-lead">WX Pickleball brings Woods Cross students together to develop skill, sportsmanship, confidence, and a team culture that represents the school well on and off the court.</p>
            <div className="grid grid-3" style={{marginTop: 36}}>
              <div className="card"><div className="metric">01</div><h3>Compete</h3><p>Varsity and JV players preparing to win points, matches, and tournaments.</p></div>
              <div className="card"><div className="metric">02</div><h3>Improve</h3><p>Better technique, smarter strategy, stronger partnerships, and consistent reps.</p></div>
              <div className="card"><div className="metric">03</div><h3>Represent</h3><p>Play hard, show class, support teammates, and represent Woods Cross with pride.</p></div>
            </div>
          </div>
        </section>

        <section className="section dark" id="tournaments">
          <div className="container">
            <div className="kicker red">Tournament Central</div>
            <h2>Everything players need on game day.</h2>
            <p className="section-lead">Registration, divisions, brackets, court assignments, results, and fundraiser information can all live in one place.</p>
            <div className="grid grid-3" style={{marginTop: 36}}>
              <div className="card"><h3>Fundraiser Tournament</h3><p>Registration, payment instructions, brackets, and day-of updates.</p></div>
              <div className="card"><h3>Live Brackets</h3><p>A simple mobile-first bracket view for players, parents, and spectators.</p></div>
              <div className="card"><h3>Results Archive</h3><p>Champions, podium finishes, match results, and event history year after year.</p></div>
            </div>
          </div>
        </section>

        <section className="section schedule-section" id="schedule">
          <div className="container">
            <div className="kicker">Upcoming</div>
            <h2>Match schedule.</h2>
            <p className="section-lead">We’ll drop the official season schedule here next. For now, these are placeholders showing the layout.</p>
            <div className="schedule">
              {games.map((g) => (
                <div className="game" key={g.date + g.title}>
                  <div className="game-date">{g.date}</div>
                  <div className="game-title">{g.title}</div>
                  <div className="game-meta">{g.meta}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section dark" id="sponsors">
          <div className="container sponsor-grid">
            <div><div className="kicker red">Support WX</div><h2>Sponsors make the season bigger.</h2><p className="section-lead">Local partners help create better events, stronger fundraising, and more opportunities for our players.</p></div>
            <img className="sponsor-logo" src={LOGO} alt="WX Pickleball logo" />
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <div className="cta">
              <div><div className="kicker dark-kicker">WX PICKLEBALL</div><h3>Ready to play or support the team?</h3><p>Registration, volunteer, sponsor, and contact links will live right here.</p></div>
              <a className="btn cta-btn" href="mailto:">Contact WX Pickleball</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner"><span>© 2026 WX Pickleball • Woods Cross, Utah</span><span>Compete • Improve • Represent</span></div>
      </footer>
    </>
  );
}