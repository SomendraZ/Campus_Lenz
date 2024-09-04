import { Link } from "react-router-dom";

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
        className="flex flex-col max-w-lg p-[3vw] lg:p-[1.25vw] overflow-hidden rounded-lg text-gray-800 relative hover:scale-[1.025] shadow-[_4px_4px_rgba(110,_84,_181,_0.2),_8px_8px_rgba(110,_84,_181,_0.1),_12px_12px_rgba(110,_84,_181,_0.05)] transition-all"
      >
        <div>
          <div className="absolute top-2 right-2 bg-white py-[2vw] px-[2vw] lg:py-[1vw] lg:px-[1vw] border-dotted border-2 border-[--light-purple] rounded">
            {numberOfImage}
          </div>
          <img
            src={eventImage}
            alt=""
            className="object-cover w-full mb-[1.5vw] lg:mb-[1vw] rounded"
          />
          <h2 className="mb-[1vw] lg:mb-[0.25vw] text-[2.75vw] lg:text-[1.2vw] font-bold">
            {eventName} - ({eventDate})
          </h2>

          <p className="text-sm text-gray-500 text-[2.5vw] lg:text-[1vw] font-semibold italic mb-[1.5vw] lg:mb-[0.5vw] ">
            {eventLocation}
          </p>
          <p className="text-sm text-gray-600 text-[2.5vw] lg:text-[1vw] relative line-clamp-2 ">
            {eventDescription}
          </p>
        </div>
      </Link>
    </>
  );
}
