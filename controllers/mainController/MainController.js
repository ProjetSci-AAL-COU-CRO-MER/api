const main = require("../../index");

class MainController {

    db;

    constructor(path) {
        if (path === undefined) {
            //do nothing
        }
        else if (path == main.routeEmergency) {
            this.db = require('../../config/db.emergency');

        }
        else if (path == main.routeSimulator) {
            this.db = require('../../config/db.simulator');
        }
        else {
            console.log(`Unknow route ${path} !`);
        }
    }

}


module.exports = { MainController };