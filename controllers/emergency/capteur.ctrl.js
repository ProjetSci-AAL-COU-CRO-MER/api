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
        db.
            query(`UPDATE ${table} SET 'intensite' = ${req.params.int} WHERE longitude = ${req.params.long} AND latitude = ${req.params.lat}`)
            .then(e => res.send(e.rows[0]))
            .catch(e => console.error(e.stack));
    }
}

module.exports = CapteurController;