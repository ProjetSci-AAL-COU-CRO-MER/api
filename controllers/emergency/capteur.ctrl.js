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
            let string = "";
            for (let index = 0; index < req.body.length; index++) {
                const element = req.body[index];
                string += `(${element.id},${element.latitude},${element.longitude},${element.value})`;
                if (index !== req.body.length - 1) {
                    string += ",";
                }
            }
            // console.log(string);

            let result = await db.query(`INSERT INTO ${table} (id, latitude, longitude, intensite)
            VALUES ${string}
            ON CONFLICT (id) DO UPDATE 
            SET latitude = excluded.latitude, 
            longitude = excluded.longitude,
            intensite = excluded.intensite;`)
            console.log(result);
            res.send();
        } catch (error) {
            console.log(error);
            res.send({ error: error.message })
        }
    }

    setIntensite(req, res, next) {
        console.log(req.body);
        db.
<<<<<<< Updated upstream
            query(`UPDATE ${table} SET 'intensite' = ${req.body.value} WHERE longitude = ${req.body.longitude} AND latitude = ${req.body.lattitude}`)
            .then(e => res.send(e.rows[0]))
            .catch(e => console.error(e.stack));
=======
        query(`UPDATE ${table} SET 'intensite' = ${req.body.value} WHERE longitude = ${req.body.longitude} AND latitude = ${req.body.lattitude}`)
        .then(e => res.send(true))
        .catch(e => console.error(e.stack));
>>>>>>> Stashed changes
    }
}

module.exports = CapteurController;