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
            let newPlanet = document.createElement('div');
            newPlanet.innerHTML = `
            <h1>Planet ${planet.name}</h1>
            <p>Radius: ${planet.size}
            <br>Parent Star: ${planet.parentStar}
            `
            planetList.appendChild(newPlanet);
        }
    }
}