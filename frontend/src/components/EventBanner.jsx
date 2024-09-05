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
        className="flex flex-col max-w-lg rounded-lg text-gray-800 relative hover:scale-[1.025] shadow-[_3px_3px_rgba(100,_97,_81,_0.6),_6px_6px_rgba(100,_97,_81,_0.4),_9px_9px_rgba(100,_97,_81,_0.2)] transition-all bg-[#F6E8CE]"
      >
        <div>
          <div className="absolute top-[45vw] right-[1vw] lg:top-[22vw] lg:right-[0.75vw] bg-[white] w-[5vw] h-[5vw] lg:h-[2.5vw] lg:w-[2.5vw] grid place-items-center border-dotted rounded-full shadow-md text-[1.75vw] lg:text-[1vw] font-medium text-gray-500">
            {numberOfImage}
          </div>
          <img
            src={eventImage}
            alt=""
            className="object-cover k-full rounded-t-lg "
          />
          <div className="flex flex-col pt-[1.5vw] top-[5vw] lg:pt-[1vw] px-[1.5vw] pb-[1vw] ">
            <h2 className="mb-[1vw] lg:mb-[0.25vw] text-[2.75vw] lg:text-[1.2vw] font-bold line-clamp-1">
              {eventName} - ({eventDate})
            </h2>

            <p className="lg:text-[1vw] text-[2.5vw] text-gray-500 text-[2.5vw] lg:text-[1vw] font-semibold italic mb-[1.5vw] lg:mb-[0.5vw] line-clamp-1">
              {eventLocation}
            </p>
            <p className="lg:text-[1vw] text-[2.5vw] text-gray-600 text-[2.5vw] lg:text-[1vw] relative line-clamp-2 ">
              {eventDescription}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}
