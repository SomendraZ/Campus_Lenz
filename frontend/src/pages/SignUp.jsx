import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

const collageList = [
  { name: "Lovely Professional University", suffix: "lpu.in" },
  { name: "Banaras Hindu University", suffix: "bhu.in" },
  { name: "Delhi University", suffix: "du.in" },
];

const SignUp = () => {
  const { register, handleSubmit, watch, setError, clearErrors, formState: { errors } } = useForm();
  const [selectedSuffix, setSelectedSuffix] = useState("");
  const [otpSent, setOtpSent] = useState(false); // To track if OTP has been sent
  const collegeName = watch("collageName");

  useEffect(() => {
    const selectedCollege = collageList.find(
      (college) => college.name === collegeName
    );
    if (selectedCollege) {
      setSelectedSuffix(selectedCollege.suffix);
    } else {
      setSelectedSuffix(""); // Reset suffix if no valid college is selected
    }
  }, [collegeName]);

  function submitForm(data) {
    if (data.otp && !/^\d{6}$/.test(data.otp)) {
      setError("otp", { message: "OTP must be a six-digit number" });
      return;
    }

    const emailWithSuffix = `${data.email}@${selectedSuffix}`;
    console.log({ ...data, email: emailWithSuffix });
    // Handle form submission logic here
  }

  function handleGetOtp() {
    // Mock OTP sending logic
    console.log("Sending OTP to the email");
    setOtpSent(true); // Set OTP sent flag to true
  }

  return (
    <div className="flex justify-center items-center h-[100dvh]">
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
              onSubmit={handleSubmit(submitForm)}
            >
              <label>
                <input
                  className="outline-none bg-[--dark-purple] focus:outline focus:outline-[--light-purple] p-[2.5vw] lg:p-[1vw] w-full h-[12vw] lg:h-[3.75vw] rounded-[1.25vw] lg:rounded-[0.5vw] text-[3vw] lg:text-[1vw]"
                  type="text"
                  placeholder="Full Name"
                  {...register("fullname", { required: "Full Name is required" })}
                />
              </label>

              <div className="relative">
                <input
                  type="text"
                  list="HeadlineActArtist"
                  className="outline-none bg-[--dark-purple] focus:outline focus:outline-[--light-purple] p-[2.5vw] lg:p-[1vw] w-full h-[12vw] lg:h-[3.75vw] rounded-[1.25vw] lg:rounded-[0.5vw] text-[3vw] lg:text-[1vw]"
                  placeholder="Please select college"
                  {...register("collageName", { required: "College selection is required" })}
                />
                <datalist name="HeadlineAct" id="HeadlineActArtist">
                  {collageList.map(({ name }) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </datalist>
              </div>

              <label className="relative">
                <input
                  className="outline-none bg-[--dark-purple] focus:outline focus:outline-[--light-purple] p-[2.5vw] lg:p-[1vw] w-full h-[12vw] lg:h-[3.75vw] rounded-[1.25vw] lg:rounded-[0.5vw] text-[3vw] lg:text-[1vw]"
                  type="text"
                  placeholder="Email"
                  {...register("email", { required: "Email is required" })}
                />
                <span className="absolute right-0 top-2/4 -translate-y-2/4 text-[3vw] lg:text-[1vw] text-[--light-purple] bg-white font-semibold py-[3.5vw] px-[5vw] lg:py-[1vw] lg:px-[2vw] rounded-r-lg">
                  @{selectedSuffix}
                </span>
              </label>

              <div className="relative">
                <input
                  className="outline-none bg-[--dark-purple] focus:outline focus:outline-[--light-purple] p-[2.5vw] lg:p-[1vw] w-full h-[12vw] lg:h-[3.75vw] rounded-[1.25vw] lg:rounded-[0.5vw] text-[3vw] lg:text-[1vw]"
                  type="text"
                  placeholder="OTP"
                  maxLength={6} // Limit input length to 6 characters
                  {...register("otp", {
                    required: "OTP is required",
                    pattern: {
                      value: /^\d{6}$/,
                      message: "OTP must be a six-digit number",
                    },
                  })}
                  disabled={!otpSent} // Enable OTP input only if OTP is sent
                />
                <button
                  type="button"
                  onClick={handleGetOtp} // Call the handler to send OTP
                  className={`absolute right-4 top-2/4 -translate-y-2/4 text-[3vw] lg:text-[1vw] bg-[--light-purple] text-white font-semibold py-[1vw] px-[2vw] lg:py-[0.5vw] lg:px-[1vw] rounded-[0.5vw] ${otpSent ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={otpSent} // Disable button if OTP is already sent
                >
                  {otpSent ? "OTP Sent" : "GET OTP"}
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2vw] lg:gap-[0.75vw]">
                <label>
                  <input
                    className="outline-none bg-[--dark-purple] focus:outline focus:outline-[--light-purple] p-[2.5vw] lg:p-[1vw] w-full h-[12vw] lg:h-[3.75vw] rounded-[1.25vw] lg:rounded-[0.5vw] text-[3vw] lg:text-[1vw]"
                    type="password"
                    placeholder="Password"
                    {...register("password", {
                      required: "Password is required",
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message: "Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, one digit, and one special character",
                      },
                    })}
                  />
                </label>
                <label>
                  <input
                    className="outline-none bg-[--dark-purple] focus:outline focus:outline-[--light-purple] p-[2.5vw] lg:p-[1vw] w-full h-[12vw] lg:h-[3.75vw] rounded-[1.25vw] lg:rounded-[0.5vw] text-[3vw] lg:text-[1vw]"
                    type="password"
                    placeholder="Confirm Password"
                    {...register("confirmPassword", {
                      required: "Confirm Password is required",
                      validate: (value) =>
                        value === watch("password") || "Passwords do not match",
                    })}
                  />
                </label>
              </div>

              <button className="bg-[--light-purple] text-white font-semibold w-full h-[10vw] lg:h-[3.75vw] rounded-[1.25vw] lg:rounded-[0.5vw] text-[4vw] lg:text-[1.25vw] mt-[5vw] lg:mt-[1vw]">
                Sign Up
              </button>
              <div className="flex items-center my-[2vw] lg:my-[0.75vw] w-full">
                <div className="flex-grow h-[0.5vw] lg:h-[0.25vw] border-t-[0.75vw] lg:border-t-[0.15vw] border-[--dark-purple]"></div>
                <span className="px-[2vw] lg:px-[0.75vw] text-gray-400 text-[3.5vw] lg:text-[1vw]">
                  OR
                </span>
                <div className="flex-grow h-[0.5vw] lg:h-[0.25vw] border-t-[0.75vw] lg:border-t-[0.15vw] border-[--dark-purple]"></div>
              </div>
              <p className="text-center text-[3.5vw] lg:text-[1vw]">
                Already have an account?{" "}
                <Link to="/login" className="text-[--light-purple]">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
