import { useEffect, useRef } from "react";
import Event from "./Event";
import { durationToSpan, startTimeToGridRow } from "../utils.js";
import { motion } from "framer-motion";

export default function Calendar({ data }) {
	const container = useRef(null);
	const containerNav = useRef(null);
	const containerOffset = useRef(null);

	useEffect(() => {
		// Set the container scroll position based on the current time.
		const currentMinute = new Date().getHours() * 60;
		container.current.scrollTop =
			((container.current.scrollHeight -
				containerNav.current.offsetHeight -
				containerOffset.current.offsetHeight) *
				currentMinute) /
			1440;
	}, []);

	const list = {
	visible: {
		opacity: 1,
		transition: {
		when: "beforeChildren",
		staggerChildren: 0.1,
		},
	},
	hidden: { opacity: 0 },
	}

	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex w-[80svw] mx-auto h-full flex-col mt-8">
			<h2 className="text-2xl bg-clip-text drop-shadow-md text-center font-sans font-bold mb-8">
				You've been{" "}
				<span className="px-2 text-4xl bg-clip-text text-pink-600 drop-shadow-md text-center font-sans font-bold">
					ALLODATED!
				</span>
			</h2>

			<div
				ref={container}
				className="isolate flex flex-auto flex-col overflow-auto bg-white"
			>
				<div
					style={{ width: "165%" }}
					className="flex max-w-full flex-none flex-col sm:max-w-none md:max-w-full"
				>
					{/* DAY OF THE WEEK */}
					<div
						ref={containerNav}
						className="sticky top-0 z-30 flex-none bg-white shadow ring-1 ring-black ring-opacity-5 sm:pr-8 "
					>
						<div className="-mr-px hidden grid-cols-5 divide-x divide-gray-100 border-r border-gray-100 text-sm leading-6 text-gray-500 sm:grid">
							<div className="col-end-1 w-14" />
							<div className="flex items-center justify-center py-3">
								<span>
									Mon{" "}
									{/* <span className="items-center justify-center font-semibold text-gray-900">
										10
									</span> */}
								</span>
							</div>
							<div className="flex items-center justify-center py-3">
								<span>Tue </span>
							</div>
							<div className="flex items-center justify-center py-3">
								<span className="flex items-baseline">
									Wed{" "}
								</span>
							</div>
							<div className="flex items-center justify-center py-3">
								<span>Thu </span>
							</div>
							<div className="flex items-center justify-center py-3">
								<span>Fri </span>
							</div>
						</div>
					</div>

					<div className="flex flex-auto">
						<div className="sticky left-0 z-10 w-14 flex-none bg-white ring-1 ring-gray-100" />
						<div className="grid flex-auto grid-cols-1 grid-rows-1">
							{/* Horizontal lines */}
							<div
								className="col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100"
								style={{
									gridTemplateRows:
										"repeat(29, minmax(3.5rem, 1fr))",
								}}
							>
								<div
									ref={containerOffset}
									className="row-end-1 h-7"
								></div>

								<div>
									<div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
										7AM
									</div>
								</div>
								<div />
								<div>
									<div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
										8AM
									</div>
								</div>
								<div />
								<div>
									<div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
										9AM
									</div>
								</div>
								<div />
								<div>
									<div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
										10AM
									</div>
								</div>
								<div />
								<div>
									<div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
										11AM
									</div>
								</div>
								<div />
								<div>
									<div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
										12PM
									</div>
								</div>
								<div />
								<div>
									<div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
										1PM
									</div>
								</div>
								<div />
								<div>
									<div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
										2PM
									</div>
								</div>
								<div />
								<div>
									<div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
										3PM
									</div>
								</div>
								<div />
								<div>
									<div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
										4PM
									</div>
								</div>
								<div />
								<div>
									<div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
										5PM
									</div>
								</div>
								<div />
								<div>
									<div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
										6PM
									</div>
								</div>
								<div />
								<div>
									<div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
										7PM
									</div>
								</div>
								<div />
								<div>
									<div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
										8PM
									</div>
								</div>
								<div />
								<div>
									<div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
										9PM
									</div>
								</div>
							</div>

							{/* Vertical lines */}
							<div className="col-start-1 col-end-2 row-start-1 hidden grid-cols-5 grid-rows-1 divide-x divide-gray-100 sm:grid sm:grid-cols-5">
								<div className="col-start-1 row-span-full" />
								<div className="col-start-2 row-span-full" />
								<div className="col-start-3 row-span-full" />
								<div className="col-start-4 row-span-full" />
								<div className="col-start-5 row-span-full" />
								<div className="col-start-6 row-span-full" />
								<div className="col-start-7 row-span-full" />
								<div className="col-start-8 row-span-full w-8" />
							</div>

							{/* Events */}
							<motion.ol
								initial="hidden"
								animate="visible"
								variants={list}
								className="col-start-1 col-end-2 row-start-1 grid grid-cols-1 sm:grid-cols-5 sm:pr-8"
								style={{
									gridTemplateRows:
										"1.75rem repeat(288, minmax(0, 1fr)) auto",
								}}
							>
								{data &&
									Object.keys(data.days).map((day) => {
										return data.days[day].map((event) => {
											return (
												<Event
													key={crypto.randomUUID()}
													gridRow1={startTimeToGridRow(
														event.start
													)}
													span={durationToSpan(
														event.duration
													)}
													colStart={parseInt(day) + 1}
													eventName={
														"Matching break <3"
													}
													startTime={parseFloat(
														event.start
													)}
												/>
											);
										});
									})}
							</motion.ol>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
