"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iBases_1 = require("../iBases");
describe('Orbital Strength works', () => {
    let bondPTest;
    it('OrbitalStrength class works', () => {
        bondPTest = new iBases_1.OrbitalStrength(1);
        console.log(bondPTest);
        expect(bondPTest).toBeTruthy();
    });
    it("getStrength works", () => {
        console.log(bondPTest.Strength());
        expect(bondPTest.Strength()).toEqual(1);
    });
    it("getOrbitalDistribution works", () => {
        console.log(bondPTest.OrbitalDistribution());
        expect(bondPTest.OrbitalDistribution()).toEqual("");
    });
});
