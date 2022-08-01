const getDatos = require('./getCountries.js');
const { Country, Activity } = require('../../db.js');

const saveCountries = async () =>{
    try{
        let datosApi = await getDatos();
        datosApi.forEach(el=> {
            Country.findOrCreate({
                where: {
                    name : el.name,
                    id : el.id ,
                    img : el.img,
                    continent : el.continent,
                    capital : el.capital,
                    subregion : el.subregion,
                    area : el.area,
                    population : el.population,
                }
            })
        });
        const allCountries = await Country.findAll({
            include:{
                model: Activity,
                attributes: ['name'],
                through: { attributes: [], },
            }
        })
        return allCountries
    }catch (error){
        console.log(error)
    }
}

module.exports = saveCountries;