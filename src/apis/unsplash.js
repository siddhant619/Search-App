import axios from "axios";

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID t8k0MZFn0b9Oz04xLwPjCdZ7DWT01h62ndXjhmUC-Tk'

    }

})