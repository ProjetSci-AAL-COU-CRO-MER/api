const db = require('../../config/db.emergency');
const table = 'capteur';

class CapteurController {

    constructor() {}

    getAll(req, res, next) {
        db
        .query(`SELECT * FROM ${table}`)
        .then(e => res.send(e.rows))
        .catch(e => console.error(e.stack));
    }

    getOne(req, res, next) {
        db
        .query(`SELECT * FROM ${table} where ${req.body.id_capteur} = id`)
        .then(e => res.send(e.rows[0]))
        .catch(e => console.error(e.stack));
    }

    setIntensite(req, res, next) {
        console.log(req.body);
        db.
        query(`UPDATE ${table} SET 'intensite' = ${req.body.value} WHERE longitude = ${req.body.longitude} AND latitude = ${req.body.lattitude}`)
        .then(e => res.send(e.rows[0]))
        .catch(e => console.error(e.stack));
    }
}

module.exports = CapteurController;