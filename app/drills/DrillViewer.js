"use client";

import { useRef, useState } from "react";

const drills = [
  ["Team Dinks", "/01_team_dinks.jpg"],
  ["Bounce Resets", "/02_bounce_resets.jpg"],
  ["Drops", "/03_drops.jpg"],
  ["Drives", "/04_drives.jpg"],
  ["Volley Resets", "/05_volley_resets.jpg"],
  ["Dink Battle", "/06_dink_battle.jpg"],
  ["Bounce Resets — Switch Roles", "/07_bounce_resets.jpg"],
  ["Drops — Switch Roles", "/08_drops.jpg"],
  ["Drives — Switch Roles", "/09_drives.jpg"],
  ["Volley Resets — Switch Roles", "/10_volley_resets.jpg"],
  ["Fast Hands", "/11_fast_hands.jpg"],
  ["Serve & Return — Switch", "/12_serve_and_return.jpg"],
];

export default function DrillViewer() {
  const [active, setActive] = useState(0);
  const strip = useRef(null);

  function goTo(index) {
    const next = Math.min(drills.length - 1, Math.max(0, index));
    const viewport = strip.current;
    if (!viewport) return;
    viewport.scrollTo({ left: next * viewport.clientWidth, behavior: "smooth" });
    setActive(next);
  }

  function onScroll(event) {
    const node = event.currentTarget;
    if (!node.clientWidth) return;
    const next = Math.min(drills.length - 1, Math.max(0, Math.round(node.scrollLeft / node.clientWidth)));
    setActive(next);
  }

  return (
    <div className="drills-shell">
      <div className="drills-heading">
        <span>WX PICKLEBALL · PRACTICE</span>
        <h1>DRILLS</h1>
        <p>Swipe left or right to move through all 12 warm-up drills.</p>
      </div>
      <div className="drills-toolbar">
        <button type="button" onClick={() => goTo(active - 1)} disabled={active === 0} aria-label="Previous drill">‹ Previous</button>
        <strong aria-live="polite">DRILL {active + 1} OF {drills.length}</strong>
        <button type="button" onClick={() => goTo(active + 1)} disabled={active === drills.length - 1} aria-label="Next drill">Next ›</button>
      </div>
      <div className="drills-strip" ref={strip} onScroll={onScroll} aria-label="Swipeable practice drill images">
        {drills.map(([name, src], i) => (
          <div className="drills-slide" key={src} aria-label={`Drill ${i + 1}: ${name}`}>
            <img src={src} alt={`Drill ${i + 1} of 12: ${name}. Pickleball court positioning and player actions.`} width="1179" height="2556" loading={i < 2 ? "eager" : "lazy"} draggable="false" />
          </div>
        ))}
      </div>
      <div className="drills-progress" role="group" aria-label="Select a drill">
        {drills.map(([name], i) => <button key={i} type="button" onClick={() => goTo(i)} className={i === active ? "selected" : ""} aria-label={`Go to drill ${i + 1}: ${name}`} aria-current={i === active ? "step" : undefined} />)}
      </div>
      <p className="drills-footnote">Follow the drills in order from 1 to 12. Finish drill 12 by switching server and returner.</p>
    </div>
  );
}
