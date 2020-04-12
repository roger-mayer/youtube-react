import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
    //state object (properties video and selectedVideo)
    state = { videos: [], selectedVideo: null };

    onTermSubmit = async (term) =>{
        //this is called when searchbar term is submitted
       const response = await youtube.get('/search',{
            params:{
                q: term
            }
        });
        this.setState({ videos: response.data.items});
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
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
            </div>
        );
    }
}

export default App;