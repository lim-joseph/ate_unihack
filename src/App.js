import { useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import HomeHero from "./components/HomeHero.jsx";
import Calendar from "./components/Calendar.jsx";

function App() {
  const [data, setData] = useState({});
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <div className="min-h-svh">
      <Navbar setShowCalendar={setShowCalendar} />

      {!showCalendar ? (
        <HomeHero
          showTimetable={showCalendar}
          setShowTimetable={setShowCalendar}
          setData={setData}
        />
      ) : (
        <Calendar data={data} />
      )}
    </div>
  );
}

export default App;
