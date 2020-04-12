import axios from "axios";
import env from "../.env";
const REACT_APP_API_KEY='AIzaSyBXAyimeyDQaq0xckMpjEG4NzYGJR_XTbg';
const KEY = REACT_APP_API_KEY;
// const KEY = process.env.REACT_APP_API_KEY;
export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }

});


