import React, { useEffect, useState } from "react";
import axiosInstance from "../axios";
import "../styles/RequestList.css";
import Header from "./Header";

function RequestList() {
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
    <div className="req__list">
      <Header />
      <div className="individual_req">
        {requests.length > 0 &&
          requests.map((request) => {
            const { id, sender } = request;
            return (
              <div className="req" key={id}>
                <div className="req__img">
                  <img src={sender.display_photo} alt={sender.username} />
                </div>
                <div className="req__info">
                  <p className="req__user">{sender.username}</p>
                  <p className="req__mut">0 Mutual Friend </p>
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
    </div>
  );
}

export default RequestList;
