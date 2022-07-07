const { Country, Activity } = require('../../db.js');

const getDbinfo = async () => {
    try{
        return await Country.findAll({
            include:{
                model: Activity,
                attributes: ['name'],
                through: { attributes: [], },
            }
        })
    }catch (error){
        console.log(error);
    }
};

module.exports = getDbinfo;