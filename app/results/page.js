import "../globals.css";
import "./results.css";
import ResultsBoard from "./ResultsBoard";
import snapshot from "../../data/results.json";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Meet Results | WX Pickleball",
  description: "Woods Cross High School Pickleball results, match scores, players and Dreambreakers for the 2026–2027 season."
};

function parseCsv(input) {
  const records = [];
  let record = [], field = "", quoted = false;
  const source = input.replace(/^\uFEFF/, "");
  for (let i = 0; i < source.length; i++) {
    const char = source[i];
    if (char === '"') {
      if (quoted && source[i + 1] === '"') { field += '"'; i++; }
      else { quoted = !quoted; }
    } else if (char === "," && !quoted) {
      record.push(field); field = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && source[i + 1] === "\n") i++;
      record.push(field);
      if (record.some((part) => part.trim() !== "")) records.push(record);
      record = []; field = "";
    } else {
      field += char;
    }
  }
  record.push(field);
  if (record.some((part) => part.trim() !== "")) records.push(record);
  return records;
}

function rowsFromCsv(csv) {
  const records = parseCsv(csv);
  const header = (records.shift() || []).map((value) => value.trim());
  const required = ["Date", "Opponent", "Team", "Match Type", "WX Players", "Game 1", "Game 2", "Game 3", "Winner"];
  if (!required.every((column) => header.includes(column))) throw new Error("Results feed has unexpected columns");
  return records.map((values) => Object.fromEntries(required.map((column) => [column, String(values[header.indexOf(column)] || "").trim()])))
    .filter((row) => row.Date && row.Opponent && row.Team && row["Match Type"] && row.Winner);
}

async function getResults() {
  // Keep the original roster/interest-form workbook private. Only accept a
  // separate published results-only CSV URL set in Vercel on the server.
  const url = process.env.RESULTS_CSV_URL;
  if (!url) return { rows: snapshot.rows, live: false };
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "https:") throw new Error("HTTPS results feed required");
    const response = await fetch(url, { next: { revalidate: 300 }, signal: AbortSignal.timeout(9000) });
    if (!response.ok) throw new Error("Results feed unavailable");
    const rows = rowsFromCsv(await response.text());
    return { rows, live: true };
  } catch (error) {
    console.error("Results feed unavailable; using last published snapshot:", error.message);
    return { rows: snapshot.rows, live: false };
  }
}

export default async function ResultsPage() {
  const { rows, live } = await getResults();
  return <ResultsBoard rows={rows} live={live} />;
}
