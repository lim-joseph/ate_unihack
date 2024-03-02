import "../index.css";
import { Button } from "@nextui-org/react";

export default function HomeHero({ setShowTimetable }) {
	return (
		<div className="h-[40rem] w-full rounded-md relative flex flex-col items-center justify-center antialiased">
			<div className="max-w-2xl mx-auto p-4">
				<h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b text-neutral-700  text-center font-sans font-bold">
					No more lonely class breaks.
				</h1>

				<p></p>
				{/* <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
					Match your timetable gaps with your friends and generate a
					personalised timetable.
				</p> */}
				<p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
					Copy the link at the bottom of your Allocate+ home page and
					paste it below!
				</p>

				<input
					type="text"
					placeholder="https://my-timetable.monash.edu/even/rest/calendar/ical/64e071cb-6fc9-4d8a-8a27-b1f1585ffaf4"
					className="rounded-lg border p-2 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-100 placeholder:text-neutral-700"
				/>
			</div>

			<Button
				color="primary"
				variant="solid"
				onClick={() => setShowTimetable(true)}
			>
				Generate
			</Button>
			{/* <BackgroundBeams /> */}
		</div>
	);
}
