import React from "react";
import { MdSearch } from "react-icons/all";

const Search = ({ handleSearchNote }) => {
    return (
        <div className='search'>
            <MdSearch className='search-icons' size='1.3em' />
            <input
                onChange={(event) =>
                    handleSearchNote(event.target.value)
                }
                type='text'
                placeholder='search...'/>
        </div>
    );
}

export default Search;
