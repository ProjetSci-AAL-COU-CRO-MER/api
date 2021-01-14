const db = require('../../config/db.simulator');
const table = 'incident';
const table_type = 'incident_type';


class IncidentController {

    constructor() { }

    async getAll(req, res, next) {
        try {
            let result = await db.query(`SELECT * FROM ${table}`)
            res.send(result.rows)
        } catch (error) {
            res.send({ error: error.message })
        }
    }

    getOne(req, res, next) {
        console.log(req.query);
    }

    getAllFeux(req, res, next) {
        try {
            query = `
                SELECT * FROM ${table} i
                LEFT JOIN ${table_type} it ON i.id_incident_type = it.id
                WHERE it.code = 'INA' OR it.code = 'INB' OR it.code = 'INC' OR it.code = 'IND' OR it.code = 'INE' OR it.code = 'INF'
            `
            db
            .query(query)
            .then(e => res.send(e.rows))
            .catch(e => console.error(e.stack));
        } catch (error) {
            res.send({ error: error.message })
        }
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

    async deleteAll(req, res, next) {
        try {
            let result = await db.query(`TRUNCATE TABLE ${table}`);
            res.send(result.rows);
        } catch (error) {
            res.send({ error: error.message })
        }
    }
}

module.exports = IncidentController;