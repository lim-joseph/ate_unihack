import { useEffect, useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import HomeHero from "./components/HomeHero.jsx";

function App() {
	const [data, setData] = useState({});

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
			<Navbar />
			<HomeHero />
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
