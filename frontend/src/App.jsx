import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  // if (isLoading || isFetching) {
  //   return <LoadingSpinner />;
  // }

  // if (error) {
  //   // Handle error state
  //   console.error("Error fetching user data:", error);
  //   // You might want to render an error component here
  // }

  return (
    <div className="h-screen overflow-y-auto bg-[#121212] text-white">
      <Header />
      <div className="flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)]">
        <Sidebar />
        {/* <div className="bg-red-800 w-full"> */}
        <Outlet />
        {/* </div> */}
      </div>
    </div>
  );
}

export default App;
