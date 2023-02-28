import React from "react";
import MessageSender from "./MessageSender";
import StoryReel from "./StoryReel";
import Post from "./Post";
import "../styles/Feed.css";
import MayKnow from "./MayKnow";
import RequestReel from "./RequestReel";

function Feed({ display_photo }) {
  return (
    <div className="feed">
      <MessageSender display_photo={display_photo} />
      <StoryReel />
      <Post display_photo={display_photo} />
      <MayKnow />
      <RequestReel />
    </div>
  );
}
export default Feed;
