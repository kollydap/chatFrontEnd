import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import GroupIcon from "@material-ui/icons/Group";
import "../styles/Header.css";
import { Link ,NavLink} from "react-router-dom";
import RequestList from "../components/RequestList";

function Header({ username, display_photo }) {
  return (
    <div className="header">
      {/* header left */}
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png"
          alt=""
        />
        <div className="header__input">
          <SearchIcon fontSize="large" />
          <input placeholder="Search flexbook" type="text" />
        </div>
      </div>
      {/* header middle */}
      <div className="header__center">
        <NavLink activeClassName="yeg" exact to="/">
          <div className="header__option header__option--active">
            <HomeIcon />
          </div>
        </NavLink>
        <NavLink activeClassName="yeg" exact to="friend-request-list">
          <div className="header__option reqIcon">
            <GroupIcon />
          </div>
        </NavLink>
        <div className="header__option">
          <ForumIcon />
        </div>
        <div className="header__option">
          <SubscriptionsOutlinedIcon />
        </div>
        <div className="header__option">
          <StorefrontOutlinedIcon />
        </div>
      </div>
      {/*header right  */}
      <div className="header__right">
        <div className="header__info">
          <Avatar src={display_photo} />
          <h4>{username}</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}
export default Header;
