const Router = require('express');
const CapteurController = require('../../controllers/emergency/capteur.ctrl');
const IncidentController = require('../../controllers/emergency/incident.ctrl');
const UtilisateurController = require('../../controllers/emergency/utilisateur.ctrl');

const router = Router();
const CapteurCtrl = new CapteurController();
const IncidentCtrl = new IncidentController();
const UtilisateurCtrl = new UtilisateurController();

router.get('/capteur/all', CapteurCtrl.getAll);
router.get('/incident/all', IncidentCtrl.getAll);
router.get('/incident/id/:id', IncidentCtrl.getOne);
router.post('/utilisateur/login', UtilisateurCtrl.login);

module.exports = router;