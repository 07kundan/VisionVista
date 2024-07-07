import React from "react";

function Logo({ className, inline = false, mobile = false }) {
  return (
    <div
      className={`font-extrabold text-xl flex items-center justify-center w-full ${className} text-[#20b2d6]`}
    >
      <img src="" alt="logo" className="w-10 h-10 inline-block mr-2" />

      <div
        className={`flex ${inline ? "flex-row" : " flex-col"} ${
          mobile && "hidden md:block"
        }`}
      >
        <div>Vision Vista</div>
      </div>
    </div>
  );
}

export default Logo;
