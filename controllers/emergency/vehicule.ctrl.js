const db = require('../../config/db.emergency');
const table = 'vehicule';
const table_type = 'vehicule_type';
const table_etat = 'vehicule_etat';
const table_etablissement = 'vehicule_etat';

class VehiculeController {

    constructor() {}

    getAll(req, res, next) {
        db
        .query(`SELECT v.nom, et.id as id_etablissement, vt.libelle as type_vehicule, ve.libelle as etat_vehicule, v.latitude, v.longitude , v.id FROM ${table} v LEFT JOIN ${table_type} vt ON vt.id = v.id_vehicule_type LEFT JOIN ${table_etat} ve ON ve.id = v.id_vehicule_etat INNER JOIN ${table_etablissement} as et on v.id_etablissement=et.id `)
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