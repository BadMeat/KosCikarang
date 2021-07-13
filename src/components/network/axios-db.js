import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://kos-cikarang-tamsos-default-rtdb.firebaseio.com/",
});

export default instance;
