import "../index.css";
import { Button } from "@nextui-org/react";
import Hearts from "../assets/hearts.png";
import { useRef, useState, useEffect } from "react";

export default function HomeHero({
	setShowTimetable,
	setInput1,
	setInput2,
	setData,
}) {
	const input1Ref = useRef();
	const input2Ref = useRef();

	function handleSubmit() {
		setInput1(input1Ref.current.value);
		setInput2(input2Ref.current.value);
		setShowTimetable(true);

		const url =
			"/data?ics-url1=" +
			encodeURIComponent(input1Ref.current.value) +
			"&ics-url2=" +
			encodeURIComponent(input2Ref.current.value);

		if (url) {
			fetch(url)
				.then((res) => res.text())
				.then((data) => {
					setData(data);
					console.log(data);
				})
				.catch((error) => console.error("Error fetching data:", error));
		}
	}

	return (
		<div className="flex">
			<img
				src={Hearts}
				alt=""
				className="fixed inset-0 object-cover z-0 blur-[10px] w-[60svw] left-[18rem]"
			/>

			<div
				className="h-[40rem] w-full rounded-md relative flex flex-col items-center mt-[6rem] antialiased"
				style={{
					backgroundImage: "url('../components/assets/hearts.png')",
				}}
			>
				<div className="max-w-2xl mx-auto p-4">
					<h1 className="text-3xl md:text-7xl bg-clip-text text-pink-600 drop-shadow-md text-center font-sans font-bold">
						No more lonely class breaks.
					</h1>

					<p></p>
					<p className="text-neutral-600 text-xl max-w-lg mx-auto mt-10 text-center relative z-10 drop-shadow-md">
						Copy the link at the bottom of your Allocate+ home page
						and paste it below!
					</p>

					<div className="mt-8">
						<label
							htmlFor="user-1"
							className="text-sm font-semibold"
						>
							First person
						</label>
						<input
							ref={input1Ref}
							type="text"
							name="user-1"
							placeholder="https://my-timetable.monash.edu/even/rest/calendar/ical/..."
							className="drop-shadow-md rounded-lg border p-2 w-full relative z-10 mt-4 bg-gray-100 placeholder:text-neutral-300"
						/>
					</div>
					<div className="mt-8">
						<label
							htmlFor="user-2"
							className="text-sm font-semibold"
						>
							Second person
						</label>
						<input
							ref={input2Ref}
							type="text"
							name="user-2"
							placeholder="https://my-timetable.monash.edu/even/rest/calendar/ical/..."
							className="drop-shadow-md rounded-lg border p-2 w-full relative z-10 mt-4 bg-gray-100 placeholder:text-neutral-300"
						/>
					</div>
				</div>

				<Button
					color="danger"
					variant="solid"
					className="drop-shadow-md mt-4"
					onClick={handleSubmit}
				>
					Allodate!
				</Button>
			</div>
		</div>
	);
}
