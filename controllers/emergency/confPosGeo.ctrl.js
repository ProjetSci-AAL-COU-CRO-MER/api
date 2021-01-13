const db = require('../../config/db.emergency');
const table = 'conf_pos_geo';

class ConfPosGeoController {

    constructor() {}

    get(req, res, next) {
        db
        .query(`SELECT * FROM ${table} WHERE id = 1`)
        .then(e => res.send(e.rows[0]))
        .catch(e => console.error(e.stack));
    }
}

module.exports = ConfPosGeoController;