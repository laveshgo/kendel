import React from "react";
import '../Styles/navbar.css';
import { Link, withRouter } from "react-router-dom";
import {PersonOutlineIcon} from '@material-ui/icons';

function NavBar(props){

    return (
        <div className="navbar">
            <div className="container">
            <ul>
          <li >
            <Link className="liText" to="/">
              Profile{" "}
            </Link>
          </li>{" "}
          <li>
            <Link className="liText" to="/dashbaord">
              Dashboard{" "}
            </Link>
          </li>{" "}
          <hr />
          <p>Main</p>
          <li>
            <Link className="liText" to="/classes">
              Classes{" "}
            </Link>
          </li>{" "}
          <li >
            <Link className="liText" to="/staff">
              Staff{" "}
            </Link>
          </li>{" "}
          <li >
            <Link className="liText" to="/students">
              Students{" "}
            </Link>
          </li>{" "}
          <li >
            <Link className="liText" to="/Exam">
              Exam{" "}
            </Link>
          </li>
          <li >
            <Link className="liText" to="/curriculam">
              Curriculam{" "}
            </Link>
          </li>
          <li >
            <Link className="liText" to="/timetable">
              Time Table{" "}
            </Link>
          </li>
          <li >
            <Link className="liText" to="/teahcerattendence">
              Staff Attendence{" "}
            </Link>
          </li>
          <li >
            <Link className="liText" to="/studentattendence">
              Student Atttendence{" "}
            </Link>
          </li>
          <hr />
          <p>Others</p>
          <li >
            <Link className="liText" to="/settins">
              Settings{" "}
            </Link>
          </li>
          <li >
            <Link className="liText" to="/logout">
              Logout{" "}
            </Link>
          </li>
          
        </ul>
      </div>

            
        </div>
    )
}

export default NavBar;