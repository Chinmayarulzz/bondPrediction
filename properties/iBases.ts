export class OrbitalStrength{

    private strength: number;
    private atomicNumber: number;

    constructor(atomicNumber: number = 0){
        this.atomicNumber = atomicNumber;
        this.strength = 1;
    }

    Strength(): number{
        
        return this.strength || -1;
    }

    OrbitalDistribution(): String{
        
        return "";
    }

}