/* Author: Tor Sdayur */

import BoroughsDrowdownMenu from './BoroughsDropdownMenu'
import DistPicker from './DistPicker'
import AvailabiltyPicker from './AvailabilityPicker'

import '../styles/FilterMenu.css'

// Filters food services
export default function FilterMenu({
    onClickBoroughs,
    onClickAvailabilities,
    onKeyDownDist
})
{
    return (
        <nav className="filter-menu">
            <BoroughsDrowdownMenu onClick={onClickBoroughs}/>
            <AvailabiltyPicker onClick={onClickAvailabilities}/>
            <DistPicker onKeyDown={onKeyDownDist}/>
        </nav>
    );
}