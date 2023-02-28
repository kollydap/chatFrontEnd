import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import { ExpandMoreOutlined } from "@material-ui/icons";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { RelativeTime } from "relatime";
import axiosInstance from "../axios";
import { Link } from "react-router-dom";
import "../styles/Post.css";

function Post() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    // axiosInstance.get(`post/`)
    fetch("http://127.0.0.1:8000/post/")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  const h = RelativeTime();
  return (
    <>
      {posts.length > 0 &&
        posts.map((post) => {
          const { id, published_date, author, body, post_pictures } = post;
          // console.log(post_pictures[0].picture)

          return (
            <div key={id} className="post">
              <Link
                key={id}
                to={`user-profile/${author.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="post__top">
                  <Avatar src={author.display_photo} className="post__avatar" />
                  <div className="post__topInfo">
                    <h3>{author.username}</h3>
                    {/* <p>{new Date(published_date?.toDate()).toUTCString()}</p> */}
                    <p>{h.humanize(published_date)}</p>
                  </div>
                </div>
              </Link>
              <div className="post__bottom">
                <p>{body}</p>
              </div>
              <div className="post__image">
                {post_pictures.length > 0 &&
                  post_pictures.map((picture) => {
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
              </div>

              <div className="post__options">
                <div className="post__option">
                  <ThumbUpIcon />
                  <p>Like</p>
                </div>
                <Link
                  className="post__option"
                  style={{ color: "inherit", textDecoration: "none" }}
                  to={`post/${id}`}
                >
                  <div className="post__option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
    </>
  );
}
export default Post;
