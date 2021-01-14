const Router = require('express');
const CapteurController = require('../../controllers/emergency/capteur.ctrl');
const ConfPosGeoController = require('../../controllers/emergency/confPosGeo.ctrl');
const EtablissementController = require('../../controllers/emergency/etablissement.ctrl');
const IncidentController = require('../../controllers/emergency/incident.ctrl');
const UtilisateurController = require('../../controllers/emergency/utilisateur.ctrl');
const VehiculeController = require('../../controllers/emergency/vehicule.ctrl');

const router = Router();
const CapteurCtrl = new CapteurController();
const IncidentCtrl = new IncidentController();
const UtilisateurCtrl = new UtilisateurController();
const ConfPosGeoCtrl = new ConfPosGeoController();
const EtablissementCtrl = new EtablissementController();
const VehiculeCtrl = new VehiculeController(); 

router.get('/config-pos-geo', ConfPosGeoCtrl.getActif);
router.get('/config-pos-geo/all', ConfPosGeoCtrl.getAll);
router.post('/config-pos-geo/new', ConfPosGeoCtrl.newConfig);
router.get('/config-pos-geo/active/:id', ConfPosGeoCtrl.activConfig);
router.get('/config-pos-geo/desactive/:id', ConfPosGeoCtrl.desactivConfig);
router.get('/config-pos-geo/delete/:id', ConfPosGeoCtrl.deleteConfig);

router.get('/capteur/all', CapteurCtrl.getAll);
router.post('/capteur/intensite', CapteurCtrl.setIntensite);

router.get('/incident/all', IncidentCtrl.getAll);
router.get('/incident/id/:id', IncidentCtrl.getOne);
router.get('/incident/all', IncidentCtrl.getAll);
router.get('/incident/delete', IncidentCtrl.deleteAll);
router.post('/incident/update', IncidentCtrl.updateIncidents);
router.post('/incident/create', IncidentCtrl.createOne);

router.post('/utilisateur/login', UtilisateurCtrl.login);

router.get('/etablissement/all', EtablissementCtrl.getAll);
router.get('/etablissement/list', EtablissementCtrl.getList);
router.get('/etablissement/type/list', EtablissementCtrl.getListTypeEtablissement);
router.get('/etablissement/one/:id', EtablissementCtrl.getOne);
router.post('/etablissement/new', EtablissementCtrl.createEtablissement);
router.get('/etablissement/delete/:id', EtablissementCtrl.deleteEtablissement);

router.get('/vehicule/all', VehiculeCtrl.getAll);
router.get('/vehicule/etablissement/:id', VehiculeCtrl.getVehiculeEtablissement);
router.get('/vehicule/type/all', VehiculeCtrl.getVehiculeTypeList);
router.post('/vehicule/new', VehiculeCtrl.newVehicule);
router.get('/vehicule/delete/:id', VehiculeCtrl.deleteVehicule);

module.exports = router;