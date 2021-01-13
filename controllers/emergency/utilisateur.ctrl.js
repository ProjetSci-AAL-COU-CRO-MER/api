const db = require('../../config/db.emergency');
const jwt = require('jsonwebtoken');
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
        .query(`SELECT id, nom, prenom FROM ${table} where id = 1`)
        .then(e => res.send(e.rows[0]))
        .catch(e => console.error(e.stack));
    }

    login(req, res) {
        db
        .query(`SELECT id, nom, prenom FROM ${table} where password = '${req.body.passwordHached}'`)
        .then(e => {
            if(e.rows[0]) {
                const token = jwt.sign({nom: e.rows[0].nom}, 'lamasalt');
                res.send({pass: true, token: token});
            } else {
                res.send({pass: false, token: null});
            }
        })
        .catch(e => console.error(e.stack));
    }
}

module.exports = UtilisateurController;