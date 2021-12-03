import  Planet  from "./Planet.js";

export default class RockyPlanet extends Planet {
    public coreComponents:string[]
    constructor(name:string, size:number, parentStar:string, coreComponents:string[]) {
        super(name, size, parentStar) 
        this.coreComponents = coreComponents;
    }

    public display() {
        this.displayPlanet()
    }

    public get coreComp():string{
        return this.coreComponents.join(', ')
    }
}
