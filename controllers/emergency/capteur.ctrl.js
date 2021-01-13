const db = require('../../config/db.emergency');
const table = 'capteur';

class CapteurController {

    constructor() {}

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

    setCapteur(req, res, next) {
        const capteurs = [{"value":0,"lattitude":45.79696613664113,"longitude":4.9193855186348365}, {"value":0,"lattitude":45.81831765431368,"longitude":4.8930614456684305}, {"value":0,"lattitude":45.8223451610719,"longitude":4.882594727413693}, {"value":0,"lattitude":45.79269714693711,"longitude":4.9195992397721335}, {"value":0,"lattitude":45.80144122436369,"longitude":4.925145708387828}, {"value":0,"lattitude":45.79088341556076,"longitude":4.920183199449991}, {"value":0,"lattitude":45.77980443955514,"longitude":4.86591871415076}, {"value":0,"lattitude":45.84858011056466,"longitude":4.883638147438735}, {"value":0,"lattitude":45.822295695745765,"longitude":4.840235796226779}, {"value":0,"lattitude":45.78460939895164,"longitude":4.871315339469218}, {"value":0,"lattitude":45.810131529763474,"longitude":4.838971423953058}, {"value":0,"lattitude":45.82500846913837,"longitude":4.839606612591694}, {"value":0,"lattitude":45.78602135117955,"longitude":4.898523205388967}, {"value":0,"lattitude":45.84470875276031,"longitude":4.840478639895823}, {"value":0,"lattitude":45.77699636482384,"longitude":4.920167361365688}, {"value":0,"lattitude":45.7927266011572,"longitude":4.838249395428692}, {"value":0,"lattitude":45.78479819634008,"longitude":4.872055650406062}, {"value":0,"lattitude":45.80488677982413,"longitude":4.896545569618103}, {"value":0,"lattitude":45.812467944986864,"longitude":4.859233059015196}, {"value":0,"lattitude":45.7676527167058,"longitude":4.847196058290478}, {"value":0,"lattitude":45.82120161854258,"longitude":4.880165818149526}, {"value":0,"lattitude":45.82222319854428,"longitude":4.886842559414174}, {"value":0,"lattitude":45.816291121626904,"longitude":4.859287816573069}, {"value":0,"lattitude":45.77350133521034,"longitude":4.839670533196128}, {"value":0,"lattitude":45.77895647393742,"longitude":4.894075505667105}, {"value":0,"lattitude":45.81555030267597,"longitude":4.857043241936732}, {"value":0,"lattitude":45.799984370551186,"longitude":4.909512214999435}, {"value":0,"lattitude":45.82055105220212,"longitude":4.874361864211972}, {"value":0,"lattitude":45.823997436275924,"longitude":4.842640738228175}, {"value":0,"lattitude":45.83650785072477,"longitude":4.901090452286817}, {"value":0,"lattitude":45.765670184580024,"longitude":4.861858074527893}, {"value":0,"lattitude":45.77758781510538,"longitude":4.88811697791404}, {"value":0,"lattitude":45.848327603723305,"longitude":4.844877542096588}, {"value":0,"lattitude":45.799985967620685,"longitude":4.836913960345606}, {"value":0,"lattitude":45.78475652888067,"longitude":4.908048337258314}, {"value":0,"lattitude":45.78371233433573,"longitude":4.868402659328104}, {"value":0,"lattitude":45.815584630069054,"longitude":4.885051707136539}, {"value":0,"lattitude":45.764860059119336,"longitude":4.900058888181762}, {"value":0,"lattitude":45.829590603418836,"longitude":4.849942922326858}, {"value":0,"lattitude":45.82149509929161,"longitude":4.902511596157422}, {"value":0,"lattitude":45.844098581779846,"longitude":4.919466176629315}, {"value":0,"lattitude":45.82053714940809,"longitude":4.837291142435774}, {"value":0,"lattitude":45.76774775181366,"longitude":4.909829527793188}, {"value":0,"lattitude":45.84764866336999,"longitude":4.881964408509252}, {"value":0,"lattitude":45.79728203620437,"longitude":4.886303005212701}, {"value":0,"lattitude":45.84073996733941,"longitude":4.899504771339683}, {"value":0,"lattitude":45.815861190947366,"longitude":4.853659103770208}, {"value":0,"lattitude":45.85286551339549,"longitude":4.896631856432068}, {"value":0,"lattitude":45.78206102060311,"longitude":4.86858084763313}, {"value":0,"lattitude":45.82853311727608,"longitude":4.915110113032778}, {"value":0,"lattitude":45.84242238270973,"longitude":4.8400173718772255}, {"value":0,"lattitude":45.793247467027314,"longitude":4.864834968346447}, {"value":0,"lattitude":45.84524617344467,"longitude":4.863631001029278}, {"value":0,"lattitude":45.806097700858764,"longitude":4.912868685742008}, {"value":0,"lattitude":45.85051563766185,"longitude":4.8721064491825725}, {"value":0,"lattitude":45.84416969597332,"longitude":4.879273139312043},
{"value":0,"lattitude":45.791764010139595,"longitude":4.844673438990026}, {"value":0,"lattitude":45.814275971158445,"longitude":4.921130673993796}, {"value":0,"lattitude":45.819971526830436,"longitude":4.89886409276364}, {"value":0,"lattitude":45.78411603619163,"longitude":4.896768523723528}]
        for (let el of capteurs) {
            db.query(`INSERT INTO ${table} (latitude, longitude, intensite) VALUES (${el.lattitude}, ${el.longitude}, ${el.value})`)
            .then(e => res.send(e.rows[0]))
            .catch(e => console.error(e.stack));
        }
        db.query(`INSERT INTO vehicule (nom, latitude, longitude, id_etablissement, id_vehicule_type, id_vehicule_etat) VALUES ('CamionA', 45.79696613664113, 4.9193855186348365, 1, 1, 1)`)
        .then(e => res.send(e.rows[0]))
        .catch(e => console.error(e.stack));

        db.query(`INSERT INTO vehicule (nom, latitude, longitude, id_etablissement, id_vehicule_type, id_vehicule_etat) VALUES ('CamionB', 45.81831765431368, 4.9193855186348365, 2, 2, 1)`)
        .then(e => res.send(e.rows[0]))
        .catch(e => console.error(e.stack));

        db.query(`INSERT INTO vehicule (nom, latitude, longitude, id_etablissement, id_vehicule_type, id_vehicule_etat) VALUES ('CamionC', 45.79696613664113, 4.921130673993796, 3, 5, 1)`)
        .then(e => res.send(e.rows[0]))
        .catch(e => console.error(e.stack));
    } 
}

module.exports = CapteurController;