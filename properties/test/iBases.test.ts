import { OrbitalStrength } from "../iBases";

describe('Orbital Strength works',() => {
    
    let bondPTest: any;

    it('OrbitalStrength class works',() => {
        bondPTest = new OrbitalStrength(1);
        console.log(bondPTest);
        expect(bondPTest).toBeTruthy();
    });

    it("getStrength works",() => {
        expect(bondPTest.Strength()).toEqual(1);
    });

    it("getOrbitalDistribution works", () => {
        expect(bondPTest.OrbitalDistribution()).toEqual("");
    });

})