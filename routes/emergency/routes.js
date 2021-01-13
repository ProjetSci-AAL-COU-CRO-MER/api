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

router.get('/config-pos-geo', ConfPosGeoCtrl.get);
router.get('/capteur/all', CapteurCtrl.getAll);
router.get('/incident/all', IncidentCtrl.getAll);
router.get('/incident/id/:id', IncidentCtrl.getOne);
router.get('/incident/all', IncidentCtrl.getAll);
router.post('/utilisateur/login', UtilisateurCtrl.login);
router.get('/etablissement/all', EtablissementCtrl.getAll);
router.get('/vehicule/all', VehiculeCtrl.getAll);

module.exports = router;