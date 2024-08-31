import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css"
import "react-toastify/dist/ReactToastify.css"

export default function Login() {
	return (
		<div className="flex justify-center items-center h-[100dvh]">
			<div className="grid grid-cols-1 lg:grid-cols-2 bg-[--theme-clr] p-[5vw] lg:p-[1.5vw] rounded-[2.5vw] lg:rounded-[1vw] custom-shadow h-[91vh] w-[95vw] lg:w-[78vw]">
				<div className="hidden lg:block md:block">
					<Swiper
						slidesPerView={1}
						loop={true}
						autoplay={{
							delay: 1500,
							disableOnInteraction: false,
						}}
						pagination={{
							clickable: true,
						}}
						modules={[Autoplay, Pagination]}
						className="h-full"
					>
						<SwiperSlide>
							<img
								className="h-full w-full object-cover rounded-tl-[4vw] rounded-bl-[4vw] lg:rounded-tl-[1vw] lg:rounded-bl-[1vw]"
								src="assets/images/login1.jpg"
								alt="College Image 1"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								className="h-full w-full object-cover rounded-tl-[4vw] rounded-bl-[4vw] lg:rounded-tl-[1vw] lg:rounded-bl-[1vw]"
								src="assets/images/login2.jpg"
								alt="College Image 2"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								className="h-full w-full object-cover rounded-tl-[4vw] rounded-bl-[4vw] lg:rounded-tl-[1vw] lg:rounded-bl-[1vw]"
								src="assets/images/login3.jpg"
								alt="College Image 3"
							/>
						</SwiperSlide>
					</Swiper>
				</div>
				<div className="flex flex-col justify-center w-full lg:w-[37.5vw] h-auto lg:h-[85vh] mx-auto text-[--neutral] gap-[3vw] lg:gap-[1.5vw] px-[5vw]">
					<div>
						<h1 className="text-[7.5vw] lg:text-[2.25vw] font-semibold text-white">
							Login
						</h1>
					</div>
					<div className="w-full">
						<form className="grid gap-[2vw] lg:gap-[0.75vw] w-full">
							<label>
								<input
									className="outline-none bg-[--dark-purple] focus:outline focus:outline-[--light-purple] p-[2.5vw] lg:p-[1vw] w-full h-[12vw] lg:h-[3.75vw] rounded-[1.25vw] lg:rounded-[0.5vw] text-[3vw] lg:text-[1vw]"
									type="email"
									placeholder="Enter your email"
								/>
							</label>
							<label>
								<input
									className="outline-none bg-[--dark-purple] focus:outline focus:outline-[--light-purple] p-[2.5vw] lg:p-[1vw] w-full h-[12vw] lg:h-[3.75vw] rounded-[1.25vw] lg:rounded-[0.5vw] text-[3vw] lg:text-[1vw]"
									type="password"
									placeholder="Enter your password"
								/>
							</label>
							<label className="text-[3.25vw] lg:text-[1vw] flex flex-row items-center justify-between w-[27vw] lg:w-[7.75vw]">
								<input
									type="checkbox"
									className="h-[4vw] w-[4vw] lg:h-[1vw] lg:w-[1vw]"
								/>{" "}
								Remember Me
							</label>
							<button
								type="submit"
								className="bg-[--light-purple] text-white font-semibold w-full h-[10vw] lg:h-[3.75vw] rounded-[1.25vw] lg:rounded-[0.5vw] text-[4vw] lg:text-[1.25vw]"
							>
								Login
							</button>
							<div className="flex items-center my-[2vw] lg:my-[0.75vw] w-full">
								<div className="flex-grow h-[0.5vw] lg:h-[0.25vw] border-t-[0.75vw] lg:border-t-[0.15vw] border-[--dark-purple]"></div>
								<span className="px-[2vw] lg:px-[0.75vw] text-gray-400 text-[3.5vw] lg:text-[1vw]">
									OR
								</span>
								<div className="flex-grow h-[0.5vw] lg:h-[0.25vw] border-t-[0.75vw] lg:border-t-[0.15vw] border-[--dark-purple]"></div>
							</div>{" "}
							<p className="text-center text-[3.5vw] lg:text-[1vw]">
								Don't have an account?{" "}
								<Link
									to="/signup"
									className="text-[--light-purple]"
								>
									Sign Up
								</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}
