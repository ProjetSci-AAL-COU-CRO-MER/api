const db = require('../../config/db.emergency');
const table = 'etablissement';
const table_type = 'etablissement_type';

class EtablissementController {

    constructor() {}

    getAll(req, res, next) {
        db
        .query(`SELECT * FROM ${table} e LEFT JOIN ${table_type} et ON et.id = e.id_etablissement_type`)
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

module.exports = EtablissementController;