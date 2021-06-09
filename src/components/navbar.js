import React from "react";
import '../Styles/navbar.css';
import { Link, withRouter } from "react-router-dom";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ClassIcon from '@material-ui/icons/Class';
import PeopleIcon from '@material-ui/icons/People';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import ReceiptIcon from '@material-ui/icons/Receipt';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function NavBar(props){

    return (
        <div className="navbar">
            <div className="container">
             <ul>
                <Link to="/">
                  <li className="liText" >
                    <PersonOutlineIcon />
                    Profile
                  </li>{" "}
                </Link>
                <Link  to="/dashbaord">
                  <li className="liText"> 
                    <DashboardIcon />         
                    Dashboard                  
                  </li>{" "}
                </Link>
                <hr />
                <p>Main</p>
                <Link  to="/classes">
                  <li className="liText"> 
                    <ClassIcon />         
                    Classes                  
                  </li>{" "}
                </Link>
                <Link  to="/staff">
                  <li className="liText"> 
                    <PeopleIcon />         
                    Staff                  
                  </li>{" "}
                </Link>
                <Link  to="/students">
                  <li className="liText"> 
                    <PeopleIcon />         
                    Students                  
                  </li>{" "}
                </Link>
                <Link  to="/exam">
                  <li className="liText"> 
                    <LiveHelpIcon />         
                    Exam                  
                  </li>{" "}
                </Link>
                <Link  to="/curriculam">
                  <li className="liText"> 
                    <ReceiptIcon />         
                    Curriculam                  
                  </li>{" "}
                </Link>
                <Link  to="/timetable">
                  <li className="liText"> 
                    <CheckBoxIcon />         
                    Time Table                  
                  </li>{" "}
                </Link>              
                <Link  to="/teahcerattendence">
                  <li className="liText">
                    <EventAvailableIcon />
                    Staff Attendence{" "}
                  </li>
                </Link>
                <Link  to="/studentattendence">
                  <li className="liText"> 
                    <PeopleIcon />         
                    Student Atttendence                 
                  </li>{" "}
                </Link>
                <hr />
                <p>Others</p>
                <Link  to="/settings">
                  <li className="liText">
                    <SettingsIcon />
                    Settings{" "}
                  </li>
                </Link>
                <Link  to="/logout">
                  <li className="liText">
                    <ExitToAppIcon />
                    Logout{" "}
                  </li>
                </Link>
              </ul>
           </div>   
        </div>
    )
}

export default NavBar;