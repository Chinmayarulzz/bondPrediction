import { OrbitalStrength } from "../iBases";

describe('Orbital Strength works',() => {
    
    let bondPTest: any;

    it('OrbitalStrength class works',() => {
        bondPTest = new OrbitalStrength(1);
        console.log(bondPTest);
        expect(bondPTest).toBeTruthy();
    });

    it("getStrength works",() => {
        console.log(bondPTest.Strength());
        expect(bondPTest.Strength()).toEqual(1);
    });

    it("getOrbitalDistribution works", () => {
        console.log(bondPTest.OrbitalDistribution());
        expect(bondPTest.OrbitalDistribution()).toEqual("");
    });

})