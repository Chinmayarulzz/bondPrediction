import { Logger } from "../logger/Logger";

export class OrbitalStrength{

    private strength: number;
    private atomicNumber: number;

    constructor(atomicNumber: number = 0){
        this.atomicNumber = atomicNumber;
        this.strength = 1;
    }

    Strength(): number{
        
        Logger.log({
            "Strength": this.strength
        });
        return this.strength || -1;
    }

    OrbitalDistribution(): String{
        
        let orbitalDistribution: String = "";

        Logger.log({
            "Orbital Distribution": orbitalDistribution
        })
        return orbitalDistribution;
    }

}