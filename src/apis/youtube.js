import axios from "axios";

const KEY = "AIzaSyCEa5sli-CMi00k6DBHeO_Rs-ddgJB6owk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
