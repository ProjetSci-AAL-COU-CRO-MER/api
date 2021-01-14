const db = require('../../config/db.emergency');
const table = 'capteur';

class CapteurController {

    constructor() { }

    getAll(req, res, next) {
        db
            .query(`SELECT * FROM ${table}`)
            .then(e => res.send(e.rows))
            .catch(e => console.error(e.stack));
    }

    getOne(req, res, next) {
        db
            .query(`SELECT * FROM ${table} where ${req.body.id_capteur} = id`)
            .then(e => res.send(e.rows[0]))
            .catch(e => console.error(e.stack));
    }

    async updateCapteurs(req, res, next) {
        try {
            for (const iterator of req.body) {
                await db.query(`UPDATE ${table}
                SET intensite = ${iterator.value}
                WHERE ${table}.id = ${iterator.id}`);
            }
            res.send();
        } catch (error) {
            console.log(error);
            res.send({ error: error.message })
        }
    }

    setIntensite(req, res, next) {
        console.log(req.body);
        db.
        query(`UPDATE ${table} SET 'intensite' = ${req.body.value} WHERE longitude = ${req.body.longitude} AND latitude = ${req.body.lattitude}`)
        .then(e => res.send(e.rows[0]))
        .catch(e => console.error(e.stack));
    }
}

module.exports = CapteurController;