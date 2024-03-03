function durationToSpan(hours) {
	return hours * 20;
}

function startTimeToGridRow(startTime) {
	return 2 + (startTime - 7) * 20;
}

function decimalTo12Hour(decimalTime) {
	// Extract hour and minute
	const hour = Math.floor(decimalTime);
	const minute = Math.round((decimalTime - hour) * 60);

	// Create a Date object with arbitrary date (to ensure it doesn't affect time)
	const date = new Date();
	date.setHours(hour, minute);

	// Format the time using Intl.DateTimeFormat
	const formattedTime = date.toLocaleTimeString("en-US", {
		hour: "numeric",
		minute: "2-digit",
		hour12: true,
	});

	return formattedTime;
}

export { durationToSpan, startTimeToGridRow, decimalTo12Hour };
