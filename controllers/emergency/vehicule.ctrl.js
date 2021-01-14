const db = require('../../config/db.emergency');
const table = 'vehicule';
const table_type = 'vehicule_type';
const table_etat = 'vehicule_etat';
const table_etablissement = 'vehicule_etat';
const table_incident_vehicule = 'incident_vehicule';
const table_incident = 'incident';

class VehiculeController {

    constructor() { }

    getAll(req, res, next) {
        db
            .query(`SELECT ${table_incident}.longitude as incident_long, ${table_incident}.latitude as incident_lat,v.nom, et.id as id_etablissement, vt.libelle as type_vehicule, ve.libelle as etat_vehicule, v.latitude, v.longitude , v.id 
            FROM ${table} v 
            LEFT JOIN ${table_type} vt ON vt.id = v.id_vehicule_type 
            LEFT JOIN ${table_etat} ve ON ve.id = v.id_vehicule_etat INNER JOIN ${table_etablissement} as et on v.id_etablissement=et.id 
            LEFT JOIN ${table_incident_vehicule}  ON ${table_incident_vehicule}.id_vehicule = v.id 
            LEFT JOIN ${table_incident}  ON ${table_incident_vehicule}.id_incident = ${table_incident}.id`)
            .then(e => res.send(e.rows))
            .catch(e => console.error(e.stack));
    }

    getOne(req, res, next) {
        db
            .query(`SELECT * FROM ${table} where ${req.body.id_capteur} = id`)
            .then(e => res.send(e.rows[0]))
            .catch(e => console.error(e.stack));
    }

    getVehiculeEtablissement(req, res, next) {
        const query = `
            SELECT v.id, v.nom, vt.libelle as vehicule_type, v.latitude, v.longitude, ve.libelle as vehicule_etat FROM ${table} v
            LEFT JOIN ${table_type} vt ON vt.id = v.id_vehicule_type
            LEFT JOIN ${table_etat} ve ON ve.id = v.id_vehicule_etat
            WHERE v.id_etablissement = ${req.params.id}
        `;
        db
            .query(query)
            .then(e => res.send(e.rows))
            .catch(e => console.error(e.stack));
    }

    getVehiculeTypeList(req, res, next) {
        const query = `
            SELECT * FROM ${table_type}
        `;
        db
            .query(query)
            .then(e => res.send(e.rows))
            .catch(e => console.error(e.stack));
    }

    async assigneIncidentToVehicule(req, res, next) {
        try {
            console.log("assignment", req.body);
            let value = req.body;
            let result = await db.query(`INSERT INTO ${table_incident_vehicule} (id_incident, id_vehicule, date) VALUES (${value.id_incident}, ${value.id_vehicle}, NOW())`);
            res.send();
        } catch (error) {
            console.log({ error });
            res.send();
        }
    }

    async getAllBusyVehicule(req, res, next) {
        try {
            console.log("busy");
            let result = await db.query(`
            SELECT ${table_incident_vehicule}.id_vehicule,${table_incident_vehicule}.id_incident
            FROM ${table_incident_vehicule}`);
            console.log(result.rows);
            res.send(result.rows);
        } catch (error) {
            console.log({ error });
            res.send({ error })
        }
    }

    newVehicule(req, res, next) {
        const query = `INSERT INTO ${table} (nom, longitude, latitude, id_etablissement, id_vehicule_type, id_vehicule_etat) VALUES ('${req.body.nom}', ${req.body.longitude}, ${req.body.latitude}, ${req.body.id_etablissement}, ${req.body.id_vehicule_type}, 1)`;
        db
            .query(query)
            .then(e => res.send(true))
            .catch(e => console.error(e.stack));
    }

    deleteVehicule(req, res, next) {
        const query = `DELETE FROM ${table} WHERE id = ${req.params.id}`;
        db
            .query(query)
            .then(e => res.send(true))
            .catch(e => console.error(e.stack));
    }
}

module.exports = VehiculeController;