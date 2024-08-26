import { Link } from "react-router-dom"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css"

export default function Login() {
	return (
		<>
			<div>
				<div className="grid place-items-center h-[100dvh] sm:container mx-auto">
					<div className="grid grid-cols-2 bg-[--theme-clr] p-6 rounded-2xl custom-shadow ">
						<div>
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
							>
								<SwiperSlide>
									<img
										className="h-full w-full object-cover"
										src="assets/images/login3.jpg"
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
						<div className="flex flex-col justify-center w-[80%] mx-auto text-[--neutral] gap-8 ">
							<div>
								<h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
									Login
								</h1>
							</div>
							<div className="w-full">
								<form className="grid gap-4 ">
									<label>
										<input
											className="outline-none bg-[--dark-purple] focus:outline  focus:outline-[--light-purple] px-4 py-4 w-full rounded-lg text-lg"
											type="email"
											placeholder="Enter your email"
										/>
									</label>
									<label>
										<input
											className=" outline-none bg-[--dark-purple] focus:outline  focus:outline-[--light-purple] px-4 py-4 w-full rounded-lg text-lg"
											type="password"
											placeholder="Enter your password"
										/>
									</label>
									<label>
										<input type="checkbox" /> Remember Me
									</label>
									<button className="bg-[--light-purple] py-3 rounded-lg text-white font-semibold text-xl">
										Login
									</button>

									<div className="flex items-center my-4 w-full">
										<div className="flex-grow border-t border-[--dark-purple]"></div>
										<span className="px-4 text-gray-400">OR</span>
										<div className="flex-grow border-t border-[--dark-purple]"></div>
									</div>
									<p className="text-center">
										Register an Account{" "}
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
			</div>
		</>
	)
}
