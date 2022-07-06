const axios = require('axios');

const getInfoApi = async () => {
    try{
        const apiUrl = await axios.get('https://restcountries.com/v3/all');
        const apiResults = apiUrl.data.map(el => {
            return {
                name : el.name.common,
                id : el.cca3,
                img : el.flags[0],
                continent : el.continents[0],
                capital : el.capital? el.capital[0] : el.name.official,
                subregion : el.subregion,
                area : el.area,
                population : el.population,
            }
        })
        return apiResults
    }catch(error){
        console.log(error)
    }
};

module.exports = getInfoApi;