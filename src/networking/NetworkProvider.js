import axios from "axios";

const BASE_URL = 'http://10.0.0.98:8080/api';

class NetworkService {
  async getRequest(url) {
    try {
      const res = await axios.get(BASE_URL + url);
      return res;
    } catch (error) {
      console.error(error);
    }
  }
}

export default new NetworkService;
