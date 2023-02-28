import React,{ useEffect, useState } from "react";
import axiosInstance from "../axios";
import {Link} from 'react-router-dom'

function RequestReel() {
  const [requests, setRequests] = useState([]);
  useEffect(() => {
    axiosInstance.get(`user-friend-request-list`).then((res) => {
      setRequests(res.data);
    });
  }, []);
  const rejectRequest = (id) => {
    axiosInstance.get(`reject-friend-request/${id}`);
  };
  const acceptRequest = (id) => {
    axiosInstance.get(`accept-friend-request/${id}`);
  };
  return (
    <>
      {requests.length > 0 && (
        <div className="req__reel reel">
          {requests.length > 0 &&
            requests.map((request) => {
              const { id, sender } = request;
              return (
                <div className="people__card" key={id}>
                  <Link
                    key={id}
                    to={`user-profile/${sender.id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div className="img__div">
                      <img src={sender.display_photo} alt={sender.username} />
                    </div>
                  </Link>
                  {/* <Avatar src={display_photo} alt={username}/> */}
                  <div>
                    <h4>{sender.username}</h4>
                    <p>75 mutual friends</p>
                    <div className="req__but">
                      <button
                        onClick={() => acceptRequest(id)}
                        className="confirm"
                      >
                        Confirm
                      </button>
                      <button
                        onClick={() => rejectRequest(id)}
                        className="delete"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
}

export default RequestReel;
