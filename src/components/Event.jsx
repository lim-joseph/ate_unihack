import { decimalTo12Hour } from "../utils";

export default function Event({
	colStart,
	gridRow1,
	span,
	eventName,
	startTime,
}) {
	return (
		<li
			className={`relative mt-px flex col-start-${colStart} overflow-hidden`}
			style={{ gridRow: `${gridRow1} / span ${span}` }}
		>
			<a
				href="#"
				className="group absolute inset-1 flex flex-col overflow-hidden rounded-lg bg-pink-50 p-2 text-xs leading-5 hover:bg-pink-100"
			>
				<p className="order-1 font-semibold text-pink-700">
					{eventName}
				</p>
				<p className="text-pink-500 group-hover:text-pink-700">
					<time dateTime="2022-01-12T07:30">
						{decimalTo12Hour(startTime)}
					</time>
				</p>
			</a>
		</li>
	);
}
