"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrbitalStrength = void 0;
class OrbitalStrength {
    constructor(atomicNumber = 0) {
        this.atomicNumber = atomicNumber;
        this.strength = 1;
    }
    Strength() {
        return this.strength || -1;
    }
    OrbitalDistribution() {
        return "";
    }
}
exports.OrbitalStrength = OrbitalStrength;
