import "../index.css";
import { Button } from "@nextui-org/react";

export default function HomeHero() {
	return (
		<div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
			<div className="max-w-2xl mx-auto p-4">
				<h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
					No more lonely class breaks.
				</h1>
				<p></p>
				{/* <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
					Match your timetable gaps with your friends and generate a
					personalised timetable.
				</p> */}
				<p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
					To get started, navigate to your allocate plus home page and
					copy the subscription link at the bottom and input it in the
					below input!
				</p>
				<input
					type="text"
					placeholder="https://my-timetable.monash.edu/even/rest/calendar/ical/64e071cb-6fc9-4d8a-8a27-b1f1585ffaf4"
					className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
				/>
			</div>
			<Button color="primary" variant="solid">
				Generate
			</Button>
			{/* <BackgroundBeams /> */}
		</div>
	);
}
