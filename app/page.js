import "./globals.css";

const LOGO = "/ChatGPT Image Aug 23, 2026, 12_12_32 AM.png";

const games = [
  { date: "SEP 29", day: "TUE", time: "8:00 PM - 10:00 PM", title: "Open Play Evaluations", location: "Washington Park", players: "ALL" },
  { date: "OCT 6", day: "TUE", time: "8:00 PM - 10:00 PM", title: "Open Play Evaluations", location: "Washington Park", players: "ALL" },
  { date: "OCT 27", day: "TUE", time: "3:00 PM - 6:00 PM", title: "Official Tryouts", location: "Kaysville Picklr", players: "ALL" },
  { date: "OCT 27", day: "TUE", time: "7:00 PM - 10:00 PM", title: "Formal Offers Extended", location: "Text Msg", players: "ALL" },
  { date: "NOV 2", day: "MON", time: "3:00 PM - 4:00 PM", title: "Open Play", location: "WX Small Gym", players: "Development" },
  { date: "NOV 3", day: "TUE", time: "3:00 PM - 5:00 PM", title: "Practice #0", location: "Kaysville Picklr", players: "JV & Varsity" },
  { date: "NOV 9", day: "MON", time: "3:00 PM - 4:00 PM", title: "Open Play", location: "WX Small Gym", players: "Development" },
  { date: "NOV 10", day: "TUE", time: "3:00 PM - 5:00 PM", title: "Practice #1", location: "Kaysville Picklr", players: "JV & Varsity" },
  { date: "NOV 12", day: "THU", time: "4:00 PM - 6:00 PM", title: "Meet 1", location: "Kaysville Picklr", players: "Varsity" },
  { date: "NOV 13", day: "FRI", time: "4:00 PM - 6:00 PM", title: "Meet 1", location: "Kaysville Picklr", players: "JV" },
  { date: "NOV 16", day: "MON", time: "3:00 PM - 4:00 PM", title: "Open Play", location: "WX Small Gym", players: "Development" },
  { date: "NOV 17", day: "TUE", time: "3:00 PM - 5:00 PM", title: "Practice #2", location: "Kaysville Picklr", players: "JV & Varsity" },
  { date: "NOV 19", day: "THU", time: "4:00 PM - 6:00 PM", title: "Meet 2", location: "Kaysville Picklr", players: "Varsity" },
  { date: "NOV 20", day: "FRI", time: "4:00 PM - 6:00 PM", title: "Meet 2", location: "Kaysville Picklr", players: "JV" },
  { date: "NOV 23", day: "MON", time: "3:00 PM - 4:00 PM", title: "Open Play", location: "WX Small Gym", players: "Development" },
  { date: "NOV 30", day: "MON", time: "3:00 PM - 4:00 PM", title: "Open Play", location: "WX Small Gym", players: "Development" },
  { date: "DEC 1", day: "TUE", time: "3:00 PM - 5:00 PM", title: "Practice #3", location: "Kaysville Picklr", players: "JV & Varsity" },
  { date: "DEC 3", day: "THU", time: "4:00 PM - 6:00 PM", title: "Meet 3", location: "Kaysville Picklr", players: "Varsity" },
  { date: "DEC 4", day: "FRI", time: "4:00 PM - 6:00 PM", title: "Meet 3", location: "Kaysville Picklr", players: "JV" },
  { date: "DEC 7", day: "MON", time: "3:00 PM - 4:00 PM", title: "Open Play", location: "WX Small Gym", players: "Development" },
  { date: "DEC 8", day: "TUE", time: "3:00 PM - 5:00 PM", title: "Practice #4", location: "Kaysville Picklr", players: "JV & Varsity" },
  { date: "DEC 10", day: "THU", time: "4:00 PM - 6:00 PM", title: "Meet 4", location: "Kaysville Picklr", players: "Varsity" },
  { date: "DEC 11", day: "FRI", time: "4:00 PM - 6:00 PM", title: "Meet 4", location: "Kaysville Picklr", players: "JV" },
  { date: "DEC 14", day: "MON", time: "3:00 PM - 4:00 PM", title: "Open Play", location: "WX Small Gym", players: "Development" },
  { date: "DEC 15", day: "TUE", time: "3:00 PM - 5:00 PM", title: "Practice #5", location: "Kaysville Picklr", players: "JV & Varsity" },
  { date: "DEC 17", day: "THU", time: "4:00 PM - 6:00 PM", title: "Meet 5", location: "Kaysville Picklr", players: "Varsity" },
  { date: "DEC 18", day: "FRI", time: "4:00 PM - 6:00 PM", title: "Meet 5", location: "Kaysville Picklr", players: "JV" },
  { date: "DEC 21", day: "MON", time: "3:00 PM - 5:00 PM", title: "WX CHRISTMAS TOURNAMENT", location: "Kaysville Picklr", players: "ALL" },
  { date: "JAN 5", day: "TUE", time: "3:00 PM - 5:00 PM", title: "Practice #6", location: "Kaysville Picklr", players: "JV & Varsity" },
  { date: "JAN 7", day: "THU", time: "4:00 PM - 6:00 PM", title: "Meet 6", location: "Kaysville Picklr", players: "Varsity" },
  { date: "JAN 8", day: "FRI", time: "4:00 PM - 6:00 PM", title: "Meet 6", location: "Kaysville Picklr", players: "JV" },
  { date: "JAN 11", day: "MON", time: "3:00 PM - 4:00 PM", title: "Open Play", location: "WX Small Gym", players: "Development" },
  { date: "JAN 12", day: "TUE", time: "3:00 PM - 5:00 PM", title: "Practice #7", location: "Kaysville Picklr", players: "JV & Varsity" },
  { date: "JAN 14", day: "THU", time: "4:00 PM - 6:00 PM", title: "Meet 7", location: "Kaysville Picklr", players: "Varsity" },
  { date: "JAN 15", day: "FRI", time: "4:00 PM - 6:00 PM", title: "Meet 7", location: "Kaysville Picklr", players: "JV" },
  { date: "JAN 18", day: "MON", time: "3:00 PM - 4:00 PM", title: "Open Play", location: "WX Small Gym", players: "Development" },
  { date: "JAN 19", day: "TUE", time: "3:00 PM - 5:00 PM", title: "Practice #8", location: "Kaysville Picklr", players: "JV & Varsity" },
  { date: "JAN 23", day: "SAT", time: "TBA", title: "Regionals — Championship", location: "TBA", players: "Varsity" },
  { date: "JAN 23", day: "SAT", time: "TBA", title: "Regionals — Championship", location: "TBA", players: "JV" },
  { date: "JAN 26", day: "TUE", time: "3:00 PM - 5:00 PM", title: "Practice #9", location: "Kaysville Picklr", players: "JV & Varsity" },
  { date: "JAN 29", day: "FRI", time: "TBA", title: "State Championships — Championship", location: "TBA", players: "JV & Varsity" },
  { date: "JAN 30", day: "SAT", time: "TBA", title: "State Championships — Championship", location: "TBA", players: "JV & Varsity" },
  { date: "FEB 4", day: "THU", time: "TBA", title: "Individual Championships — Championship", location: "TBA", players: "JV & Varsity" },
  { date: "FEB 9", day: "TUE", time: "6:00 PM - 7:30 PM", title: "Pickleball Banquet", location: "WX Commons", players: "ALL" },
];

