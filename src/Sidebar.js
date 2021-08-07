import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import EventIcon from "@material-ui/icons/Event";
import { ExpandMoreOutlined } from "@material-ui/icons";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import HistoryIcon from "@material-ui/icons/History";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import { useStateValue } from "./StateProvider";
function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <SidebarRow src={user.photoUrl} title={user.displayName} />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={OndemandVideoIcon} title="Watch" />
      <SidebarRow Icon={EventIcon} title="Events" />
      <SidebarRow Icon={HistoryIcon} title="Memories" />
      <SidebarRow Icon={TurnedInIcon} title="Saved" />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={ExpandMoreOutlined} title="See More" />
    </div>
  );
}

export default Sidebar;
