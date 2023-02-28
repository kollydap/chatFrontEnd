import React from "react";
import SidebarRow from "./SidebarRow";
import "../styles/Sidebar.css";
import {ExpandMoreOutlined} from "@material-ui/icons";
import LocalHospitalIcon from  "@material-ui/icons/LocalHospital"
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags"
import PeopleIcon from "@material-ui/icons/People"
import StorefrontIcon from "@material-ui/icons/Storefront"
import ChatIcon from "@material-ui/icons/Chat"
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary"
// import { useStateValue } from "./StateProvider";

function Sidebar({username,display_photo}){    
    // const[{user},dispatch] = useStateValue();
    return(
        <div className="sidebar">
            <SidebarRow src={display_photo} title= {username}/>
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center" />
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="friends" />
            <SidebarRow Icon={ChatIcon} title="Messanger" />
            <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlined} title="Explore" />

        </div>
    );
}
export default Sidebar;