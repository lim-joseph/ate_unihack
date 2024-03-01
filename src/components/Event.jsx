export default function Event({ colStart, gridRow, span }) {
	return (
		<li
			className="relative mt-px flex sm:col-start-3"
			style={{ gridRow: "92 / span 30" }}
		>
			<a
				href="#"
				className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-pink-50 p-2 text-xs leading-5 hover:bg-pink-100"
			>
				<p className="order-1 font-semibold text-pink-700">
					Flight to Paris
				</p>
				<p className="text-pink-500 group-hover:text-pink-700">
					<time dateTime="2022-01-12T07:30">7:30 AM</time>
				</p>
			</a>
		</li>
	);
}
