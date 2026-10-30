"use client";

import { useEffect, useState } from "react";

function mountainToday() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Denver", year: "numeric", month: "2-digit", day: "2-digit"
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts.map(p => [p.type, p.value]));
  return Number(values.year) * 10000 + Number(values.month) * 100 + Number(values.day);
}

const MONTHS = {JAN:0,FEB:1,MAR:2,APR:3,MAY:4,JUN:5,JUL:6,AUG:7,SEP:8,OCT:9,NOV:10,DEC:11};
function eventDay(event) {
  const bits = String(event.date).toUpperCase().split(/\s+/);
  const month = MONTHS[bits[0]];
  const day = Number(bits[1]);
  const year = Number(event.year);
  if (month === undefined || !day || !year) return null;
  return { key: year * 10000 + (month + 1) * 100 + day, date: new Date(Date.UTC(year, month, day)) };
}
const dateFormatter = new Intl.DateTimeFormat("en-US", {
  weekday: "short", month: "short", day: "numeric", year: "numeric", timeZone: "UTC"
});

export default function UpcomingActivities({ games }) {
  const [today, setToday] = useState(null);
  useEffect(() => { setToday(mountainToday()); }, []);
  const upcoming = games.map((event, i) => ({ ...event, i, when: eventDay(event) }))
    .filter(event => event.when && (today === null || event.when.key >= today))
    .sort((a, b) => a.when.key - b.when.key || a.i - b.i).slice(0, 4);
  return <section className="wx-upcoming-section" id="important-dates">
    <div className="container">
      <div className="wx-upcoming-heading">
        <div><div className="kicker">On the calendar</div><h2>Important Dates Coming Up</h2></div>
        <a href="#schedule">Full Schedule <span aria-hidden="true">→</span></a>
      </div>
      {upcoming.length ? <div className="wx-upcoming-grid">{upcoming.map(event =>
        <article className="wx-upcoming-card" key={event.i}>
          <div className="wx-upcoming-date">{dateFormatter.format(event.when.date)}</div>
          <h3>{event.title}</h3>
          <div className="wx-upcoming-detail">{event.time}</div>
          <div className="wx-upcoming-detail">{event.location}</div>
          <div className="wx-upcoming-audience">{event.players}</div>
        </article>
      )}</div> : <p className="wx-upcoming-none">No upcoming activities are currently scheduled.</p>}
    </div>
  </section>;
}
