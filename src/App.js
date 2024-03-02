import { useEffect, useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import HomeHero from "./components/HomeHero.jsx";
import Calendar from "./components/Calendar.jsx";

function App() {
	const [data, setData] = useState({});
	const [showCalendar, setShowCalendar] = useState(false);

	useEffect(() => {
		fetch("/members")
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				console.log(data.members);
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
