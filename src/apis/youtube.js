import axios from "axios";
import env from "../.env";

const myKey = process.env.REACT_APP_API_KEY;
export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        part: 'snippet',
        maxResults: 5,

        key: myKey
    }

});


