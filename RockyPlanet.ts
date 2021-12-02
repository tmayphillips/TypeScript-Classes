import  Planet  from "./Planet.js";

export default class RockyPlanet extends Planet {
    coreComponents:string[]
    constructor(name:string, size:number, parentStar:string, coreComponents:string[]) {
        super(name, size, parentStar) 
        this.coreComponents = coreComponents;
    }

    public display() {
        this.displayPlanet()
    }
}
