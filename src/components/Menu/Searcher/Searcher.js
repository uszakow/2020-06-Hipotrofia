import React from 'react';
import './Searcher.scss';

import search from '../../../img/Menu/search.svg';

function Searcher(props) {
    const { css, closeMenu } = props;

    const searchPhrase = e => {
        e.preventDefault();
        if (closeMenu) closeMenu();
        //function for search information
    }

    return (
        <form className={"menu-searcher " + css}>
            <input placeholder="szukana fraza" />
            <button type="submit" onClick={searchPhrase}>
                <img src={search} width="18" alt="search" />
            </button>
        </form>
    )
}

export default Searcher;

//author: Paweł Uszakow