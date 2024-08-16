import { useState } from "react"

const Search = ({ handleSearch }) => {

    const [userInput, setUserInput] = useState("Toronto");

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSearch(userInput);
        }
    };


    return (
        <div className="search-engine">
            <input type="text"
                className="city-search"
                placeholder="Enter City Name"
                name="search"
                onKeyDown={handleKeyDown}
                onChange={e => setUserInput(e.target.value)}
            />
            <button className="search-btn" onClick={() => handleSearch(userInput)}>Search Weather</button>
        </div>
    )
}

export default Search
