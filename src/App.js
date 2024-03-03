import { useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import HomeHero from "./components/HomeHero.jsx";
import Calendar from "./components/Calendar.jsx";

function App() {
	const [data, setData] = useState({
		date: "2024-04-22",
		days: {
			0: [
				{
					start: 9,
					duration: 1.5,
				},
				{
					start: 11.0,
					duration: 2.0,
				},
			],
			1: [
				{
					start: 15.5,
					duration: 3.0,
				},
				{
					start: 19.0,
					duration: 1.0,
				},
			],
			2: [
				{
					start: 10.0,
					duration: 1.0,
				},
				{
					start: 11.0,
					duration: 2.0,
				},
				{
					start: 14.0,
					duration: 5.0,
				},
			],
			3: [],
			4: [
				{
					start: 15.0,
					duration: 4.0,
				},
			],
		},
	});
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
