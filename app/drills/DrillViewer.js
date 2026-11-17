"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

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
  const [expanded, setExpanded] = useState(false);
  const strip = useRef(null);
  const opener = useRef(null);
  const closeRef = useRef(null);

  function goTo(index) {
    const next = Math.min(drills.length - 1, Math.max(0, index));
    setActive(next);
    if (strip.current) strip.current.scrollTo({ left: next * strip.current.clientWidth, behavior: "smooth" });
  }

  function onScroll(event) {
    const node = event.currentTarget;
    if (node.clientWidth) setActive(Math.min(drills.length - 1, Math.max(0, Math.round(node.scrollLeft / node.clientWidth))));
  }

  function openViewer(index, element) {
    opener.current = element;
    setActive(index);
    setExpanded(true);
  }

  function closeViewer() {
    setExpanded(false);
    if (strip.current) strip.current.scrollTo({ left: active * strip.current.clientWidth, behavior: "instant" });
  }

  useEffect(() => {
    if (!expanded) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    function onKey(event) {
      if (event.key === "Escape") setExpanded(false);
      if (event.key === "ArrowRight") setActive(value => Math.min(drills.length - 1, value + 1));
      if (event.key === "ArrowLeft") setActive(value => Math.max(0, value - 1));
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", onKey);
      opener.current?.focus();
    };
  }, [expanded]);


  return (
    <div className="drills-shell">
      <div className="drills-heading">
        <span>WX PICKLEBALL · PRACTICE</span>
        <h1>DRILLS</h1>
        <p>Tap a drill for full-screen viewing, then tap the picture to advance.</p>
      </div>
      <div className="drills-toolbar">
        <button type="button" onClick={() => goTo(active - 1)} disabled={active === 0} aria-label="Previous drill">‹ Previous</button>
        <strong aria-live="polite">DRILL {active + 1} OF {drills.length}</strong>
        <button type="button" onClick={() => goTo(active + 1)} disabled={active === drills.length - 1} aria-label="Next drill">Next ›</button>
      </div>
      <div className="drills-strip" ref={strip} onScroll={onScroll} aria-label="Practice drill images">
        {drills.map(([name, src], i) => (
          <div className="drills-slide" key={src} aria-label={`Drill ${i + 1}: ${name}`}>
            <button className="drills-open" type="button" onClick={event => openViewer(i, event.currentTarget)} aria-label={`Open drill ${i + 1} full-screen; tap to advance`}>
              <img src={src} alt={`Drill ${i + 1} of 12: ${name}. Pickleball court positioning and player actions.`} width="1179" height="2556" data-no-lightbox="true" loading={i < 2 ? "eager" : "lazy"} draggable="false" />
            </button>
          </div>
        ))}
      </div>
      <div className="drills-progress" role="group" aria-label="Select a drill">
        {drills.map(([name], i) => <button key={i} type="button" onClick={() => goTo(i)} className={i === active ? "selected" : ""} aria-label={`Go to drill ${i + 1}: ${name}`} aria-current={i === active ? "step" : undefined} />)}
      </div>
      <p className="drills-footnote">Tap the picture to open the full-screen gallery, then tap to advance.</p>

      {expanded && createPortal(
        <div
          className="drills-fullscreen"
          role="dialog"
          aria-modal="true"
          aria-label="Tap picture to advance through practice drills"
          style={{position:"fixed",inset:0,zIndex:2147483000,width:"100vw",height:"100dvh",background:"#081522",display:"flex",flexDirection:"column",overflow:"hidden",margin:0,padding:0,boxSizing:"border-box",touchAction:"pan-y"}}
        >
          <button
            type="button"
            className="drills-fullscreen-close"
            onClick={closeViewer}
            ref={closeRef}
            aria-label="Close drill viewer"
            style={{position:"absolute",top:"calc(env(safe-area-inset-top, 0px) + 10px)",right:12,zIndex:4,width:44,height:44,border:0,borderRadius:24,background:"rgba(2,15,27,.85)",color:"white",fontSize:32,display:"flex",alignItems:"center",justifyContent:"center",lineHeight:1}}
          >×</button>
          <div
            className="drills-fullscreen-image"
            role="button"
            tabIndex={0}
            aria-label={active === drills.length - 1 ? "Final drill" : "Tap to view next drill"}
            onClick={() => setActive(i => Math.min(drills.length - 1, i + 1))}
            onKeyDown={event => { if (event.target === event.currentTarget && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); setActive(i => Math.min(drills.length - 1, i + 1)); } }}
            style={{display:"flex",flex:"1 1 0",minHeight:0,minWidth:0,width:"100%",alignItems:"center",justifyContent:"center",overflow:"hidden",padding:"0 5px",boxSizing:"border-box",cursor:active===drills.length-1?"default":"pointer"}}
          >
            <img
              key={active}
              src={drills[active][1]}
              alt={`Drill ${active + 1} of 12: ${drills[active][0]}`}
              draggable="false"
              data-no-lightbox="true"
              width="1179"
              height="2556"
              style={{display:"block",width:"auto",height:"auto",maxWidth:"100%",maxHeight:"100%",objectFit:"contain",flex:"0 1 auto",minWidth:0,minHeight:0,userSelect:"none",WebkitUserDrag:"none"}}
            />
          </div>
          <div
            className="drills-fullscreen-controls"
            style={{display:"flex",flex:"0 0 auto",height:"calc(50px + env(safe-area-inset-bottom, 0px))",paddingBottom:"env(safe-area-inset-bottom, 0px)",alignItems:"center",justifyContent:"center",gap:28,color:"white",fontWeight:800,fontSize:15,boxSizing:"border-box"}}
          >
            <button type="button" onClick={() => setActive(i => Math.max(0,i-1))} disabled={active===0} aria-label="Previous drill" style={{width:48,height:40,background:"#173b56",color:"#fff",fontSize:28,border:0,borderRadius:8,opacity:active===0?.3:1}}>‹</button>
            <span aria-live="polite">{active + 1} / {drills.length}</span>
            <button type="button" onClick={() => setActive(i => Math.min(drills.length-1,i+1))} disabled={active===drills.length-1} aria-label="Next drill" style={{width:48,height:40,background:"#173b56",color:"#fff",fontSize:28,border:0,borderRadius:8,opacity:active===drills.length-1?.3:1}}>›</button>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
