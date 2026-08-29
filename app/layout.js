export const metadata = {
  title: "WX Pickleball | Woods Cross High School",
  description: "Woods Cross High School Pickleball — team, schedule, tournaments, sponsors, and more.",
};

function MeetFormatSection() {
  return (
    <section id="meet-format" className="meet-format-section">
      <div className="container">
        <div className="meet-kicker">MLP-Style Team Competition</div>
        <h2>Meet Format</h2>
        <p className="meet-intro">Each meet is played as a team in MLP-style format.</p>
        <div className="meet-equation">1 MEET <strong>=</strong> 4 MATCHES</div>
        <div className="meet-match-grid">
          <div className="meet-match"><div className="meet-num">01</div><h3>Boys Doubles</h3></div>
          <div className="meet-match"><div className="meet-num">02</div><h3>Girls Doubles</h3></div>
          <div className="meet-match"><div className="meet-num">03</div><h3>Mixed 1</h3></div>
          <div className="meet-match"><div className="meet-num">04</div><h3>Mixed 2</h3></div>
        </div>
        <div className="match-rules">
          <div className="match-rule"><span className="match-rule-label">How a match is won</span><span className="match-rule-value">Best <em>2 of 3</em></span></div>
          <div className="match-rule"><span className="match-rule-label">Games to</span><span className="match-rule-value"><em>11</em></span></div>
          <div className="match-rule"><span className="match-rule-label">Win by</span><span className="match-rule-value"><em>2</em></span></div>
          <div className="match-rule"><span className="match-rule-label">Result</span><span className="match-rule-value">Win the Match</span></div>
        </div>
        <div className="dreambreaker">
          <div>
            <div className="dream-title">⚡ DreamBreaker</div>
            <div className="dream-sub">If the meet is tied 2–2 after four matches</div>
            <p className="dream-copy">The entire roster lines up and plays through the opponent’s roster <strong>4 rallies at a time.</strong> Win at 21 on the serve, win by 2, with a cap at 25.</p>
          </div>
          <div className="dream-stats">
            <div className="dream-stat"><span>First to</span><strong>21</strong><span>on the serve</span></div>
            <div className="dream-stat"><span>Win by</span><strong>2</strong></div>
            <div className="dream-stat"><span>Cap at</span><strong>25</strong></div>
          </div>
        </div>
        <p className="meet-tagline">Team competition. High energy. Every point matters.</p>
      </div>
    </section>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <MeetFormatSection />
        <style>{`
          .meet-format-section{background:#fff;padding:92px 0;color:#102033}
          .meet-format-section .meet-kicker{color:#e51f35;font-weight:900;letter-spacing:.15em;text-transform:uppercase;font-size:13px}
          .meet-format-section h2{font-size:clamp(40px,5vw,64px);margin:8px 0 12px;letter-spacing:-.04em}
          .meet-intro{font-size:19px;color:#657487;margin:0 0 30px}
          .meet-equation{background:#071c31;color:#fff;border-radius:14px;padding:20px 28px;text-align:center;font-size:clamp(24px,3vw,38px);font-weight:900;letter-spacing:-.02em;margin-bottom:24px}
          .meet-equation strong{color:#e51f35}
          .meet-match-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
          .meet-match{border:1px solid #e1e7ed;border-top:5px solid #e51f35;border-radius:14px;padding:25px 20px;background:#fff;box-shadow:0 10px 28px rgba(7,28,49,.07);text-align:center}
          .meet-num{color:#e51f35;font-size:13px;font-weight:900;letter-spacing:.12em;margin-bottom:10px}
          .meet-match h3{font-size:22px;margin:0;color:#071c31}
          .match-rules{display:grid;grid-template-columns:1.35fr repeat(3,1fr);margin-top:22px;border:1px solid #e1e7ed;border-radius:14px;overflow:hidden;background:#f4f7fa}
          .match-rule{padding:22px;border-right:1px solid #d9e0e7;display:flex;flex-direction:column;justify-content:center}
          .match-rule:last-child{border-right:0}
          .match-rule-label{font-size:11px;font-weight:900;letter-spacing:.1em;text-transform:uppercase;color:#657487}
          .match-rule-value{font-size:26px;font-weight:900;color:#071c31;margin-top:4px}
          .match-rule-value em{font-style:normal;color:#e51f35}
          .dreambreaker{margin-top:24px;background:linear-gradient(135deg,#b80f22,#e51f35);color:#fff;border-radius:16px;padding:32px;display:grid;grid-template-columns:1.4fr 1fr;gap:30px;align-items:center}
          .dream-title{font-size:clamp(32px,4vw,52px);font-weight:900;letter-spacing:-.035em;margin:0 0 6px}
          .dream-sub{font-size:13px;font-weight:900;text-transform:uppercase;letter-spacing:.08em;color:#ffd9dd;margin-bottom:16px}
          .dream-copy{font-size:17px;line-height:1.6;margin:0;max-width:650px}
          .dream-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
          .dream-stat{background:rgba(7,28,49,.9);border-radius:12px;padding:18px 10px;text-align:center}
          .dream-stat span{display:block;font-size:11px;text-transform:uppercase;font-weight:900;letter-spacing:.08em;color:#dbe4ed}
          .dream-stat strong{display:block;font-size:34px;margin-top:4px}
          .meet-tagline{text-align:center;margin:25px 0 0;font-size:14px;font-weight:900;letter-spacing:.09em;text-transform:uppercase;color:#071c31}
          @media(max-width:800px){.meet-match-grid{grid-template-columns:1fr 1fr}.match-rules{grid-template-columns:1fr 1fr}.match-rule:nth-child(2){border-right:0}.match-rule:nth-child(-n+2){border-bottom:1px solid #d9e0e7}.dreambreaker{grid-template-columns:1fr}.dream-stats{max-width:500px}}
          @media(max-width:560px){.meet-format-section{padding:70px 0}.meet-match-grid{gap:10px}.meet-match{padding:19px 10px}.meet-match h3{font-size:17px}.meet-equation{padding:17px 12px}.match-rule{padding:17px 10px;text-align:center}.match-rule-value{font-size:21px}.dreambreaker{padding:25px 20px}.dream-stats{gap:7px}.dream-stat{padding:15px 5px}.dream-stat strong{font-size:27px}.dream-copy{font-size:15px}}
        `}</style>
        <script dangerouslySetInnerHTML={{__html: `
          document.addEventListener('click', function (event) {
            var link = event.target.closest('.site-menu-panel a');
            if (!link) return;
            var menu = link.closest('details.site-menu');
            if (menu) menu.removeAttribute('open');
          });

          function placeSections() {
            var meetFormat = document.getElementById('meet-format');
            var schedule = document.getElementById('schedule');
            if (meetFormat && schedule && schedule.parentNode && meetFormat.nextElementSibling !== schedule) {
              schedule.parentNode.insertBefore(meetFormat, schedule);
            }
            var fundraiser = document.getElementById('fundraiser');
            var main = document.querySelector('main');
            if (fundraiser && main && main.lastElementChild !== fundraiser) {
              main.appendChild(fundraiser);
            }
          }
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function () { setTimeout(placeSections, 250); });
          } else {
            setTimeout(placeSections, 250);
          }
          window.addEventListener('load', placeSections);
          setTimeout(placeSections, 1000);
        `}} />
      </body>
    </html>
  );
}
