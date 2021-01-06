const db = require('../../config/db.emergency');
const table = 'incident';

class IncidentController {

    constructor() {}

    getAll(req, res, next) {
        db
        .query(`SELECT * FROM ${table}`)
        .then(e => res.send(e.rows))
        .catch(e => console.error(e.stack));
    }

    getOne(req, res, next) {
        db
        .query(`SELECT * FROM ${table} where ${req.body.id_incident} = id`)
        .then(e => res.send(e.rows[0]))
        .catch(e => console.error(e.stack)); 
    }
}

module.exports = IncidentController;