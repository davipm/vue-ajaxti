import axios from "axios";

const api = axios.create({
  baseURL: "http://cms.ajaxti.com.br/wp-json"
});

export default api;
