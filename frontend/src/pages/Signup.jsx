import React, { useState } from "react";
import { MdOutlineCloudUpload } from "react-icons/md";
import { Logo, Input, CustomButton_1 } from "../components/index.js";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth.slice.js";
import { useLogin, useRegisterUser } from "@/hooks/auth.hook.js";

function Signup() {
  const dispatch = useDispatch();
  const schema = z.object({
    email: z.string().email({ message: "Invalid Email" }),
    username: z
      .string()
      .min(4)
      .refine((value) => !value.includes(" "), {
        message: "Username must not contain spaces",
      })
      .refine((value) => value === value.toLowerCase(), {
        message: "Username must be in lowercase",
      }),
    fullName: z
      .string()
      .min(4, { message: "name should be atleast 4 character long" }),
    password: z.string().min(6, { message: "password must be 8 digit long" }),
  });

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const navigate = useNavigate();

  const { mutateAsync: registerUser } = useRegisterUser();
  const { mutateAsync: loginUser } = useLogin();

  const [profilePic, setProfilePic] = useState(null);
  const [coverPic, setCoverPic] = useState(null);

  // method to create an account
  const createAccount = async (data) => {
    data.avatar = profilePic;
    data.coverImage = coverPic;
    // console.log("registering user...", data);
    const registeredUser = await registerUser(data);
    // console.log("registered user", registeredUser);
    if (registeredUser) {
      const loggedInUser = await loginUser({
        usernameOrEmail: data.email,
        password: data.password,
      });
      // console.log("logged In user", loggedInUser);
      if (loggedInUser) {
        dispatch(setUser(loggedInUser));
        navigate("/");
      }
    }
  };

  // ------------------------------

  const [selectedProfile, setSelectedProfile] = useState("");
  const [selectedCover, setSelectedCover] = useState("");

  return (
    <div className="w-full h-screen bg-zinc-950/90 text-white flex justify-center items-center">
      <div className="w-3/4 py-8 px-10 my-8 border-2 border-[#20b2d6] rounded-xl">
        <Logo
          className={" w-full text-center text-2xl font-semibold uppercase"}
          inline={true}
        />
        <h1 className="text-xl underline font-bold text-cyan-500 text-center">
          Sign Up
        </h1>

        {/* Sign up content */}
        <form
          onSubmit={handleSubmit(createAccount)}
          className="md:flex md:flex-col md:items-center mt-8 space-y-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-around md:w-full ">
            {/* Image section  */}
            <div className="w-full md:w-[45%] flex flex-col justify-center ">
              {/* images */}
              <div
                className="h-1/2 bg-cover bg-center bg-no-repeat outline outline-2 outline-[#20b2d6] rounded-lg"
                style={{
                  backgroundImage: `url(${selectedCover})`,
                }}
              >
                {/* profile image */}
                <div
                  className={`mx-auto flex justify-center w-[100px] h-[100px] bg-blue-800 rounded-full bg-cover bg-center bg-no-repeat outline outline-2 outline-[#20b2d6] translate-y-16 relative`}
                  style={{
                    backgroundImage: `url(${selectedProfile})`,
                  }}
                >
                  <label
                    htmlFor="profileImg"
                    className="cursor-pointer absolute bottom-0 left-0"
                  >
                    <div className="bg-cyan-900 text-cyan-400  w-8 h-8 rounded-full flex items-center justify-center">
                      <MdOutlineCloudUpload />
                    </div>
                  </label>

                  <input
                    type="file"
                    style={{ display: "none" }}
                    id="profileImg"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("profileImg", { required: true })}
                    onChange={(e) => {
                      setSelectedProfile(
                        URL.createObjectURL(e.target.files[0])
                      );
                      setProfilePic(e.target.files[0]);
                    }}
                  />
                </div>
                {/* ----------------------- */}

                {/*coverImage */}
                <span className="">
                  <label
                    htmlFor="coverphoto"
                    className="inline-flex bg-cyan-900 text-cyan-400 items-center gap-1 cursor-pointer float-end px-3 py-1 rounded-ss-lg rounded-ee-lg border-2 border-[#20b2d6]"
                  >
                    Cover
                    <MdOutlineCloudUpload />
                  </label>

                  <input
                    className="bg-lime-900"
                    style={{ display: "none" }}
                    type="file"
                    id="coverphoto"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("coverphoto", { required: false })}
                    onChange={(e) => {
                      setSelectedCover(URL.createObjectURL(e.target.files[0]));
                      setCoverPic(e.target.files[0]);
                    }}
                  />
                </span>

                {/* -------------------------- */}
              </div>

              <div className="text-base space-x-2 mt-14 text-center">
                <span>Already have an account?</span>
                <Link to="/login" className="text-blue-500 inline">
                  Login
                </Link>
              </div>
            </div>

            {/* Input fields */}
            <div className="w-[45%] ">
              <div className=" w-4/5 m-auto flex flex-col space-y-1">
                <Input
                  label={"Full Name*"}
                  type="text"
                  placeholder="John Wick"
                  id={"fullName"}
                  {...register("fullName", {
                    required: true,
                  })}
                />
                {errors.fullName?.message && (
                  <p className="text-xs font-semibold pl-1 text-red-600 ">
                    {errors.fullName?.message}
                  </p>
                )}
                <Input
                  label={"Username*"}
                  type="text"
                  placeholder="johnwick7"
                  id={"username"}
                  {...register("username", {
                    required: true,
                  })}
                />
                {errors.username?.message && (
                  <p className="text-xs font-semibold pl-1 text-red-600 ">
                    {errors.username?.message}
                  </p>
                )}
                <Input
                  label={"Email*"}
                  type="text"
                  placeholder="johnwick@example.com"
                  id={"email"}
                  {...register("email", {
                    required: true,
                  })}
                />
                {errors.email?.message && (
                  <p className="text-xs font-semibold pl-1 text-red-600 ">
                    {errors.email?.message}
                  </p>
                )}

                <Input
                  label={"Passsword*"}
                  type="password"
                  placeholder="********"
                  id={"password"}
                  {...register("password", {
                    required: true,
                  })}
                  className="mb-4"
                />
                {errors.password?.message && (
                  <p className="text-xs font-semibold pl-1 text-red-600 ">
                    {errors.password?.message}
                  </p>
                )}
              </div>
            </div>

            {/* ------------- */}
          </div>

          <CustomButton_1 type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Creating an Account..." : "Sign Up"}
          </CustomButton_1>
        </form>
        {/* ---------------- */}
      </div>
    </div>
  );
}

export default Signup;
