"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrbitalStrength = void 0;
const Logger_1 = require("../logger/Logger");
class OrbitalStrength {
    constructor(atomicNumber = 0) {
        this.atomicNumber = atomicNumber;
        this.strength = 1;
    }
    Strength() {
        Logger_1.Logger.log({
            "Strength": this.strength
        });
        return this.strength || -1;
    }
    OrbitalDistribution() {
        let orbitalDistribution = "";
        Logger_1.Logger.log({
            "Orbital Distribution": orbitalDistribution
        });
        return orbitalDistribution;
    }
}
exports.OrbitalStrength = OrbitalStrength;
