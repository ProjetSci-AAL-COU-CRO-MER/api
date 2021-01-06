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
}

module.exports = CapteurController;