import RockyPlanet from "./RockyPlanet.js"
import GasGiant from "./GasGiant.js"
import IceGiant from "./IceGiant.js"

export default class Planet {
    public static listOfPlanets:Planet[] = []
    public static inventoryCount:number = 2000000000
    public static purchasedPlanets:string[] = []

    name:string
    size:number
    parentStar:string

    constructor(name:string, size:number, parentStar:string) { 
        this.name = name
        this.size = size
        this.parentStar = parentStar
    }

    protected displayPlanet():void {
        let planetList = document.querySelector('.planet-list')
        planetList.innerHTML = '';
        for(let planet of Planet.listOfPlanets){
            console.log(planet);
            console.log('coreComponents' in planet)
            let newPlanet = document.createElement('div');
            newPlanet.innerHTML = `
            <h1>Planet ${planet.name}</h1>
            <p>Radius: ${planet.size}
            <br>Parent Star: ${planet.parentStar}
            <br>Core Elements: ${'coreComponents' in planet ? (<RockyPlanet>planet).coreComp : ""}
            ${'gases' in planet ? (<GasGiant>planet).gasList : ""}
            ${'fluidElements' in planet ? (<IceGiant>planet).fluids : ""}
            `
            //console.log(newPlanet);
            planetList.appendChild(newPlanet);
        }
    }
}