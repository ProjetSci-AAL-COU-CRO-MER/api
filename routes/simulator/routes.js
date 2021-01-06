const Router = require('express');
const ConfPosGeoController = require('../../controllers/simulator/confPosGeo.ctrl');
const IncidentController = require('../../controllers/simulator/incident.ctrl');
const UtilisateurController = require('../../controllers/simulator/utilisateur.ctrl');

const router = Router();
const confPosGeoCtrl = new ConfPosGeoController();
const IncidentCtrl = new IncidentController();
const UtilisateurCtrl = new UtilisateurController();

router.get('/config-pos-geo', confPosGeoCtrl.get);
router.get('/incident/all', IncidentCtrl.getAll);
router.get('/incident/id/:id', IncidentCtrl.getOne);
router.get('/utilisateur/getInstance', UtilisateurCtrl.getInstance);

module.exports = router;