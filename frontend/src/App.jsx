import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { setUser } from "./features/auth.slice";
import { useDispatch, useSelector } from "react-redux";
import { useCurrentUser } from "./hooks/auth.hook";

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  // console.log("calling");
  const { data: userData, isFetching, error } = useCurrentUser();

  const user = useSelector((state) => state.auth.userData);

  useEffect(() => {
    if (!isFetching) {
      if (userData && !user) {
        dispatch(setUser(userData));
      }
      setIsLoading(false);
    }
  }, [userData, isFetching, dispatch, user]);

  if (isLoading || isFetching) {
    // return <LoadingSpinner />;
    return <div>Loading...</div>;
  }

  if (error) {
    // Handle error state
    console.error("Error fetching user data:", error);
    // You might want to render an error component here
  }

  return (
    <div className="h-screen overflow-y-auto bg-[#121212] text-[#09ceff]">
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
