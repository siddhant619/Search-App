import axios from "axios";

export default axios.create({
    baseURL:'https://en.wikipedia.org/w/api.php',
    params:{
        action:'query',
        list:'search',
        format:'json',
        origin:'*',
        srlimit:10 //no of articles returned in a query

    }
    

})