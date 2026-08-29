import "./globals.css";

const LOGO = "/Logo.png";

const games = [
  { date: "SEP 29", day: "TUE", year: "2026", time: "8:00 PM - 10:00 PM", title: "Open Play Evaluations", location: "Washington Park", players: "ALL" },
  { date: "OCT 6", day: "TUE", year: "2026", time: "8:00 PM - 10:00 PM", title: "Open Play Evaluations", location: "Washington Park", players: "ALL" },
  { date: "OCT 27", day: "TUE", year: "2026", time: "3:00 PM - 6:00 PM", title: "Official Tryouts", location: "Kaysville Picklr", players: "ALL" },
  { date: "OCT 27", day: "TUE", year: "2026", time: "7:00 PM - 10:00 PM", title: "Formal Offers Extended", location: "Text Msg", players: "ALL" },
  { date: "NOV 2", day: "MON", year: "2026", time: "3:00 PM - 4:00 PM", title: "Open Play", location: "WX Small Gym", players: "Development" },
  { date: "NOV 3", day: "TUE", year: "2026", time: "3:00 PM - 5:00 PM", title: "Practice #0", location: "Kaysville Picklr", players: "JV & Varsity" },
  { date: "NOV 9", day: "MON", year: "2026", time: "3:00 PM - 4:00 PM", title: "Open Play", location: "WX Small Gym", players: "Development" },
  { date: "NOV 10", day: "TUE", year: "2026", time: "3:00 PM - 5:00 PM", title: "Practice #1", location: "Kaysville Picklr", players: "JV & Varsity" },
  { date: "NOV 12", day: "THU", year: "2026", time: "4:00 PM - 6:00 PM", title: "Meet 1", location: "Kaysville Picklr", players: "Varsity" },
  { date: "NOV 13", day: "FRI", year: "2026", time: "4:00 PM - 6:00 PM", title: "Meet 1", location: "Kaysville Picklr", players: "JV" },
  { date: "NOV 16", day: "MON", year: "2026", time: "3:00 PM - 4:00 PM", title: "Open Play", location: "WX Small Gym", players: "Development" },
  { date: "NOV 17", day: "TUE", year: "2026", time: "3:00 PM - 5:00 PM", title: "Practice #2", location: "Kaysville Picklr", players: "JV & Varsity" },
  { date: "NOV 19", day: "THU", year: "2026", time: "4:00 PM - 6:00 PM", title: "Meet 2", location: "Kaysville Picklr", players: "Varsity" },
  { date: "NOV 20", day: "FRI", year: "2026", time: "4:00 PM - 6:00 PM", title: "Meet 2", location: "Kaysville Picklr", players: "JV" },
  { date: "NOV 23", day: "MON", year: "2026", time: "3:00 PM - 4:00 PM", title: "Open Play", location: "WX Small Gym", players: "Development" },
  { date: "NOV 30", day: "MON", year: "2026", time: "3:00 PM - 4:00 PM", title: "Open Play", location: "WX Small Gym", players: "Development" },
  { date: "DEC 1", day: "TUE", year: "2026", time: "3:00 PM - 5:00 PM", title: "Practice #3", location: "Kaysville Picklr", players: "JV & Varsity" },
  { date: "DEC 3", day: "THU", year: "2026", time: "4:00 PM - 6:00 PM", title: "Meet 3", location: "Kaysville Picklr", players: "Varsity" },
  { date: "DEC 4", day: "FRI", year: "2026", time: "4:00 PM - 6:00 PM", title: "Meet 3", location: "Kaysville Picklr", players: "JV" },
  { date: "DEC 7", day: "MON", year: "2026", time: "3:00 PM - 4:00 PM", title: "Open Play", location: "WX Small Gym", players: "Development" },
  { date: "DEC 8", day: "TUE", year: "2026", time: "3:00 PM - 5:00 PM", title: "Practice #4", location: "Kaysville Picklr", players: "JV & Varsity" },
  { date: "DEC 10", day: "THU", year: "2026", time: "4:00 PM - 6:00 PM", title: "Meet 4", location: "Kaysville Picklr", players: "Varsity" },
  { date: "DEC 11", day: "FRI", year: "2026", time: "4:00 PM - 6:00 PM", title: "Meet 4", location: "Kaysville Picklr", players: "JV" },
  { date: "DEC 14", day: "MON", year: "2026", time: "3:00 PM - 4:00 PM", title: "Open Play", location: "WX Small Gym", players: "Development" },
  { date: "DEC 15", day: "TUE", year: "2026", time: "3:00 PM - 5:00 PM", title: "Practice #5", location: "Kaysville Picklr", players: "JV & Varsity" },
  { date: "DEC 17", day: "THU", year: "2026", time: "4:00 PM - 6:00 PM", title: "Meet 5", location: "Kaysville Picklr", players: "Varsity" },
  { date: "DEC 18", day: "FRI", year: "2026", time: "4:00 PM - 6:00 PM", title: "Meet 5", location: "Kaysville Picklr", players: "JV" },
  { date: "DEC 21", day: "MON", year: "2026", time: "3:00 PM - 5:00 PM", title: "WX CHRISTMAS TOURNAMENT", location: "Kaysville Picklr", players: "ALL" },
  { date: "JAN 5", day: "TUE", year: "2027", time: "3:00 PM - 5:00 PM", title: "Practice #6", location: "Kaysville Picklr", players: "JV & Varsity" },
  { date: "JAN 7", day: "THU", year: "2027", time: "4:00 PM - 6:00 PM", title: "Meet 6", location: "Kaysville Picklr", players: "Varsity" },
  { date: "JAN 8", day: "FRI", year: "2027", time: "4:00 PM - 6:00 PM", title: "Meet 6", location: "Kaysville Picklr", players: "JV" },
  { date: "JAN 11", day: "MON", year: "2027", time: "3:00 PM - 4:00 PM", title: "Open Play", location: "WX Small Gym", players: "Development" },
  { date: "JAN 12", day: "TUE", year: "2027", time: "3:00 PM - 5:00 PM", title: "Practice #7", location: "Kaysville Picklr", players: "JV & Varsity" },
  { date: "JAN 14", day: "THU", year: "2027", time: "4:00 PM - 6:00 PM", title: "Meet 7", location: "Kaysville Picklr", players: "Varsity" },
  { date: "JAN 15", day: "FRI", year: "2027", time: "4:00 PM - 6:00 PM", title: "Meet 7", location: "Kaysville Picklr", players: "JV" },
  { date: "JAN 18", day: "MON", year: "2027", time: "3:00 PM - 4:00 PM", title: "Open Play", location: "WX Small Gym", players: "Development" },
  { date: "JAN 19", day: "TUE", year: "2027", time: "3:00 PM - 5:00 PM", title: "Practice #8", location: "Kaysville Picklr", players: "JV & Varsity" },
  { date: "JAN 23", day: "SAT", year: "2027", time: "TBA", title: "Regionals — Championship", location: "TBA", players: "Varsity" },
  { date: "JAN 23", day: "SAT", year: "2027", time: "TBA", title: "Regionals — Championship", location: "TBA", players: "JV" },
  { date: "JAN 26", day: "TUE", year: "2027", time: "3:00 PM - 5:00 PM", title: "Practice #9", location: "Kaysville Picklr", players: "JV & Varsity" },
  { date: "JAN 29", day: "FRI", year: "2027", time: "TBA", title: "State Championships — Championship", location: "TBA", players: "JV & Varsity" },
  { date: "JAN 30", day: "SAT", year: "2027", time: "TBA", title: "State Championships — Championship", location: "TBA", players: "JV & Varsity" },
  { date: "FEB 4", day: "THU", year: "2027", time: "TBA", title: "Individual Championships — Championship", location: "TBA", players: "JV & Varsity" },
  { date: "FEB 9", day: "TUE", year: "2027", time: "6:00 PM - 7:30 PM", title: "Pickleball Banquet", location: "WX Commons", players: "ALL" },
];

