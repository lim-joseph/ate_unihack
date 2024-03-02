import { useEffect, useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import HomeHero from "./components/HomeHero.jsx";
import Calendar from "./components/Calendar.jsx";

function App() {
  const [data, setData] = useState({});
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    document.title = "Allodate+ <3";
  }, []);

  useEffect(() => {
    // Testing URL
    var icsUrl =
      "https://my-timetable.monash.edu/even/rest/calendar/ical/9cf97753-fcd9-4634-871d-de828696900e";

    var dataFetchURL = "/data?ics-url=" + encodeURIComponent(icsUrl);
    fetch(dataFetchURL)
      .then((res) => res.text())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="min-h-svh">
      <Navbar setShowCalendar={setShowCalendar} />

      {!showCalendar ? (
        <HomeHero
          showTimetable={showCalendar}
          setShowTimetable={setShowCalendar}
        />
      ) : (
        <Calendar showTimetable={showCalendar} />
      )}

      {typeof data.members === "undefined" ? (
        <p>Loading...</p>
      ) : (
        data.members.map((member, i) => {
          return <p key={i}>{member}</p>;
        })
      )}
    </div>
  );
}

export default App;
