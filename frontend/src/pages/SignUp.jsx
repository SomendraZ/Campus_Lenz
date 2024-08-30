import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "react-toastify/dist/ReactToastify.css";

const collageList = [
  { name: "Lovely Professional University", suffix: "lpu.in" },
  { name: "Banaras Hindu University", suffix: "bhu.in" },
  { name: "Delhi University", suffix: "du.in" },
];

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();
  const [selectedSuffix, setSelectedSuffix] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpConfirm, setOtpConfirm] = useState(false);
  const collegeName = watch("collageName");

  useEffect(() => {
    const selectedCollege = collageList.find(
      (college) => college.name === collegeName
    );
    if (selectedCollege) {
      setSelectedSuffix(selectedCollege.suffix);
    } else {
      setSelectedSuffix("");
    }
  }, [collegeName]);

  function submitForm(data) {
    const emailWithSuffix = `${data.email}@${selectedSuffix}`;

    // Password regex for at least 8 characters, including 1 uppercase, 1 lowercase, 1 number, and 1 special character
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d@#$!%*?&]{8,}$/;

    if (!data.fullName) {
      setError("fullName", { message: "Full Name is required" });
      toast.error("Full Name is required");
      return;
    }

    if (!data.collageName) {
      setError("collageName", { message: "College selection is required" });
      toast.error("College selection is required");
      return;
    }

    if (!emailWithSuffix) {
      setError("email", { message: "Email is required" });
      toast.error("Email is required");
      return;
    }

    if (!otpConfirm) {
      setError("otp", { message: "OTP is required and must be confirmed" });
      toast.error("Please confirm your OTP before submitting");
      return;
    }

    if (!data.password) {
      setError("password", { message: "Password is required" });
      toast.error("Password is required");
      return;
    }

    if (!passwordRegex.test(data.password)) {
      setError("password", {
        message:
          "Password must be at least 8 characters long and include 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character",
      });
      toast.error(
        "Password must be at least 8 characters long and include 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character"
      );
      return;
    }

    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", { message: "Passwords do not match" });
      toast.error("Passwords do not match");
      return;
    }

    // If all validations pass
    console.log({
      ...data,
      email: emailWithSuffix,
    });
    toast.success("Form submitted successfully!");
  }

  function handleGetOtp() {
    const emailValue = watch("email");

    if (!emailValue) {
      toast.error("Please enter a valid email address");
      return;
    } else if (!selectedSuffix) {
      toast.error("Please select a college");
      return;
    }

    const emailWithSuffix = `${emailValue}@${selectedSuffix}`;
    setOtpSent(true);
    toast.success("OTP sent successfully!");
  }

  function handleOtpCheck() {
    const otpValue = watch("otp");

    if (!/^\d{6}$/.test(otpValue)) {
      toast.error("OTP must be a six-digit number");
      return;
    }
    setOtpConfirm(true);
    toast.success("OTP confirmed successfully!");
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
              onSubmit={handleSubmit(submitForm)}
            >
              <label>
                <input
                  className="outline-none bg-[--dark-purple] focus:outline focus:outline-[--light-purple] p-[2.5vw] lg:p-[1vw] w-full h-[12vw] lg:h-[3.75vw] rounded-[1.25vw] lg:rounded-[0.5vw] text-[3vw] lg:text-[1vw]"
                  type="text"
                  placeholder="Full Name"
                  {...register("fullName", {
                    required: "Full Name is required",
                  })}
                />
              </label>

              <div className="relative">
                <input
                  type="text"
                  list="HeadlineActArtist"
                  className="outline-none bg-[--dark-purple] focus:outline focus:outline-[--light-purple] p-[2.5vw] lg:p-[1vw] w-full h-[12vw] lg:h-[3.75vw] rounded-[1.25vw] lg:rounded-[0.5vw] text-[3vw] lg:text-[1vw]"
                  placeholder="Please select college"
                  {...register("collageName", {
                    required: "College selection is required",
                  })}
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
                  className="outline-none bg-[--dark-purple] focus:outline focus:outline-[--light-purple] p-[2.5vw] lg:p-[1vw] w-[75%] h-[12vw] lg:h-[3.75vw] rounded-[1.25vw] lg:rounded-[0.5vw] text-[3vw] lg:text-[1vw]"
                  type="text"
                  placeholder="Email"
                  {...register("email", { required: "Email is required" })}
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
                  maxLength={6} // Limit input length to 6 characters
                  {...register("otp", {
                    required: "OTP is required",
                    pattern: {
                      value: /^\d{6}$/,
                      message: "OTP must be a six-digit number",
                    },
                  })}
                  disabled={!otpSent} // Disable input until OTP is sent
                />
                <button
                  type="button"
                  onClick={handleOtpCheck}
                  className={`absolute right-2 top-2/4 -translate-y-2/4 text-[3vw] lg:text-[1vw] bg-[--light-purple] text-white font-semibold py-[2vw] px-[3vw] lg:py-[0.5vw] lg:px-[1vw] rounded-[1.25vw] lg:rounded-[0.5vw] ${
                    otpConfirm || !otpSent
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  disabled={otpConfirm || !otpSent} // Disable button until OTP is sent
                >
                  {otpConfirm ? "OTP Confirmed" : "Confirm OTP"}
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

              <button
                type="submit"
                className="bg-[--light-purple] text-white font-semibold w-full h-[10vw] lg:h-[3.75vw] rounded-[1.25vw] lg:rounded-[0.5vw] text-[4vw] lg:text-[1.25vw] mt-[0.5vw]"
                onClick={submitForm}
              >
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
