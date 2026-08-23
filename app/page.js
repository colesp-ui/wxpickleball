import "./globals.css";

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
            <span className="brand-mark" aria-hidden="true"></span>
            <span>WX PICKLEBALL</span>
          </a>
          <nav className="navlinks">
            <a href="#team">Team</a>
            <a href="#schedule">Schedule</a>
            <a href="#tournaments">Tournaments</a>
            <a href="#sponsors">Sponsors</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-inner">
            <div className="kicker">Woods Cross High School Pickleball</div>
            <h1>COMPETE.<br/>IMPROVE.<br/>REPRESENT.</h1>
            <p>
              Building a competitive high-school pickleball program around
              skill, sportsmanship, team culture, and a whole lot of fun.
            </p>
            <div className="actions">
              <a className="btn btn-primary" href="#team">Meet the Team</a>
              <a className="btn btn-secondary" href="#schedule">View Schedule</a>
            </div>
          </div>
        </section>

        <section className="section" id="team">
          <div className="container">
            <div className="kicker">2026 Season</div>
            <h2>Built to compete.</h2>
            <p className="section-lead">
              WX Pickleball brings Woods Cross students together to develop
              competitive skills, represent the school, and grow the sport.
              This site will become the central hub for rosters, results,
              announcements, tournament information, and team resources.
            </p>

            <div className="grid grid-3" style={{marginTop: 36}}>
              <div className="card">
                <div className="metric">01</div>
                <h3>Team</h3>
                <p>Varsity and JV rosters, player profiles, captains, and coaches.</p>
              </div>
              <div className="card">
                <div className="metric">02</div>
                <h3>Competition</h3>
                <p>Match schedules, tournament brackets, standings, and results.</p>
              </div>
              <div className="card">
                <div className="metric">03</div>
                <h3>Community</h3>
                <p>Sponsors, fundraisers, alumni, families, and program supporters.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section dark" id="tournaments">
          <div className="container">
            <div className="kicker">Events</div>
            <h2>Tournaments that feel like events.</h2>
            <p className="section-lead">
              Registration, divisions, brackets, court assignments, live results,
              and fundraising information can all live here instead of being spread
              across forms, texts, and separate links.
            </p>

            <div className="grid grid-3" style={{marginTop: 36}}>
              <div className="card">
                <h3>Fundraiser Tournament</h3>
                <p>One home for registration, payment instructions, brackets, and day-of updates.</p>
              </div>
              <div className="card">
                <h3>Live Brackets</h3>
                <p>A clean tournament view that players and parents can check from their phones.</p>
              </div>
              <div className="card">
                <h3>Results Archive</h3>
                <p>Keep past champions, podium finishes, and event photos on the site year after year.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="schedule">
          <div className="container">
            <div className="kicker">Schedule</div>
            <h2>Know where to be.</h2>
            <p className="section-lead">
              These are placeholders for now. Once you give me the official schedule,
              I’ll replace these with the real matches and locations.
            </p>

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
          <div className="container">
            <div className="kicker">Support WX</div>
            <h2>Sponsors make the season bigger.</h2>
            <p className="section-lead">
              We can create sponsor tiers, logo placements, fundraising links,
              and a dedicated sponsor page that gives local businesses meaningful visibility.
            </p>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <div className="cta">
              <div>
                <h3>Ready to play or support WX?</h3>
                <p>
                  Registration, volunteer, sponsor, and contact buttons will live here.
                  We’ll connect them to the exact forms and payment links you want.
                </p>
              </div>
              <a className="btn" style={{background:"#0b1f33", color:"white"}} href="mailto:">
                Contact WX Pickleball
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>WX Pickleball • Woods Cross, Utah</span>
          <span>Built for players, families, and fans.</span>
        </div>
      </footer>
    </>
  );
}