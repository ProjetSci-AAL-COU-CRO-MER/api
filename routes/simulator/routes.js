const Router = require('express');
const ConfPosGeoController = require('../../controllers/simulator/confPosGeo.ctrl');

const router = Router();
const confPosGeoController = new ConfPosGeoController();

router.get('/config-pos-geo', confPosGeoController.get);

module.exports = router;