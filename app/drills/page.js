import DrillViewer from "./DrillViewer";
import "./drills.css";

export const metadata = {
  title: "Drills | WX Pickleball",
  description: "12 step-by-step Woods Cross pickleball practice drills with swipeable court diagrams.",
};

export default function DrillsPage() {
  return (
    <main className="drills-page">
      <div className="drills-top-link"><a href="/" className="drills-back">← WX PICKLEBALL HOME</a></div>
      <DrillViewer />
    </main>
  );
}
