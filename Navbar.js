import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';




function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <div className="wrapper">
          <div className="navbar">
            <div className="nav-container">
            
                <h1 className="navBrand">
                Larry's ToDo App! 
                </h1>
                
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                       <Link to="/" className="nav-links">
                       Home
                       </Link> 
                    </li>
                    <li className="nav-item">
                       <Link to="/Todolist.js" className="nav-links">
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
