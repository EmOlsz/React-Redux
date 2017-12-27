// Library
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './components/search_bar';
import VideoDetails from './components/video_detail';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyBzCcqKCjEjjlXWhYoVTWx_gSasQ5XgDw8';

class App extends Component {
    constructor(props) {
        super(props);
        this.state= {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('Welcome to the sky valley');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => this.setState({
            videos,
            selectedVideo: videos[0]
        }));
    }

    render() {
        const videoSearch = _.debounce(term => {this.videoSearch(term)}, 300);
        return (
            <div>
                <SearchBar
                onSearchTermChange={videoSearch} />
                <VideoDetails
                    videos={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                    videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));