const { Router } = require('express');
const { Activity, Country } = require('../../db.js')

const router = Router();

router.post('/', async (req, res) =>{
    let {
        name,
        difficulty,
        duration,
        season,
        country,
    } = req.body;
    try{
        let createActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season,
        })
        let countryDb = await Country.findAll({ where: { name: country }})
        createActivity.addCountry(countryDb);
        res.send('Actividad creada exitosamente')
    }catch (error){
        console.log(error)
    }
});

module.exports = router;