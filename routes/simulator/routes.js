const Router = require('express');
const ConfPosGeoController = require('../../controllers/simulator/confPosGeo.ctrl');
const IncidentController = require('../../controllers/incident.ctrl');
const UtilisateurController = require('../../controllers/simulator/utilisateur.ctrl');

const router = Router();


//instanciate only for the auto-implementor
let confPosGeoCtrl = new ConfPosGeoController();
let IncidentCtrl = new IncidentController();
let UtilisateurCtrl = new UtilisateurController();

//middleware to instanciate class in function of the route
router.use((req, res, next) => {
    //here are the real instanciation
    confPosGeoCtrl = new ConfPosGeoController(router.path());
    IncidentCtrl = new IncidentController(router.path());
    UtilisateurCtrl = new UtilisateurController(router.path());
    next();
})

router.get('/config-pos-geo', confPosGeoCtrl.get);
router.get('/incident/all', IncidentCtrl.getAll);
router.get('/incident/get', IncidentCtrl.getOne); //need urlParam id
router.post('/incident/create', IncidentCtrl.createOne);
router.get('/incident/delete', IncidentCtrl.deleteAll);
router.get('/utilisateur/getInstance', UtilisateurCtrl.getInstance);


module.exports = router;