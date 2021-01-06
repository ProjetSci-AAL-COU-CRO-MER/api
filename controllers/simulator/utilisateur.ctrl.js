const db = require('../../config/db.simulator');
const table = 'utilisateur';

class UtilisateurController {

    constructor() {}

    getAll(req, res, next) {
        db
        .query(`SELECT * FROM ${table}`)
        .then(e => res.send(e.rows))
        .catch(e => console.error(e.stack));
    }

    getInstance(req, res, next) {
        db
        .query(`SELECT * FROM ${table} where id = 1`)
        .then(e => res.send(e.rows[0]))
        .catch(e => console.error(e.stack));
    }
}

module.exports = UtilisateurController;