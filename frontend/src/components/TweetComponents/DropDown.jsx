import React, { useState, useEffect, useRef } from "react";

function DropDown({ handleEdit, handleDelete }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="relative inline-block w-full " ref={dropdownRef}>
        <button
          onClick={() => handleMenu()}
          className="relative z-10 ml-8 block p-2 text-cyan-400 bg-[#083f4d] border border-transparent rounded-md "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
        {isMenuOpen && (
          <div className="absolute right-8 top-2 z-20 w-24 mt-2 origin-top-right bg-[#083f4d] rounded-md shadow-xl dark:bg-gray-800">
            <button
              onClick={handleEdit}
              className="w-full h-full block px-4 py-2 text-sm text-cyan-400 capitalize transition-colors duration-300 transform hover:bg-cyan-950 "
            >
              Edit
            </button>
            <hr className="border-gray-200 dark:border-gray-700" />
            <button
              onClick={handleDelete}
              className="w-full h-full block px-4 py-2 text-sm text-cyan-400 capitalize transition-colors duration-300 transform hover:bg-cyan-950 "
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default DropDown;
