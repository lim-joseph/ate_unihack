import { useEffect, useState } from "react";
import "./App.css";

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
			<p>Hello world</p>
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
