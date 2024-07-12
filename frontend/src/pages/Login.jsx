import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../components/index.js";
import { LoginForm } from "../components/index.js";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth.slice.js";

// Login form

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = (session) => {
    // console.log("called");
    console.log(session);
    dispatch(setUser(session));
    navigate("/");
    // console.log("navigating");
  };

  return (
    <div className="w-full h-screen  bg-zinc-950/90 text-white flex justify-center items-center">
      <div className="py-12 px-10 my-8 border-2 border-[#20b2d6] rounded-xl">
        <div className="w-full flex justify-center items-center">
          <Logo
            className={" w-full text-center text-2xl font-semibold uppercase"}
            inline={true}
          />
        </div>

        <div className="w-full flex flex-col items-center justify-center mb-6">
          <h1 className="text-xl underline font-bold text-cyan-500">Login</h1>
          <span className="mt-3 space-x-2">
            <span>Don't have an account?</span>
            <Link to="/signup" className="text-blue-500 inline">
              Signup
            </Link>
          </span>
        </div>
        <LoginForm onLogin={onLogin} />
      </div>
    </div>
  );
}

export default Login;
