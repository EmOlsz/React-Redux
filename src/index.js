// Library
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import SearchBox from "./components/search_bar";

const API_KEY = 'AIzaSyBzCcqKCjEjjlXWhYoVTWx_gSasQ5XgDw8';

const App = () => {
    return (
        <div>
            <SearchBox />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('.container'));