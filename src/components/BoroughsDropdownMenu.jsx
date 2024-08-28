/* Author: Tor Sdayur */

import '../styles/BoroughsDropdownMenu.css'

//filter boroughs
//multiple boroughs may be selected
export default function BoroughsDrowdownMenu({onClick})
{
    return (
        <div className="dropdown">
            <button className="dropbtn">Boroughs</button>
            <div className="dropdown-content">
                <button value="manhattan" onClick={(e) => onClick(e.target)}>Manhattan</button>
                <button value="brooklyn" onClick={(e) => onClick(e.target)}>Brooklyn</button>
                <button value="queens" onClick={(e) => onClick(e.target)}>Queens</button>
                <button value="the bronx" onClick={(e) => onClick(e.target)}>Bronx</button>
                <button value="staten island" onClick={(e) => onClick(e.target)}>Staten Island</button>
            </div>
        </div>
    );
}