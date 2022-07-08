const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countries = require('./countries/getCountries.js');
const postActivies = require('./activities/postActivity.js');
const getActivys = require('./activities/getActivities.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', countries);
router.use('/activities', postActivies);
router.use('/activities', getActivys)

module.exports = router;
