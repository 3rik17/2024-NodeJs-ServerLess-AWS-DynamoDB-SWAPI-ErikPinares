const axios = require("axios")
const url = "https://swapi.dev/api/planets/"

const swapiGetDataPlanetas = async (page) =>{
    if(!page || page < 1) page = 1;
    if( page && page>9) page = 9;
    try {
        const response = await axios.get(`${url}?page=${page}`);
        return response
    } catch (error) {
        console.log(error)
        return null
    }
}

module.exports = {
    swapiGetDataPlanetas
}