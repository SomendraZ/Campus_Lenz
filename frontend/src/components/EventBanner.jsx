import { Link } from "react-router-dom"

export default function EventBanner({
	eventName,
	eventDate,
	eventImage,
	numberOfImage,
	eventLocation,
	eventDescription,
}) {
	return (
		<>
			<Link
				to="/"
				className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800 relative hover:scale-[1.02] hover:shadow-lg transition-all"
			>
				<div>
					<div className="absolute top-0 right-12 bg-gray-50 py-4 px-2 shadow rounded">
						{numberOfImage}
					</div>
					<img
						src={eventImage}
						alt=""
						className="object-cover w-full mb-4 h-60 rounded sm:h-96 dark:bg-gray-500"
					/>
					<h2 className="mb-1 text-xl font-semibold">
						{eventName} - ({eventDate})
					</h2>

					<p className="text-sm dark:text-gray-600">{eventLocation}</p>
					<p className="text-sm dark:text-gray-600 max-h-[60px] relative overflow-hidden eventBannerDescription">
						{eventDescription}
					</p>
				</div>
			</Link>
		</>
	)
}
