const db = require('../../config/db.emergency');
const table = 'incident';
const table_type = 'incident_type';
const table_incident_vehicule = 'incident_vehicule';

class IncidentController {

    constructor() { }

    getAll(req, res, next) {
        db
            .query(`SELECT ${table}.*,${table_type}.code,${table_type}.libelle  FROM ${table} LEFT JOIN ${table_type} ON ${table}.id_incident_type = ${table_type}.id`)
             
            .then(e => res.send(e.rows))
            .catch(e => console.error(e.stack));
    }


    async createOne(req, res, next) {
        try {
            let message = req.body;
            let { longitude, latitude, type, intensite } = message;
            let result = await db.query(`SELECT * FROM ${table_type} WHERE code='${type}'`);
            let typeRows = result.rows;
            if (typeRows.length === 0) {
                throw new Error("Your type does not exist");
            }
            let id_type = typeRows[0].id;
            result = await db.query(`INSERT INTO ${table} (longitude, latitude, intensite, id_incident_type) 
            VALUES (${longitude}, ${latitude}, ${intensite}, ${id_type}) RETURNING *`);
            res.send(result.rows)
        } catch (error) {
            res.send({ error: error.message })
        }
    }

    async deleteExctinct(req, res, next) {
        try {
            let result = await db.query(`
            DELETE FROM ${table_incident_vehicule} WHERE ${table_incident_vehicule}.id_incident IN (SELECT ${table}.id FROM ${table});
            DELETE FROM ${table};
            `);
            console.log({ delete: result })
            // for (const iterator of result.rows) {
            //     db.query(`
            //     DELETE FROM ${table_incident_vehicule} WHERE ${table_incident_vehicule}.id_incident = ${iterator.id}
            //     `);
            // }
            res.send();
        } catch (error) {
            res.send({ error: error.message });
        }
    }

    updateIncidents(req, res, next) {
        try {
            for (const iterator of req.body) {
                db.query(`UPDATE ${table}
                SET latitude = ${iterator.latitude}, longitude = ${iterator.longitude},intensite = ${iterator.intensite}
                WHERE ${table}.id = ${iterator.id}`)
            }
            res.send();
        } catch (error) {
            res.send({ error: error.message })
        }
    }

    async deleteAll(req, res, next) {
        try {
            let result = await db.query(`TRUNCATE TABLE ${table} cascade`);
            res.send(result.rows);
        } catch (error) {
            res.send({ error: error.message })
        }
    }

    getOne(req, res, next) {
        db
            .query(`SELECT * FROM ${table} where ${req.body.id_incident} = id`)
            .then(e => res.send(e.rows[0]))
            .catch(e => console.error(e.stack));
    }
}

module.exports = IncidentController;