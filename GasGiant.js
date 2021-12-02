import Planet from "./Planet.js";
export default class GasGiant extends Planet {
    constructor(name, size, parentStar, gases) {
        super(name, size, parentStar);
        this.gases = gases;
    }
    // receive a sample gas mixture - private function
    display() {
        this.displayPlanet();
    }
}
