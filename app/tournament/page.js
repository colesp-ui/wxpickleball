import "../globals.css";

const LOGO = "/Logo.png";
const photos = ["/IMG_2067.jpeg", "/IMG_2072.jpeg", "/IMG_2090.jpeg", "/IMG_2092.jpeg"];
const REGISTRATION_URL = "https://docs.google.com/forms/d/e/1FAIpQLScYDjj9CJMCelDYZaMjmk3iaEIU6dSIonE3viC4NbuSsJCNsw/viewform?usp=header";
const PAYMENT_URL = "https://venmo.com/code?user_id=4634788421961710994&created=1788029199.874104&printed=1";
const GROUPME_URL = "https://groupme.com/join_group/109853728/BgH41V2x";

export default function TournamentPage() {
  return (
    <>
      <header className="topbar"><div className="container nav"><a className="brand" href="/"><img className="brand-logo" src={LOGO} alt="WX Pickleball logo" /><div className="brand-copy"><strong>WX PICKLEBALL</strong><span>Woods Cross High School</span></div></a><nav className="navlinks"><a href="/">Home</a><a href="#details">Details</a><a href="#format">Format</a><a href="#photos">Photos</a></nav><a className="nav-cta" href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer">REGISTER</a></div></header>
      <main className="tournament-page">
        <section className="tournament-hero">
          <img className="tournament-hero-image" src="/IMG_2067.jpeg" alt="WX Pickleball fundraising tournament" />
          <div className="tournament-hero-overlay" />
          <div className="container tournament-hero-content"><div className="kicker red">WX Pickleball Fundraiser</div><h1>FUNDRAISING<br/>TOURNAMENT</h1><p>Compete. Have fun. Support Woods Cross High School Pickleball.</p><div className="actions"><a className="btn btn-primary" href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer">Register Your Team</a><a className="btn btn-secondary" href="#details">Tournament Details</a></div></div>
        </section>

        <section className="tournament-facts" id="details"><div className="container tournament-facts-grid"><div><span>Date</span><strong>August 22</strong></div><div><span>Time</span><strong>8 AM – 12 PM</strong></div><div><span>Location</span><strong>Hogan Park</strong></div><div><span>Divisions</span><strong>Two Competitive Levels</strong></div></div></section>

        <section className="section"><div className="container tournament-intro"><div><div className="kicker">Play for the program</div><h2>A great morning of pickleball for a great cause.</h2></div><p>Our fundraising tournament brings the pickleball community together to compete and support the WX High School Pickleball program. Grab a partner, choose your division, and come play.</p></div></section>

        <section className="tournament-format" id="format"><div className="container"><div className="kicker red">Tournament Format</div><h2>Pick your division.</h2><div className="division-grid"><div className="division-card"><span>DIVISION I</span><strong>4.25+</strong><p>Our highest competitive division for advanced players.</p></div><div className="division-card"><span>DIVISION II</span><strong>3.5 – 4.25</strong><p>Competitive play for strong intermediate and advanced players.</p></div></div><div className="format-note"><strong>Pool play → single elimination.</strong><span>Top teams advance from pool play into the tournament bracket.</span></div></div></section>

        <section className="tournament-gallery section" id="photos"><div className="container"><div className="kicker">WX Pickleball</div><h2>Come be part of it.</h2><div className="tournament-photo-grid">{photos.map((photo, i) => <figure key={photo} className={i === 0 ? "wide" : ""}><img src={photo} alt="WX Pickleball tournament" /></figure>)}</div></div></section>

        <section className="section tournament-register" id="register"><div className="container"><div className="tournament-register-box"><img src={LOGO} alt="WX Pickleball"/><div><div className="kicker dark-kicker">Support WX Pickleball</div><h2>Ready to play?</h2><p>Register your team, submit your tournament payment, and join the GroupMe for real-time chat, results, and tournament info.</p></div><div className="actions"><a className="btn cta-btn" href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer">Register Your Team</a><a className="btn btn-secondary" href={PAYMENT_URL} target="_blank" rel="noopener noreferrer">Pay with Venmo</a><a className="btn btn-secondary" href={GROUPME_URL} target="_blank" rel="noopener noreferrer">Join the GroupMe</a></div></div></div></section>
      </main>
      <footer className="footer"><div className="container footer-inner"><span>© 2026 WX Pickleball • Woods Cross, Utah</span><a href="/">Back to WX Pickleball</a></div></footer>
    </>
  );
}