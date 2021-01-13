const db = require('../../config/db.emergency');
const table = 'etablissement';
const table_type = 'etablissement_type';

class EtablissementController {

    constructor() {}

    getAll(req, res, next) {
        db
        .query(`SELECT e.*,et.libelle FROM ${table} e LEFT JOIN ${table_type} et ON et.id = e.id_etablissement_type`)
        .then(e => res.send(e.rows))
        .catch(e => console.error(e.stack));
    }
    
    getList(req, res, next) {
        const query = `
            SELECT e.id, e.latitude, e.longitude, e.nom, et.libelle as etablissement_type, COUNT(v.*) as nb_vehicule FROM ${table} e
            LEFT JOIN ${table_type} et ON et.id = e.id_etablissement_type
            left join vehicule v on v.id_etablissement = e.id
            group by e.id, et.id`;
        db
        .query(query)
        .then(e => res.send(e.rows))
        .catch(e => console.error(e.stack));
    }

    getListTypeEtablissement(req, res, next) {
        db
        .query(`SELECT * FROM ${table_type}`)
        .then(e => res.send(e.rows))
        .catch(e => console.error(e.stack));
    }

    getOne(req, res, next) {
        db
        .query(`SELECT * FROM ${table} where ${req.params.id} = id`)
        .then(e => res.send(e.rows[0]))
        .catch(e => console.error(e.stack));
    }

    createEtablissement(req, res, next) {
        const query = `INSERT INTO ${table} (nom, longitude, latitude, id_etablissement_type) VALUES ('${req.body.nom}', ${req.body.longitude}, ${req.body.latitude}, ${req.body.id_etablissement_type})`;
        db
        .query(query)
        .then(e => res.send(true))
        .catch(e => console.error(e.stack));
    }

    deleteEtablissement(req, res, next) {
        const query = `DELETE FROM ${table} WHERE id = ${req.params.id}`;
        db
        .query(query)
        .then(e => res.send(true))
        .catch(e => console.error(e.stack)); 
    }
}

module.exports = EtablissementController;