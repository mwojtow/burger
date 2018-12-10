import axios from "axios";

const instance = axios.create({
  baseURL: "https://mw-react-burgerapp.firebaseio.com/"
});

export default instance;
