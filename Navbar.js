import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '/Users/L-Hodges/my-app/src/index.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <div>
          <div className="navbar">
            <div className="nav-container">
            
                <Link to="/" className="navlinks">
                ToDo App
                </Link>
                <div className="menu-icon" onClick={handleClick} >
                {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                       <Link to="/" className="nav-links">
                       Home
                       </Link> 
                    </li>
                    <li className="nav-item">
                       <Link to="/Test.js" className="nav-links">
                       ToDo List
                       </Link> 
                    </li>
                    <li className="nav-item">
                       <Link to="/Form.js" className="nav-links">
                       Feedback
                       </Link> 
                    </li>               
                </ul>

            </div>
         </div> 
        </div>
    );
};

export default Navbar;
