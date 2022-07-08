const { Router } = require('express');
const getActivit = require('../../controllers/Activities/getActivity.js');

const router = Router();

router.get('/', async (req, res) =>{
    const name = req.query.name;
    try{
        let totActivities = await getActivit();
        if(name){
            let activityName = await totActivities.filter(el => el.name.toLowerCase().includes(name.toLowerCase()));
            activityName.length ?
            res.status(200).send(activityName) :
            res.status(404).send("No se encontraron actividades")
        }else{
            res.status(200).send(totActivities)
        }
    }catch (error){
        console.log(error)
    }

})

module.exports = router;