import Planet from "./Planet.js";
export default class RockyPlanet extends Planet {
    constructor(name, size, parentStar, coreComponents) {
        super(name, size, parentStar);
        this.coreComponents = coreComponents;
    }
    display() {
        this.displayPlanet();
    }
}
