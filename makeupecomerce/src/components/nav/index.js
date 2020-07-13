import React from 'react';
import '../nav/nav.css';
import { NavLink } from 'react-router-dom';


class Nav extends React.Component {
    render() {
    return (
        <div>
        <header>
        <nav id="navbar">
            <div className="nav-container">
                <h1 className="logo">bam</h1>      
               
                <ul>
                    <li>
                        <NavLink exact={true} to="/AboutUs">Home</NavLink>
                    </li>
                    <li>
                        <NavLink exact={true} to="/Product">Products</NavLink>
                    </li>
                    <li>
                        <NavLink exact={true} to="/Contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
      </header>
    </div>
        )   
    };
};

export default Nav;