const { Router } = require('express');
const obtCountry = require('../../controllers/Countries/saveInfo');

const router = Router();

router.get('/', async (req,res) =>{
    const name = req.query.name;
    try{
        let totCountries = await obtCountry();
        if(name){
            let countryName = await totCountries.filter(el => el.name.toLowerCase().includes(name.toLowerCase()));
            countryName.length ?
            res.status(200).send(countryName) :
            res.status(404).send("No se encontraron paises")
        }else{
            res.status(200).send(totCountries)
        }
    }catch (error){
        console.log(error)
    }
})

module.exports = router;