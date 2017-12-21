// Library
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBox from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyBzCcqKCjEjjlXWhYoVTWx_gSasQ5XgDw8';
const term = 'Stone temple pilots';

class App extends Component {
    constructor(props) {
        super(props);
        this.state= {
            videos: []
        };
        YTSearch({key: API_KEY, term: term}, (videos) => this.setState({videos}));
    }
    render() {
        return (
            <div>
                <SearchBox />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));