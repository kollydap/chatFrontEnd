import React, { useEffect, useState } from "react";
import "../styles/SinglePost.css";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import { ExpandMoreOutlined } from "@material-ui/icons";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useParams } from "react-router-dom";
import axiosInstance from "../axios";
import { RelativeTime } from "relatime";
import { Link } from "react-router-dom";

function SinglePost() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  let id = useParams().id;
  const h = RelativeTime();
  useEffect(() => {
    axiosInstance.get(`post/${id}`).then((res) => {
      setPosts(res.data);
    });
  }, []);

  const sendComment = (e) => {
    e.preventDefault();
    axiosInstance.post(`post/create-comment/${id}`, {
      body: input,
    });
    setInput("")
  };
  // console.log((posts.author)["id"])

  return (
    <>
      {posts && (
        <div className="post">
          <div className="post__top">
            {/* <Avatar src={posts.author.display_photo} className="post__avatar" /> */}
            <div className="post__topInfo">
              {/* <h3>{posts.author.username}</h3> */}
              {/* <p>{new Date(published_date?.toDate()).toUTCString()}</p> */}
              <p>{h.humanize(posts.published_date)}</p>
            </div>
          </div>

          <div className="post__bottom">
            <p>{posts.body}</p>
          </div>
          {/* <div className="post__image">
          {posts.post_pictures.length > 0 &&
            posts.post_pictures.map((picture) => {
              return (
                <img
                  className={`pic__image ${
                    picture.picture && "pic__img"
                  }`}
                  src={picture.picture}
                  alt=" "
                />
              );
            })}
        </div> */}

          <div className="post__options">
            <div className="post__option">
              <ThumbUpIcon />
              <p>Like</p>
            </div>

            <div className="post__option">
              <ChatBubbleOutlineIcon />
              <p>Comment</p>
            </div>
          </div>
          {
            posts.post_comment > 0 &&
            posts.post_comment.map((comment)=>{
              return(
                <div>{comment.body}</div>
              )
            })
          }
          <form className="comment__form">
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={sendComment}>SEND</button>
          </form>
        </div>
      )}
    </>
  );
}

export default SinglePost;
