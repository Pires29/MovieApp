import React, { useState } from 'react';
import { useSearch } from './SearchContext';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

function SearchBar() {
  const { searchValue, setSearchValue } = useSearch();
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSearchClick = () => {
    setInputText(inputText);
    setInputText(''); 
  };

  return (
    <div className="search-local">
      <div className="icon">
        <ion-icon name="location-outline"></ion-icon>
      </div>

      <input
        className='search-bar-input'
        type="text"
        placeholder="Search for a movie..."
        value={inputText}
        onChange={handleInputChange}
      />

      <Link
        to= "/moviepage" state= {{ inputText } }
      >
        <button onClick={handleSearchClick}>
          <FaSearch/>
        </button>
      </Link>
    </div>
  );
}

export default SearchBar;
