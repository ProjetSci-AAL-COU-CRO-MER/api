const db = require('../../config/db.emergency');
const table = 'vehicule';
const table_type = 'vehicule_type';
const table_etat = 'vehicule_etat';

class VehiculeController {

    constructor() {}

    getAll(req, res, next) {
        db
        .query(`SELECT * FROM ${table} v LEFT JOIN ${table_type} vt ON vt.id = v.id_vehicule_type LEFT JOIN ${table_etat} ve ON ve.id = v.id_vehicule_etat`)
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

module.exports = VehiculeController;