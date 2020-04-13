import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
    //state object (properties video and selectedVideo)
    state = {videos: [], selectedVideo: null};

    //default image
    componentDidMount() {
        this.onTermSubmit('buildings');
    };

    onTermSubmit = async (term) => {
        //this is called when searchbar term is submitted
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });


        //update application with search submission
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]

        });
    };
    //callback when video is selected
    onVideoSelect = (video) => {
        console.log('from the app', video);
        this.setState({selectedVideo: video});
    };

    render() {
        return (
            <div className="ui container">
                {/*runs search tem through onFormSubmit in SearchBar.jas*/}
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect}
                                       videos={this.state.videos}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
//need to go back to fix api