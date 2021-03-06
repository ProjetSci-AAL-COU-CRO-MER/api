const Router = require('express');
const ConfPosGeoController = require('../../controllers/simulator/confPosGeo.ctrl');
const IncidentController = require('../../controllers/simulator/incident.ctrl');
const UtilisateurController = require('../../controllers/simulator/utilisateur.ctrl');

const router = Router();
const ConfPosGeoCtrl = new ConfPosGeoController();
const IncidentCtrl = new IncidentController();
const UtilisateurCtrl = new UtilisateurController();

router.get('/config-pos-geo', ConfPosGeoCtrl.getActif);
router.get('/config-pos-geo/all', ConfPosGeoCtrl.getAll);
router.post('/config-pos-geo/new', ConfPosGeoCtrl.newConfig);
router.get('/config-pos-geo/active/:id', ConfPosGeoCtrl.activConfig);
router.get('/config-pos-geo/desactive/:id', ConfPosGeoCtrl.desactivConfig);
router.get('/config-pos-geo/delete/:id', ConfPosGeoCtrl.deleteConfig);

router.get('/incident/all', IncidentCtrl.getAll);
router.get('/incident/get/:id', IncidentCtrl.getOne); //need url param id
router.get('/incident/feu/all', IncidentCtrl.getAllFeux);
router.post('/incident/update', IncidentCtrl.updateIncidents);
router.post('/incident/create', IncidentCtrl.createOne);
router.get('/incident/delete', IncidentCtrl.deleteAll);

router.get('/utilisateur/getInstance', UtilisateurCtrl.getInstance);
router.post('/utilisateur/login', UtilisateurCtrl.login);

module.exports = router;