const scheduleGroups = [
  { name: "VARSITY", className: "varsity", games: games.filter((g) => ["Varsity", "JV & Varsity", "ALL"].includes(g.players)) },
  { name: "JUNIOR VARSITY", className: "jv", games: games.filter((g) => ["JV", "JV & Varsity", "ALL"].includes(g.players)) },
  { name: "DEVELOPMENT", className: "development", games: games.filter((g) => g.players === "Development" || g.players === "ALL") },
];

const FocusIcon = ({ type }) => {
  const common = { width: 42, height: 42, viewBox: "0 0 24 24", "aria-hidden": true };
  if (type === "development") return <svg {...common}><g fill="currentColor"><rect x="2" y="9" width="3" height="6" rx="1"/><rect x="5" y="7" width="3" height="10" rx="1"/><rect x="8" y="11" width="8" height="2" rx="1"/><rect x="16" y="7" width="3" height="10" rx="1"/><rect x="19" y="9" width="3" height="6" rx="1"/></g></svg>;
  if (type === "character") return <svg {...common}><g fill="currentColor"><circle cx="12" cy="7" r="3"/><circle cx="5.5" cy="9" r="2.2"/><circle cx="18.5" cy="9" r="2.2"/><path d="M6.5 20c.2-4.4 2.2-7 5.5-7s5.3 2.6 5.5 7H6.5Z"/><path d="M1.5 19c.1-3.2 1.6-5.2 4-5.2 1.1 0 2 .4 2.8 1.1-.8 1.2-1.3 2.6-1.4 4.1H1.5Z"/><path d="M22.5 19c-.1-3.2-1.6-5.2-4-5.2-1.1 0-2 .4-2.8 1.1.8 1.2 1.3 2.6 1.4 4.1h5.4Z"/></g></svg>;
  if (type === "competition") return <svg {...common}><g fill="currentColor"><path d="M7 3h10v3.7c0 3.7-2.1 6.4-5 6.4s-5-2.7-5-6.4V3Z"/><path d="M5.8 5H3v1.4c0 3.5 1.8 5.7 5 6.2V10C6.5 9.5 5.8 8.4 5.8 6.6V5Z"/><path d="M18.2 5H21v1.4c0 3.5-1.8 5.7-5 6.2V10c1.5-.5 2.2-1.6 2.2-3.4V5Z"/><rect x="10.8" y="12" width="2.4" height="5"/><rect x="8" y="17" width="8" height="2" rx="1"/><rect x="6.5" y="19" width="11" height="2" rx="1"/></g></svg>;
  return <svg {...common} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="9" cy="10" r=".8" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r=".8" fill="currentColor" stroke="none"/><path d="M8.5 14c.9 1.5 2.1 2.3 3.5 2.3s2.6-.8 3.5-2.3"/></svg>;
};

