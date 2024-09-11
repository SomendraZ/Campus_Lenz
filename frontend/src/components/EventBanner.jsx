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
        className="flex flex-col max-w-xl rounded-lg text-gray-800 relative hover:scale-[1.025] shadow-[_3px_3px_rgba(100,_97,_81,_0.6),_6px_6px_rgba(100,_97,_81,_0.4),_9px_9px_rgba(100,_97,_81,_0.2)] transition-all bg-[#f6e8ce] overflow-hidden"
      >
        <div>
          <div className="relative">
            <img
              src={eventImage}
              alt=""
              className="max-h-[15vw] w-auto"
            />
            <div className="absolute top-4 right-4 text-black font-semibold bg-white px-2 py-1 rounded-xl">
              {numberOfImage}
            </div>
            <div className="absolute top-4 left-4 bg-white px-2 py-1 rounded-xl font-medium text-[#000] z-50">
              {eventDate}
            </div>
          </div>
          <div className="flex flex-col pt-[1.5vw]  lg:pt-[1vw] px-[1.5vw] pb-[1vw] bg-[#f6e8ce] relative -top-[1rem] rounded-xl">
            <h2 className="mb-[1vw] lg:mb-[0.25vw]  text-[2.75vw] lg:text-[1.2vw] font-bold  line-clamp-1">
              {eventName}
            </h2>
            <p className="lg:text-[1vw] text-[2.5vw] text-gray-500  font-semibold italic mb-[1.5vw] lg:mb-[0.5vw] line-clamp-1">
              {eventLocation}
            </p>
            <p className="lg:text-[1vw] text-[2.5vw] text-gray-600  relative line-clamp-2 ">
              {eventDescription}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}
