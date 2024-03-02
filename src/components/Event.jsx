export default function Event({
	colStart,
	gridRow1,
	span,
	bgColor,
	eventName,
}) {
	return (
		<li
			className={`relative mt-px flex sm:col-start-${colStart}`}
			style={{ gridRow: `${gridRow1} / span ${span}` }}
		>
			<a
				href="#"
				className={`group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-${bgColor}-50 p-2 text-xs leading-5 hover:bg-${bgColor}-100`}
			>
				<p className={`order-1 font-semibold text-${bgColor}-700`}>
					{eventName}
				</p>
				<p
					className={`text-${bgColor}-500 group-hover:text-${bgColor}-700`}
				>
					<time dateTime="2022-01-12T07:30">7:30 AM</time>
				</p>
			</a>
		</li>
	);
}