function ScheduleTable({ group }) {
  return (
    <div className={`schedule-block ${group.className}`}>
      <h3 className="schedule-team-title">{group.name}</h3>
      <div className="schedule-table-wrap">
        <table className="schedule-table">
          <thead><tr><th>Date</th><th>Time</th><th>Event</th><th>Location</th><th>Players</th></tr></thead>
          <tbody>
            {group.games.map((g, i) => (
              <tr key={`${group.name}-${g.date}-${g.title}-${i}`}>
                <td>{g.day.charAt(0) + g.day.slice(1).toLowerCase()} | {g.date.charAt(0) + g.date.slice(1).toLowerCase()}, {g.year}</td>
                <td>{g.time}</td><td>{g.title}</td><td>{g.location}</td>
                <td><span className={`player-badge ${g.players === "ALL" ? "all" : g.players === "Development" ? "dev" : "team"}`}>{g.players}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function Home() {
  const iconStyle = { color: "#e51f35", marginBottom: 18, display: "flex", alignItems: "center" };
  return (
    <>
      <header className="topbar"><div className="container nav"><a className="brand" href="#home"><img className="brand-logo" src={LOGO} alt="WX Pickleball logo" /><div className="brand-copy"><strong>WX PICKLEBALL</strong><span>Woods Cross High School</span></div></a><nav className="navlinks"><a href="#team">Team</a><a href="#schedule">Schedule</a><a href="/tournament">Fundraiser</a><a href="#contact">Contact</a></nav><a className="nav-cta" href="/tournament">FUNDRAISER</a></div></header>
      <main>
        <section className="hero" id="home"><div className="container hero-grid"><div className="hero-inner"><div className="kicker">Woods Cross High School Pickleball</div><img className="hero-team-photo" src="/IMG_2759.jpg" alt="WX Pickleball team" /><div className="actions"><a className="btn btn-primary" href="#schedule">View Schedule</a><a className="btn btn-secondary" href="#team">Meet the Team</a></div></div><div className="hero-logo-wrap"><img className="hero-logo" src={LOGO} alt="WX Pickleball wildcat logo" /></div></div></section>
        <section className="section" id="team"><div className="container"><div className="kicker">Our Goals</div><h2>Our Focus</h2><div className="grid grid-4 goals-grid" style={{marginTop:36}}><div className="card"><div style={iconStyle}><FocusIcon type="development" /></div><h3>Development</h3><p>Our goal is to help the athletes develop from wherever they are. We focus on fundamental game play, technical skills, and strategies to win.</p></div><div className="card"><div style={iconStyle}><FocusIcon type="character" /></div><h3>Character</h3><p>Pickleball rewards positive thinking, self-confidence, and attitude. It’s also an extremely social sport. We feel these are wonderful life lessons.</p></div><div className="card"><div style={iconStyle}><FocusIcon type="competition" /></div><h3>Competition</h3><p>We want to compete at the highest levels in the state.</p></div><div className="card"><div style={iconStyle}><FocusIcon type="fun" /></div><h3>Fun</h3><p>“I’ll say this about WX pickleball, no other school is having as much fun out there as you guys are!”</p><p style={{marginTop:14,fontWeight:800}}>— American Heritage Head Coach</p></div></div></div></section>
        <section className="photo-section" id="photos"><div className="container"><div className="photo-heading"><div className="kicker">WX Pickleball</div><h2>This is our team.</h2><p className="section-lead">Competition, teammates, tournaments, and the moments that make the program.</p></div><div className="photo-showcase"><figure className="photo-feature"><img src="/IMG_2759.jpg" alt="WX Pickleball full team at a tournament" /></figure><div className="photo-grid"><figure><img src="/IMG_2473.jpg" alt="WX Pickleball team on court" /></figure><figure><img src="/IMG_3092.jpg" alt="WX Pickleball players at The Picklr" /></figure><figure><img src="/IMG_3237.jpg" alt="WX Pickleball team at an indoor event" /></figure><figure><img src="/IMG_2976.jpg" alt="WX Pickleball players on the podium" /></figure></div></div></div></section>
        <section className="section" id="fundraiser"><div className="container"><div className="cta"><div><div className="kicker dark-kicker">August 22 • Hogan Park</div><h3>WX Fundraising Tournament</h3><p>Grab a partner, compete, and help support the Woods Cross High School Pickleball program.</p></div><a className="btn cta-btn" href="/tournament">Tournament Details</a></div></div></section>
        <section className="section schedule-section" id="schedule"><div className="container"><h2 className="schedule-main-title">2026-2027 Schedule</h2><div className="schedule-groups">{scheduleGroups.map((group) => <ScheduleTable group={group} key={group.name} />)}</div><div className="schedule-note"><strong>Schedules are subject to change.</strong> Check back regularly for updates. All times Mountain Time (MT).</div></div></section>
        <section className="section" id="contact"><div className="container"><div className="cta"><div><div className="kicker dark-kicker">WX PICKLEBALL</div><h3>Ready to play or support the team?</h3><p>Registration, volunteer, sponsor, and contact links will live right here.</p></div><a className="btn cta-btn" href="mailto:">Contact WX Pickleball</a></div></div></section>
      </main>
      <footer className="footer"><div className="container footer-inner"><span>© 2026 WX Pickleball • Woods Cross, Utah</span><span>Compete • Improve • Represent</span></div></footer>
    </>
  );
}
