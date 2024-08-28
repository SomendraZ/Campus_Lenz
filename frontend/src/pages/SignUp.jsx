import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

const collageList = [
  { name: "Lovely Professional University", suffix: "@lpu.in" },
  { name: "Banaras Hindu University", suffix: "@bhu.in" },
  { name: "Delhi University", suffix: "@du.in" },
];

const SignUp = () => {
  const { register, handleSubmit } = useForm();

  function submitForm(data) {
    console.log(data);
  }

  return (
    <div>
      <div className="grid place-items-center h-[100dvh] sm:container mx-[8.25vw]">
        <div className="grid grid-cols-2 bg-[--theme-clr] p-[1.5vw] rounded-[1vw] custom-shadow h-[91vh] w-[78vw]">
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
                Sign Up
              </h1>
            </div>
            <div className="w-full">
              <form
                className="grid gap-[0.75vw] w-full"
                onSubmit={handleSubmit(submitForm)}
              >
                <label>
                  <input
                    className="outline-none bg-[--dark-purple] focus:outline focus:outline-[--light-purple] p-[1vw] w-full h-[3.5vw] rounded-[0.5vw] text-[1vw]"
                    type="text"
                    placeholder="Fullname"
                    {...register("fullname")}
                  />
                </label>

                <div className="relative mt-1.5">
                  <input
                    type="text"
                    list="HeadlineActArtist"
                    className="outline-none bg-[--dark-purple] focus:outline focus:outline-[--light-purple] p-[1vw] w-full h-[3.5vw] rounded-[0.5vw] text-[1vw]"
                    placeholder="Please select collage"
                    {...register("collageName")}
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
                    className="outline-none bg-[--dark-purple] focus:outline focus:outline-[--light-purple] p-[1vw] w-full h-[3.5vw] rounded-[0.5vw] text-[1vw]"
                    type="email"
                    placeholder="Email"
                    {...register("email")}
                  />
                  <button className="absolute right-4 top-2/4 -translate-y-2/4 text-[1vw]">
                    GET OTP
                  </button>
                </label>
                <label>
                  <input
                    disabled={true}
                    className={`outline-none bg-[--dark-purple] focus:outline focus:outline-[--light-purple] p-[1vw] w-full h-[3.5vw] rounded-[0.5vw] text-[1vw]`}
                    type="text"
                    placeholder="OTP"
                    {...register("otp")}
                  />
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <label>
                    <input
                      className="outline-none bg-[--dark-purple] focus:outline focus:outline-[--light-purple] p-[1vw] w-full h-[3.5vw] rounded-[0.5vw] text-[1vw]"
                      type="password"
                      placeholder="Password"
                      {...register("password")}
                    />
                  </label>
                  <label>
                    <input
                      className="outline-none bg-[--dark-purple] focus:outline focus:outline-[--light-purple] p-[1vw] w-full h-[3.5vw] rounded-[0.5vw] text-[1vw]"
                      type="password"
                      placeholder="Confirm password"
                      {...register("confirm password")}
                    />
                  </label>
                </div>

                <button className="bg-[--light-purple] text-white font-semibold w-full h-[3.5vw] rounded-[0.5vw] text-[1.25vw] mt-[0.5vw]">
                  Sign Up
                </button>
                <div className="flex items-center my-[0.75vw] w-full">
                  <div className="flex-grow h-[0.25vw] border-t-[0.15vw] border-[--dark-purple]"></div>
                  <span className="px-[0.75vw] text-gray-400 text-[1vw]">
                    OR
                  </span>
                  <div className="flex-grow h-[0.25vw] border-t-[0.15vw] border-[--dark-purple]"></div>
                </div>
                <p className="text-center text-[1vw]">
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
    </div>
    // <div className="signUp-container">
    //     <h2>Sign Up</h2>
    //     <form onSubmit={handleSignUp}>
    //         <div>
    //             <label>Full Name:</label>
    //             <input
    //                 type="text"
    //                 value={fullName}
    //                 onChange={(e) => setFullName(e.target.value)}
    //                 placeholder="Enter your full name"
    //                 required
    //             />
    //         </div>
    //         <div>
    //             <label>College Name:</label>
    //             <input
    //                 type="text"
    //                 value={collegeName}
    //                 onChange={(e) => setCollegeName(e.target.value)}
    //                 placeholder="Enter your college name"
    //                 required
    //             />
    //         </div>
    //         <div>
    //             <label>College Email ID:</label>
    //             <input
    //                 type="email"
    //                 value={email}
    //                 onChange={(e) => setEmail(e.target.value)}
    //                 placeholder="Enter your college email"
    //                 required
    //             />
    //         </div>
    //         <div>
    //             <label>Password:</label>
    //             <input
    //                 type="password"
    //                 value={password}
    //                 onChange={(e) => setPassword(e.target.value)}
    //                 placeholder="Enter your password"
    //                 required
    //             />
    //         </div>
    //         <div>
    //             <label>OTP Confirmation:</label>
    //             <input
    //                 type="text"
    //                 value={otp}
    //                 onChange={(e) => setOtp(e.target.value)}
    //                 placeholder="Enter the OTP"
    //                 required
    //             />
    //         </div>
    //         <button type="submit">Sign Up</button>
    //         <a href="/login">Login</a>
    //     </form>
    // </div>
  );
};

export default SignUp;
