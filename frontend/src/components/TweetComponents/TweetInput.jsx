import React, { useState } from "react";
// import { useAddTweet } from "../../hooks/tweet.hook";
import { useSelector } from "react-redux";
import LoginPopUp from "../LoginSignup/LoginPopup";
import { CustomButton_ } from "../Buttons/CustomButton";

function TweetInput() {
  const authStatus = useSelector((state) => state.auth.authStatus);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [tweet, setTweet] = useState("");

  //   const { mutateAsync: addTweet, isPending } = useAddTweet();

  const sendTweet = async () => {
    if (!authStatus) {
      return setShowLoginPopup(true);
    }
    await addTweet({ tweet });
    setTweet("");
  };

  if (showLoginPopup)
    return (
      <LoginPopUp
        loginTo={"write Tweet"}
        onClose={() => setShowLoginPopup(false)}
      />
    );

  return (
    <div className="w-full mt-3 ">
      <div className="w-1/2 m-auto">
        <textarea
          className="w-full h-36 bg-transparent p-2 border border-[#20b2d6] rounded-lg "
          value={tweet}
          // onChange={(e) => setTweet(e.target.value)}
        ></textarea>
        <div className="mt-4 w-full inline-block">
          <CustomButton_
            className="font-bold text-base px-6 mr-4 rounded text-black float-end"
            // onClick={sendTweet}
          >
            Send
          </CustomButton_>
        </div>
      </div>
    </div>
  );
}

export default TweetInput;
