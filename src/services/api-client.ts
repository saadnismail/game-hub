import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '15f8782442f04333966d98efcbc03abf'
  }
})