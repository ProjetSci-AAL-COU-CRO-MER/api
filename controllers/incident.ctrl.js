const { MainController } = require('../controllers/mainController/MainController');
const table = 'incident';
const table_type = 'incident_type';


class IncidentController extends MainController {

    constructor(path) {
        super(path);
    }

    async getAll(req, res, next) {
        try {
            let result = await this.db.query(`SELECT * FROM ${table}`)
            res.send({ result: result.rows })
        } catch (error) {
            res.send({ error: error.message })
        }
    }

    getOne(req, res, next) {
        console.log(req.query);
    }

    async createOne(req, res, next) {
        try {
            let message = req.body;
            let { long: longitude, lat: latitude, type, intensity } = message;
            let result = await this.db.query(`SELECT * FROM ${table_type} WHERE code='${type}'`);
            let typeRows = result.rows;
            if (typeRows.length === 0) {
                throw new Error("Your type does not exist");
            }
            let id_type = typeRows[0].id;
            result = await this.db.query(`INSERT INTO ${table} (longitude, latitude, intensite, id_incident_type) 
            VALUES (${longitude}, ${latitude}, ${intensity}, ${id_type}) RETURNING *`);
            res.send({ result: result.rows })
        } catch (error) {
            res.send({ error: error.message })
        }
    }

    async deleteAll(req, res, next) {
        try {
            let result = await this.db.query(`TRUNCATE TABLE ${table}`);
            res.send({ result: result.rows });
        } catch (error) {
            res.send({ error: error.message })
        }
    }
}

module.exports = IncidentController;