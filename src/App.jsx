import "./App.css";

const NAMES = ["Roman", "Jess", "Audrey", "Tim", "Alex", "Seth"];
const startDate = new Date("July 1, 2022 01:15:00");

function getPresenterIndex(startDate, endDate) {
  const msInWeek = 1000 * 60 * 60 * 24 * 7;
  const weeksDiff = Math.round(Math.abs(endDate - startDate) / msInWeek);
  return Math.ceil(weeksDiff / 2) - 1;
}

function App() {
  return (
    <header>
      <h1>
        Wait, Who is presenting this week?{" "}
        <span className="presenter">
          {NAMES[getPresenterIndex(startDate, new Date())]}
        </span>
      </h1>
    </header>
  );
}

export default App;