export default function Home() {
  return (
    <>
      <header className="topbar"><div className="container nav"><a className="brand" href="#home"><img className="brand-logo" src={LOGO} alt="WX Pickleball logo" /><div className="brand-copy"><strong>WX PICKLEBALL</strong><span>Woods Cross High School</span></div></a><nav className="navlinks"><a href="#team">Team</a><a href="#schedule">Schedule</a><a href="#tournaments">Tournaments</a><a href="#sponsors">Sponsors</a><a href="#contact">Contact</a></nav><a className="nav-cta" href="#contact">JOIN / SUPPORT</a></div></header>
      <main>
        <section className="hero" id="home"><div className="container hero-grid"><div className="hero-inner"><div className="kicker">Woods Cross High School Pickleball</div><h1>PLAY TOGETHER.<br/>COMPETE TO WIN.</h1><p>One team. One program. A home for Woods Cross pickleball players, families, schedules, results, tournaments, and sponsors.</p><div className="actions"><a className="btn btn-primary" href="#schedule">View Schedule</a><a className="btn btn-secondary" href="#team">Meet the Team</a></div></div><div className="hero-logo-wrap"><img className="hero-logo" src={LOGO} alt="WX Pickleball wildcat logo" /></div></div></section>
        <section className="quick-strip"><div className="container quick-grid"><div><strong>TEAM</strong><span>Varsity + JV</span></div><div><strong>SEASON</strong><span>2026–27</span></div><div><strong>HOME</strong><span>Woods Cross, Utah</span></div><div><strong>PROGRAM</strong><span>Compete • Improve • Represent</span></div></div></section>
        <section className="section" id="team"><div className="container"><div className="kicker">The Program</div><h2>Built to compete. Built together.</h2><p className="section-lead">WX Pickleball brings Woods Cross students together to develop skill, sportsmanship, confidence, and a team culture that represents the school well on and off the court.</p><div className="grid grid-3" style={{marginTop: 36}}><div className="card"><div className="metric">01</div><h3>Compete</h3><p>Varsity and JV players preparing to win points, matches, and tournaments.</p></div><div className="card"><div className="metric">02</div><h3>Improve</h3><p>Better technique, smarter strategy, stronger partnerships, and consistent reps.</p></div><div className="card"><div className="metric">03</div><h3>Represent</h3><p>Play hard, show class, support teammates, and represent Woods Cross with pride.</p></div></div></div></section>
        <section className="section dark" id="tournaments"><div className="container"><div className="kicker red">Tournament Central</div><h2>Everything players need on game day.</h2><p className="section-lead">Registration, divisions, brackets, court assignments, results, and fundraiser information can all live in one place.</p><div className="grid grid-3" style={{marginTop: 36}}><div className="card"><h3>Fundraiser Tournament</h3><p>Registration, payment instructions, brackets, and day-of updates.</p></div><div className="card"><h3>Live Brackets</h3><p>A simple mobile-first bracket view for players, parents, and spectators.</p></div><div className="card"><h3>Results Archive</h3><p>Champions, podium finishes, match results, and event history year after year.</p></div></div></div></section>
        <section className="section schedule-section" id="schedule"><div className="container"><div className="kicker">2026–27 Season</div><h2>Team schedule.</h2><p className="section-lead">Evaluations, tryouts, practices, meets, open play, tournaments, championships, and team events.</p><div className="schedule">{games.map((g, i) => (<div className="game" key={i}><div className="game-date">{g.date}<small style={{display:"block",fontSize:11,marginTop:4}}>{g.day}</small></div><div className="game-title">{g.title}<small style={{display:"block",fontSize:13,fontWeight:500,marginTop:5}}>{g.time}</small></div><div className="game-meta">{g.location}<br/><strong>{g.players}</strong></div></div>))}</div></div></section>
        <section className="section dark" id="sponsors"><div className="container sponsor-grid"><div><div className="kicker red">Support WX</div><h2>Sponsors make the season bigger.</h2><p className="section-lead">Local partners help create better events, stronger fundraising, and more opportunities for our players.</p></div><img className="sponsor-logo" src={LOGO} alt="WX Pickleball logo" /></div></section>
        <section className="section" id="contact"><div className="container"><div className="cta"><div><div className="kicker dark-kicker">WX PICKLEBALL</div><h3>Ready to play or support the team?</h3><p>Registration, volunteer, sponsor, and contact links will live right here.</p></div><a className="btn cta-btn" href="mailto:">Contact WX Pickleball</a></div></div></section>
      </main>
      <footer className="footer"><div className="container footer-inner"><span>© 2026 WX Pickleball • Woods Cross, Utah</span><span>Compete • Improve • Represent</span></div></footer>
    </>
  );
}