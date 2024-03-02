import { useEffect, useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import HomeHero from "./components/HomeHero.jsx";
import Calendar from "./components/Calendar.jsx";

function App() {
	const [data, setData] = useState({});
	const [showCalendar, setShowCalendar] = useState(false);
	const [input1, setInput1] = useState("");
	const [input2, setInput2] = useState("");

	useEffect(() => {
		document.title = "Allodate+ <3";
	}, []);

	return (
		<div className="min-h-svh">
			<Navbar setShowCalendar={setShowCalendar} />

			{!showCalendar ? (
				<HomeHero
					showTimetable={showCalendar}
					setShowTimetable={setShowCalendar}
					setInput1={setInput1}
					setInput2={setInput2}
					setData={setData}
				/>
			) : (
				<Calendar showTimetable={showCalendar} />
			)}
		</div>
	);
}

export default App;
