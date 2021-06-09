import React  from "react";
import '../Styles/topbar.css';


function TopBar(props){


    return (
        <div className="topbar">
            <div className="logoSection">
                <h1>KenDEL</h1>
                <button onClick={props.onClickked} title ={props.toShow ? "Hide Navigation Bar" :"Show Navigation Bar"} >{props.toShow ? "<" :">"}</button>
            </div> 
        </div>
    )
}

export default TopBar;