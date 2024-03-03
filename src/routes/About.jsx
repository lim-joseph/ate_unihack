import Navbar from "../components/Navbar";

export default function About({ setShowCalendar }) {
	return (
		<>
			<Navbar setShowCalendar={{ setShowCalendar }} />
			Look I used react router!
		</>
	);
}
