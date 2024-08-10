import React, { useState } from "react";
import { timeAgo } from "@/Js/cal.js";
import { DropDown, Like } from "../index.js";
import { useDeleteTweet, useEditTweet } from "../../hooks/tweet.hook.js";
import { useSelector } from "react-redux";

function Tweet({ tweet, isOwner }) {
  const authStatus = useSelector((state) => state.auth.authStatus);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTweet, setEditedTweet] = useState(tweet?.content);

  const { mutateAsync: deleteTweet } = useDeleteTweet();
  const handleDelete = async () => {
    await deleteTweet(tweet?._id);
  };

  const handleTweetChange = (e) => {
    setEditedTweet(e.target.value);
  };

  const { mutateAsync: editTweet } = useEditTweet();
  const handleEdit = async () => {
    if (editedTweet.trim() === tweet?.content.trim()) {
      setIsEditing(false);
      return;
    }

    const res = await editTweet({
      tweetId: tweet._id,
      tweet: editedTweet,
    });
    if (res) {
      setIsEditing(false);
    }
    // console.log("edit");
  };

  return (
    <div className="py-2 flex h-3/12 justify-between border-b border-cyan-700">
      <div className="flex gap-3  py-4 last:border-b-transparent">
        <div className="h-14 w-14 shrink-0">
          <img
            src={tweet?.ownerDetails?.avatar?.url}
            alt={tweet?.ownerDetails?.username}
            className="h-full w-full rounded-full object-cover"
          />
        </div>
        <div className="w-full">
          <h4 className="mb-1 flex items-center gap-x-2">
            <span className="font-semibold">
              {tweet?.ownerDetails?.username}
            </span>
             
            <span className="inline-block text-sm text-cyan-600">
              {timeAgo(tweet?.createdAt)}
            </span>
          </h4>

          {isEditing ? (
            <div className="flex items-center gap-3">
              <input
                type="text"
                className="w-full mt-3 p-2 text-cyan-400 bg-slate-800/70 border border-cyan-400 rounded-md dark:border-gray-700   dark:bg-cyan-800 focus:outline-none"
                value={editedTweet}
                onChange={handleTweetChange}
              />
              <button
                onClick={() => setIsEditing(false)}
                className="mt-3 px-4 py-2 text-sm text-cyan-400 bg-slate-800/70 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={() => handleEdit()}
                className="mt-3 px-4 py-2 text-sm text-cyan-400 bg-slate-800/70 rounded-md"
              >
                Save
              </button>
            </div>
          ) : (
            <p className="mb-2">{tweet?.content}</p>
          )}
        </div>
      </div>
      <div className="sm:w-[4%] w-[10%] mr-5  flex flex-col gap-3 h-full items-center justify-center">
        {authStatus && isOwner && (
          <div className="w-full flex items-center mr-6">
            <DropDown
              handleDelete={handleDelete}
              handleEdit={() => setIsEditing(true)}
            />
          </div>
        )}
        <div className="w-full ">
          <Like
            id={tweet?._id}
            isLiked={tweet?.isLiked}
            likesCount={tweet?.likesCount}
            type={"tweets"}
          />
        </div>
      </div>
    </div>
  );
}

export default Tweet;
