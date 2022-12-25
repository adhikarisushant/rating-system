import axios from 'axios'

const instance = axios.create({
    baseUrl: "http://localhost:3005/api/v1/restaurants"
})

export default instance;