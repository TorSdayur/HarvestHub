/* Author: Nathan Vazquez */
import { Link } from "react-router-dom";

import '../styles/Header.css'

export default function Header()
{
    return (
        <header>
            <img id="site-logo" src="logo.svg"/>
            <PageMenu />
        </header>
    );
}

function PageMenu () {
    return (
        <div className="drpdown">
            <button className="nav">Navigate</button>
            <div className="dropdown-options">
                <Link className="link" to="/useharvesthub">Use Harvest Hub</Link>
                <Link className="link" to="/aboutus">Who is Harvest Hub</Link>
                <Link className="link" to="/projectinfo">What is Harvest Hub</Link>
            </div>
            
        </div>
    );
}