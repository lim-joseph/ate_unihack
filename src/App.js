import { useEffect, useState } from "react";
import "./index.css";
import NavBar from "./components/nav_bar";

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
		<div>
			<NavBar></NavBar>
			<p className="bg-red-500">Hello world</p>
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
