import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

export default function Login() {
  return (
    <>
      <div>
        <div className="grid place-items-center h-[100dvh] sm:container mx-[8.25vw]">
          <div className="grid grid-cols-2 bg-[--theme-clr] p-[1.5vw] rounded-[1vw] custom-shadow h-[91vh] w-[78vw]">
            <div>
              <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, Pagination]}
              >
                <SwiperSlide>
                  <img
                    className="h-full w-full object-cover"
                    src="assets/images/login1.jpg"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="h-full w-full object-cover"
                    src="assets/images/login2.jpg"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="h-full w-full object-cover"
                    src="assets/images/login3.jpg"
                    alt=""
                  />
                </SwiperSlide>
                ...
              </Swiper>
            </div>
            <div className="flex flex-col justify-center w-[37.5vw] h-[85vh] mx-auto text-[--neutral] gap-[1.5vw] px-[5vw]">
              <div>
                <h1 className="text-[2.25vw] font-semibold text-white">
                  Login
                </h1>
              </div>
              <div className="w-full">
                <form className="grid gap-[0.75vw] w-full">
                  <label>
                    <input
                      className="outline-none bg-[--dark-purple] focus:outline focus:outline-[--light-purple] p-[1vw] w-full h-[3.75vw] rounded-[0.5vw] text-[1vw]"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </label>
                  <label>
                    <input
                      className="outline-none bg-[--dark-purple] focus:outline focus:outline-[--light-purple] p-[1vw] w-full h-[3.75vw] rounded-[0.5vw] text-[1vw]"
                      type="password"
                      placeholder="Enter your password"
                    />
                  </label>
                  <label className="text-[1vw] flex flex-row items-center justify-between w-[7.75vw]">
                    <input type="checkbox" className="h-[1vw] w-[1vw]" />{" "}
                    Remember Me
                  </label>
                  <button className="bg-[--light-purple] text-white font-semibold w-full h-[3.75vw] rounded-[0.5vw] text-[1.25vw]">
                    Login
                  </button>
                  <div className="flex items-center my-[0.75vw] w-full">
                    <div className="flex-grow h-[0.25vw] border-t-[0.15vw] border-[--dark-purple]"></div>
                    <span className="px-[0.75vw] text-gray-400 text-[1vw]">
                      OR
                    </span>
                    <div className="flex-grow h-[0.25vw] border-t-[0.15vw] border-[--dark-purple]"></div>
                  </div>
                  <p className="text-center text-[1vw]">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-[--light-purple]">
                      Sign Up
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
