/* Author: Tor Sdayur */

// card navigation

import '../styles/CardsNav.css'

export default function CardsNav({cardsSize, cardLimit, page, setPage})
{
    const onClick = (e) => {
        updatePage(e.currentTarget.value, page, setPage);
    }

    function updatePage(buttonClicked, page, setPage) {
        buttonClicked === "prev-page"
            ? setPage(page - 1)
            : setPage(page + 1);
    }

    return (
        <nav className="page-nav">
            <button
                className='nav-arrow'
                disabled={page === 0} 
                onClick={onClick} 
                value="prev-page"
            >
                <div className='arrow up'></div>
            </button>
            <button 
                className='nav-arrow'
                disabled={(page + 1) * cardLimit > cardsSize} 
                onClick={onClick} 
                value="next-page"
            >
                <div className='arrow down'></div>
            </button>
        </nav>
    )
}