import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import { useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css"
import "react-toastify/dist/ReactToastify.css"

const collageList = [
	{ name: "Lovely Professional University", suffix: "lpu.in" },
	{ name: "Banaras Hindu University", suffix: "bhu.in" },
	{ name: "Delhi University", suffix: "du.in" },
]

const SignUp = () => {
	const [fullName, setFullName] = useState("")
	const [collageName, setCollageName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")
	const [otp, setOtp] = useState("")
	const [selectedSuffix, setSelectedSuffix] = useState("")
	const [otpSent, setOtpSent] = useState(false)
	const [otpConfirm, setOtpConfirm] = useState(false)

	useEffect(() => {
		const selectedCollege = collageList.find(
			(college) => college.name === collageName
		)
		if (selectedCollege) {
			setSelectedSuffix(selectedCollege.suffix)
		} else {
			setSelectedSuffix("")
		}
	}, [collageName])

	const submitForm = (e) => {
		e.preventDefault()
		const emailWithSuffix = `${email}@${selectedSuffix}`

		try {
			if (!(fullName || collageName || email || password || confirmPassword)) {
				throw new Error("Please fill all the fields")
			}
			if (!fullName) {
				throw new Error("Full name is required")
			}
			if (!collageName) {
				throw new Error("Collage name is required")
			}
			if (!email) {
				throw new Error("Email is required")
			}
			if (!password) {
				throw new Error("Password is required")
			}
			if (password !== confirmPassword) {
				throw new Error("Password is  not matching to Confirm Password")
			}

			console.log({
				fullName,
				collageName,
				emailWithSuffix,
				password,
				confirmPassword,
				otp,
			})

			toast.success("Form submitted successfully!")
		} catch (error) {
			toast.error(error.message)
		}
	}

	const handleGetOtp = () => {
		if (!email) {
			toast.error("Please enter a valid email address")
			return
		} else if (!selectedSuffix) {
			toast.error("Please select a college")
			return
		}

		setOtpSent(true)
		toast.success("OTP sent successfully!")
	}

	const handleOtpCheck = () => {
		if (!/^\d{6}$/.test(otp)) {
			toast.error("OTP must be a six-digit number")
			return
		}
		setOtpConfirm(true)
		toast.success("OTP confirmed successfully!")
	}

	return (
		<div className="flex justify-center items-center h-[100dvh]">
			<ToastContainer />
			<div className="grid grid-cols-1 lg:grid-cols-2 bg-[--theme-clr] p-[5vw] lg:p-[1.5vw] rounded-[2.5vw] lg:rounded-[1vw] custom-shadow h-[91vh] w-[95vw] lg:w-[78vw]">
				<div className="hidden lg:block">
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
							Sign Up
						</h1>
					</div>
					<div className="w-full">
						<form
							className="grid gap-[2vw] lg:gap-[0.75vw] w-full"
							onSubmit={submitForm}
						>
							<label>
								<input
									className="outline-none bg-[--dark-purple] focus:outline focus:outline-[--light-purple] p-[2.5vw] lg:p-[1vw] w-full h-[12vw] lg:h-[3.75vw] rounded-[1.25vw] lg:rounded-[0.5vw] text-[3vw] lg:text-[1vw]"
									type="text"
									placeholder="Full Name"
									value={fullName}
									onChange={(e) => setFullName(e.target.value)}
								/>
							</label>

							<div className="relative">
								<input
									type="text"
									list="HeadlineActArtist"
									className="outline-none bg-[--dark-purple] focus:outline focus:outline-[--light-purple] p-[2.5vw] lg:p-[1vw] w-full h-[12vw] lg:h-[3.75vw] rounded-[1.25vw] lg:rounded-[0.5vw] text-[3vw] lg:text-[1vw]"
									placeholder="Please select college"
									value={collageName}
									onChange={(e) => setCollageName(e.target.value)}
								/>
								<datalist
									name="HeadlineAct"
									id="HeadlineActArtist"
								>
									{collageList.map(({ name }) => (
										<option
											key={name}
											value={name}
										>
											{name}
										</option>
									))}
								</datalist>
							</div>

							<label className="relative">
								<input
									className="outline-none bg-[--dark-purple] focus:outline focus:outline-[--light-purple] p-[2.5vw] lg:p-[1vw] w-[75%] h-[12vw] lg:h-[3.75vw] rounded-[1.25vw] lg:rounded-[0.5vw] text-[3vw] lg:text-[1vw]"
									type="text"
									placeholder="Email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
								<span className="absolute right-[25%] top-2/4 -translate-y-2/4 text-[3vw] lg:text-[1vw] text-[--light-purple] bg-white font-semibold py-[3.5vw] px-[5vw] lg:py-[1.1vw] lg:px-[2vw] rounded-r-lg">
									@{selectedSuffix}
								</span>
								<button
									type="button"
									onClick={handleGetOtp}
									className={`absolute right-0 top-2/4 -translate-y-2/4 text-[3vw] lg:text-[1vw] bg-[--light-purple] text-white font-semibold py-[3.5vw] px-[2vw] lg:py-[1.1vw] lg:px-[1vw] rounded-[1.25vw] lg:rounded-[0.5vw] ${
										otpSent ? "opacity-50 cursor-not-allowed" : ""
									}`}
									disabled={otpSent}
								>
									{otpSent ? "OTP Sent" : "GET OTP"}
								</button>
							</label>

							<div className="relative">
								<input
									className="outline-none bg-[--dark-purple] focus:outline focus:outline-[--light-purple] p-[2.5vw] lg:p-[1vw] w-full h-[12vw] lg:h-[3.75vw] rounded-[1.25vw] lg:rounded-[0.5vw] text-[3vw] lg:text-[1vw]"
									type="text"
									placeholder="OTP"
									value={otp}
									maxLength={6} // Limit input length to 6 characters
									onChange={(e) => setOtp(e.target.value)}
									disabled={!otpSent} // Disable input until OTP is sent
								/>
								<button
									type="button"
									onClick={handleOtpCheck}
									className={`absolute right-2 top-2/4 -translate-y-2/4 text-[3vw] lg:text-[1vw] bg-[--light-purple] text-white font-semibold py-[3.5vw] px-[2vw] lg:py-[1.1vw] lg:px-[1vw] rounded-[1.25vw] lg:rounded-[0.5vw] ${
										otpConfirm || !otpSent ? "opacity-50 cursor-not-allowed" : ""
									}`}
									disabled={otpConfirm || !otpSent}
								>
									{otpConfirm ? "Confirmed" : "CONFIRM OTP"}
								</button>
							</div>

							<label>
								<input
									className="outline-none bg-[--dark-purple] focus:outline focus:outline-[--light-purple] p-[2.5vw] lg:p-[1vw] w-full h-[12vw] lg:h-[3.75vw] rounded-[1.25vw] lg:rounded-[0.5vw] text-[3vw] lg:text-[1vw]"
									type="password"
									placeholder="Password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</label>

							<label>
								<input
									className="outline-none bg-[--dark-purple] focus:outline focus:outline-[--light-purple] p-[2.5vw] lg:p-[1vw] w-full h-[12vw] lg:h-[3.75vw] rounded-[1.25vw] lg:rounded-[0.5vw] text-[3vw] lg:text-[1vw]"
									type="password"
									placeholder="Confirm Password"
									value={confirmPassword}
									onChange={(e) => setConfirmPassword(e.target.value)}
								/>
							</label>

							<button
								type="submit"
								className="bg-[--light-purple] hover:bg-[--light-purple] p-[2.5vw] lg:p-[1vw] w-full h-[12vw] lg:h-[3.75vw] rounded-[1.25vw] lg:rounded-[0.5vw] text-[4vw] lg:text-[1.5vw] font-semibold text-white"
							>
								Sign Up
							</button>
						</form>
						<p className="text-[3vw] lg:text-[1.15vw] font-medium text-center mt-[2.5vw]">
							Already a member?{" "}
							<Link
								to="/"
								className="underline underline-offset-4"
							>
								Sign In
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SignUp
