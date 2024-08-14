import React from "react";
import Icon from "../../assets/Designer.png";

function Logo({ className, inline = false, mobile = false }) {
  return (
    <div
      className={`font-extrabold text-xl flex items-center justify-center ${className} text-[#20b2d6] py-1`}
    >
      <img src={`${Icon}`} alt="logo" className="w-10 h-10" />

      <div className={`flex tracking-tighter ${mobile && "hidden md:block"}`}>
        Vision Vista
      </div>
    </div>
  );
}

export default Logo;
