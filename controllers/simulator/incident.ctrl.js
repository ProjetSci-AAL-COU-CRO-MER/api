const db = require('../../config/db.simulator');
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

    }
}

module.exports = IncidentController;