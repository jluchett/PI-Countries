const { Activity, Country } = require('../../db.js');

const obtActivities = async () => {
    try{
        const activities = await Activity.findAll({
            include:{
                model: Country,
                attributes: ['name'],
                through: { attributes: [], },
            }
        });
        return activities;
    }catch (error){
        console.log(error)
    }
};

module.exports = obtActivities;