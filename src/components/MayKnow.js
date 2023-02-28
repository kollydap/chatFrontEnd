import { PersonAdd } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import axiosInstance from "../axios";
import "../styles/MayKnow.css";
import { Link } from "react-router-dom";
// import PersonAddIcon from '@mui/icons-material/PersonAdd';

function MayKnow() {
  const [people, setPeople] = useState("");
  useEffect(() => {
    axiosInstance.get(`all-user`).then((res) => {
      setPeople(res.data);
    });
  }, []);
  const sendRequest = (id) => {
    console.log(id)
    axiosInstance.post(`send-friend-request/${id}`);
  };

  return (
    <>
      {people.length > 0 && (
        <div className="reel">
          {people.length > 0 &&
            people.map((person) => {
              const { id, display_photo, username } = person;
              return (
                <div className="people__card">
                  <Link
                    key={id}
                    to={`user-profile/${id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div className="img__div">
                      <img src={display_photo} alt={username} />
                    </div>
                  </Link>
                  {/* <Avatar src={display_photo} alt={username}/> */}
                  <div>
                    <h4>{username}</h4>
                    <p>75 mutual friends</p>
                    <button onClick={()=>sendRequest(id)}>
                      <PersonAdd
                        style={{ marginRight: "10px", fontSize: "20px" }}
                      />{" "}
                      Add Friends{" "}
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
}

export default MayKnow;
