import React, { useEffect, useState } from "react";
import axiosInstance from "../axios";
import "../styles/UserProfile.css";
import { RelativeTime } from "relatime";
import { useParams } from "react-router-dom";

function UserProfile() {
  let id = useParams().id;
  const h = RelativeTime();
  const [profile, setProfile] = useState([]);
  const [friendList, setFriendList] = useState([]);
  useEffect(() => {
    axiosInstance.get(`get-a-user/${id}`).then((res) => {
      setProfile(res.data);
    });
    // axiosInstance
    fetch(`https://kollybox.herokuapp.com/get-user-friend-list/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFriendList(data);
      });
  }, []);

  // console.log(friendList);

  // console.log(friendList[0].id);
  // send-friend-request/<int:pk></int:pk>

  // const sendRequest = (id) => {
  //   axiosInstance.post(`send-friend-request/${id}`);
  // };

  return (
    <>
      {profile && (
        <div className="user__profile">
          <div className="profile__wrapper">
            <div className="profile_cover_photo">
              <img src={profile.cover_photo} alt={profile.username} />
            </div>
            <div className="profile_display_photo">
              <img src={profile.display_photo} alt={profile.username} />
            </div>
            <div className="profile_info">
              <strong className="profile_fullName">
                {profile.first_name} {profile.last_name}
              </strong>
              <strong className="profile_username">{profile.username}</strong>
              <p className="profile_last_login">
                Active about {h.humanize(profile.last_login)}
              </p>
              <strong className="profile_about">{profile.about}</strong>
            </div>
            <div style={{ marginTop: "-40px" }} className="req__but">
              {/* <button
                onClick={() => sendRequest(id)}
                className="delete"
                style={{ marginRight: "30px", width: "150px" }}
              >
                <PersonAdd style={{ marginRight: "10px", fontSize: "20px" }} />
                Add Friend
              </button> */}
              <button style={{ width: "250px" }} className="confirm">
                Send A Message
              </button>
            </div>
            <div className="profile__info">
              <p>Mail: {profile.email}</p>
              <p>Date of birth: {profile.dob}</p>
              <p>Gender: {profile.gender}</p>
            </div>
            <div>
              {friendList.length > 0 &&
                friendList.map((friend) => {
                  const { id, friends } = friend;
                  return (
                    <div key={id} className="user__friends">
                      {friends.map((friend) => {
                        const { id, username, display_photo } = friend;
                        return (
                          <div key={id} className="user__friend">
                            <div className="user__friend-img">
                              <img src={display_photo} alt={username} />
                            </div>
                            <h3> {username}</h3>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// <strong>{profile.email}</strong>

// <strong>{profile.gender}</strong>
// <strong>{profile.dob}</strong>
export default UserProfile;
