import React, { useState } from "react";
import '../Styles/navbar.css';

function NavBar(){

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className="navbar">
            <div className="container">
                <div className="profile-section">
                
                </div>
            </div>
        </div>
    )
}

export default NavBar;