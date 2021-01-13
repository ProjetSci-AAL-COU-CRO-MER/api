const db = require('../../config/db.simulator');
const table = 'config_pos_geo';

class ConfPosGeoController {

    constructor() {}

    getActif(req, res, next) {
        db
        .query(`SELECT * FROM ${table} WHERE b_actif = true`)
        .then(e => res.send(e.rows[0]))
        .catch(e => console.error(e.stack));
    }

    getAll(req, res, next) {
        db
        .query(`SELECT * FROM ${table}`)
        .then(e => res.send(e.rows))
        .catch(e => console.error(e.stack));
    }

    newConfig(req, res, next) {
        const query = `INSERT INTO ${table} VALUES (${req.body.longitude}, ${req.body.latitude}, ${req.body.rayon_km}, FALSE)`;
        db
        .query(query)
        .then(e => res.send(true))
        .catch(e => console.error(e.stack));
    }

    activConfig(req, res, next) {
        const query = `UPDATE ${table} SET b_actif=TRUE WHERE id = ${req.param.id}`;
        db
        .query(query)
        .then(e => res.send(true))
        .catch(e => console.error(e.stack));
    }

    desactivConfig(req, res, next) {
        const query = `UPDATE ${table} SET b_actif=FALSE WHERE id = ${req.param.id}`;
        db
        .query(query)
        .then(e => res.send(true))
        .catch(e => console.error(e.stack));
    }
}

module.exports = ConfPosGeoController;