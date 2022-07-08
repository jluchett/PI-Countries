const { Router } = require('express');
const obtCountry = require('../../controllers/Countries/saveInfo');
const dataBd = require('../../controllers/Countries/getBdInfo.js');

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
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try{
        const getBdCountries = await dataBd();
        if (id){
            let countrifind = await getBdCountries.filter(el => el.id == id);
            countrifind.length?
            res.status(200).json(countrifind) :
            res.status(404).send('No se econtro pais con este id')
        }
    }catch (error){
        console.log(error)
    }
});

module.exports = router;