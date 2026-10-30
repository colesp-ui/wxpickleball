import "../globals.css";
import "./rosters.css";
import roster from "../../data/roster-public.json";

export const metadata = { title:"Team Rosters | WX Pickleball", description:"2026–2027 Varsity, Junior Varsity and Club rosters for Woods Cross Pickleball." };
export default function RostersPage(){
 const total = roster.reduce((n,t)=>n+t.boys.length+t.girls.length,0);
 return <div className="wx-roster-page">
   <header className="wx-roster-nav"><div className="container wx-roster-nav-inner">
     <a href="/" className="wx-roster-brand"><img src="/Logo.png" alt=""/><span><b>WX PICKLEBALL</b><small>WOODS CROSS HIGH SCHOOL</small></span></a>
     <nav><a href="/">HOME</a><a href="/#schedule">SCHEDULE</a><a href="/results">RESULTS</a><a href="/rosters" aria-current="page">ROSTERS</a></nav>
   </div></header>
   <section className="wx-roster-hero"><div className="container">
      <p className="wx-roster-eyebrow">2026–2027 • WOODS CROSS HIGH SCHOOL</p><h1>MEET THE <em>TEAM.</em></h1>
      <p className="wx-roster-intro">One program. Three teams. Every player part of WX Pickleball.</p>
      <div className="wx-roster-stats"><span><b>{total}</b> PLAYERS</span><span><b>3</b> TEAMS</span><span><b>1</b> PROGRAM</span></div>
   </div></section>
   <main className="wx-roster-main"><div className="container">
    <div className="wx-roster-quicklinks">{roster.map(t=><a key={t.team} className={"wx-roster-link wx-"+t.team.toLowerCase()} href={"#"+t.team.toLowerCase()}>{t.team==="JV"?"JUNIOR VARSITY":t.team.toUpperCase()} <span>↓</span></a>)}</div>
    {roster.map(t=><section id={t.team.toLowerCase()} key={t.team} className={"wx-roster-team wx-"+t.team.toLowerCase()}>
      <div className="wx-roster-team-heading"><div><span className="wx-roster-team-kicker">WX PICKLEBALL • 2026–27</span><h2>{t.team==="JV"?"Junior Varsity":t.team}</h2></div><div className="wx-roster-total"><b>{t.boys.length+t.girls.length}</b><span>PLAYERS</span></div></div>
      <div className="wx-roster-columns">
        {[{title:"Boys",names:t.boys},{title:"Girls",names:t.girls}].map(group=><div key={group.title} className="wx-roster-column"><div className="wx-roster-column-top"><h3>{group.title}</h3><span>{group.names.length} ATHLETES</span></div><div className="wx-roster-names">{group.names.map((name)=><div className="wx-roster-person" key={name}><span>{name}</span></div>)}</div></div>)}
      </div>
    </section>)}
    <p className="wx-roster-note">2026–2027 team assignments • Player names only. Rosters may be updated as the season progresses.</p>
   </div></main>
   <footer className="wx-roster-footer"><div className="container"><span>© 2026 WX Pickleball • Woods Cross High School</span><a href="/">BACK TO HOME →</a></div></footer>
 </div>;
}