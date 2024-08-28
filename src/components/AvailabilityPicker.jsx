/* Author: Tor Sdayur */

import '../styles/AvailabilityPicker.css'

// Filters by day avaiable
//multiple days may be selected
export default function AvailabilityPicker({onClick}) {
    return (
        <div className="dropdown">
            <button className="dropbtn">Days</button>
            <div className="dropdown-content">
                <button value="m" onClick={(e) => onClick(e.target)}>Monday</button>
                <button value="tu" onClick={(e) => onClick(e.target)}>Tuesday</button>
                <button value="w" onClick={(e) => onClick(e.target)}>Wednesday</button>
                <button value="th" onClick={(e) => onClick(e.target)}>Thursday</button>
                <button value="f" onClick={(e) => onClick(e.target)}>Friday</button>
                <button value="sa" onClick={(e) => onClick(e.target)}>Saturday</button>
                <button value="su" onClick={(e) => onClick(e.target)}>Sunday</button>
            </div>
        </div>
    )
}