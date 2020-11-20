import axios from "axios";

const KEY = "AIzaSyA4Ki7R3En7hI6RU_-W8GsK5Ol19OqfuQo";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
