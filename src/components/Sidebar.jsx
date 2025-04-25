import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.scss";

// Importing Material-UI icons
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
import GroupIcon from "@mui/icons-material/Group";
import EventIcon from "@mui/icons-material/Event";
import BuildIcon from "@mui/icons-material/Build";
import StorageIcon from "@mui/icons-material/Storage";
import MailIcon from "@mui/icons-material/Mail";
import InfoIcon from "@mui/icons-material/Info";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import GroupsIcon from "@mui/icons-material/Groups";
// import LogoutIcon from "@mui/icons-material/LogoutOutlined";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";

const Sidebar = ({ isOpen, toggleSidebar, handleLogout }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className={`toggle-button ${isOpen ? "" : "closed"}`}>
        {isOpen ? (
          <CloseIcon
            className="icon"
            htmlColor="#007bff"
            onClick={toggleSidebar}
          />
        ) : (
          <MenuIcon
            className="icon"
            htmlColor="#007bff"
            onClick={toggleSidebar}
          />
        )}
      </div>
      <div className="sidebar-content">
        <ul>
          <li>
            <Link to="/" className={isActive("/") ? "active" : ""}>
              <HomeIcon className="icon" />
              {isOpen && <span>Home</span>}
            </Link>
          </li>
          <li>
            <Link to="/news" className={isActive("/news") ? "active" : ""}>
              <AssignmentIcon className="icon" />
              {isOpen && <span>News</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/members"
              className={isActive("/members") ? "active" : ""}
            >
              <GroupIcon className="icon" />
              {/* {isOpen && <span>Members</span>} */}
              {isOpen && <span>Collaborators</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/undergrad-students"
              className={isActive("/undergrad-students") ? "active" : ""}
            >
              <GroupsIcon className="icon" />
              {isOpen && <span>URM Projects</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/meetings"
              className={isActive("/meetings") ? "active" : ""}
            >
              <EventIcon className="icon" />
              {isOpen && <span>Meetings</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/workshop"
              className={isActive("/workshop") ? "active" : ""}
            >
              <HomeRepairServiceIcon className="icon" />
              {isOpen && <span>Workshop 1</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/workshop2"
              className={isActive("/workshop2") ? "active" : ""}
            >
              <HomeRepairServiceIcon className="icon" />
              {isOpen && <span>Workshop 2</span>}
            </Link>
          </li>
          <li>
            <Link to="/tools" className={isActive("/tools") ? "active" : ""}>
              <BuildIcon className="icon" />
              {isOpen && <span>Tools</span>}
            </Link>
          </li>
          {/* <li>
            <Link
              to="/datasets"
              className={isActive("/datasets") ? "active" : ""}
            >
              <StorageIcon className="icon" />
              {isOpen && <span>Datasets</span>}
            </Link>
          </li> */}
          <li>
            <Link
              to="/trainees"
              className={isActive("/trainees") ? "active" : ""}
            >
              <StorageIcon className="icon" />
              {isOpen && <span>Trainees</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={isActive("/contact") ? "active" : ""}
            >
              <MailIcon className="icon" />
              {isOpen && <span>Contact</span>}
            </Link>
          </li>
          {/* <li>
            <Link to="/about" className={isActive("/about") ? "active" : ""}>
              <InfoIcon className="icon" />
              {isOpen && <span>About</span>}
            </Link>
          </li> */}
          {/* <li>
            <Link
              onClick={handleLogout}
              style={{ position: "absolute", bottom: "5%" }}
            >
              <LogoutIcon className="icon" />
              {isOpen && <span>Logout</span>}
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
