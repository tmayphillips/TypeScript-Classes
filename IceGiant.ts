import  Planet from "./Planet.js";

export default class IceGiant extends Planet {
    fluidElements:string[];
    constructor(name:string, size:number, parentStar:string, fluidElements:string[]) {
        super(name, size, parentStar) 
        this.fluidElements = fluidElements;
    }

    public display() {
        this.displayPlanet()
    }
}