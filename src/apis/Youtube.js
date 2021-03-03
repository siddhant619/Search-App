import axios from "axios";
const KEY='AIzaSyBe_eGga2_CEKQQn4lRrLg9xyqFAKkO9Rw';
export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:"snippet",
        maxResults:"5",
        type: 'video',
        order:'viewcount',
        
        key:KEY
    },
    headers:{
        Authorization: 'Client-ID t8k0MZFn0b9Oz04xLwPjCdZ7DWT01h62ndXjhmUC-Tk'

    }

})