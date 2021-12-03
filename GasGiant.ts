import  Planet  from "./Planet.js";

export default class GasGiant extends Planet { // inheritance
    gases:string[]
    constructor(name:string, size:number, parentStar:string, gases:string[]) {
        super(name, size, parentStar) 
        this.gases = gases;
    }
    // receive a sample gas mixture - private function

    public display() {
        this.displayPlanet()
    }
    public get gasList():string{
        return this.gases.join(' , ')
    }
}