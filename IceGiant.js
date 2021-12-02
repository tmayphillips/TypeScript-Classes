import Planet from "./Planet.js";
export default class IceGiant extends Planet {
    constructor(name, size, parentStar, fluidElements) {
        super(name, size, parentStar);
        this.fluidElements = fluidElements;
    }
    display() {
        this.displayPlanet();
    }
}
