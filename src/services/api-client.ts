import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '4db310e2a25a4ee0a44afd7e3b8062b9'
    }
})