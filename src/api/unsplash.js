import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID r-IDsKQZ6LdLewWHh6ZEVgTIvQx27va-e9Pr6CtQjuM",
    }
});