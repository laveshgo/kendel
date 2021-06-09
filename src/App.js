import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar.js";
import Footer from "./components/footer.js"
import TopBar from "./components/topbar.js";
import TeacherAttendence from "./components/Routes/teacherAttendence";
import {profile} from "./components/Routes/profile";
import {dashboard} from "./components/Routes/dashboard";
import {staff} from "./components/Routes/staff";
import {students} from "./components/Routes/students";
import {exam} from "./components/Routes/exam";
import {curriculam} from "./components/Routes/curriculam";
import {timetable} from "./components/Routes/timetable";
import {studentAttendence} from "./components/Routes/studentAttendence";
import {settings} from "./components/Routes/settings";
import {logout} from "./components/Routes/logout";
import {classes} from "./components/Routes/classes";

function App() {

  const [showNav , SetShowNav]  = useState(true);

  function handleClick(){
    SetShowNav( previous => !previous)
    console.log(showNav);
  }

  return (
        
       
        
    <Router>
          <div className="App">
            {showNav && <NavBar />}
             <TopBar 
              onClickked = {handleClick}
              toShow = {showNav}
            />

            <Switch>
              <Route path="/" exact component={profile} />
              <Route path="/classes" exact component={classes} />
              <Route path="/dashboard" exact component={dashboard} />
              <Route path="/classes" exact component={classes} />
              <Route path="/staff" exact component={staff} />
              <Route path="/students" exact component={students} />
              <Route path="/exam" exact component={exam} />
              <Route path="/curriculam" exact component={curriculam} />
              <Route path="/timetable" exact component={timetable} />
              <Route path="/teahcerattendence" exact component={TeacherAttendence} />
              <Route path="/studentattendence" exact component={studentAttendence} />
              <Route path="/settings" exact component={settings} /> 
              <Route path="/logout" exact component={logout} /> 
            </Switch>

            <Footer />
          </div>
      </Router>
  );
}

export default App;
