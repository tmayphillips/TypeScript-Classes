export default class Planet {
    constructor(name, size, parentStar) {
        this.name = name;
        this.size = size;
        this.parentStar = parentStar;
    }
    displayPlanet() {
        let planetList = document.querySelector('.planet-list');
        planetList.innerHTML = '';
        for (let planet of Planet.listOfPlanets) {
            let newPlanet = document.createElement('div');
            newPlanet.innerHTML = `
            <h1>Planet ${planet.name}</h1>
            <p>Radius: ${planet.size}
            <br>Parent Star: ${planet.parentStar}
            `;
            planetList.appendChild(newPlanet);
        }
    }
}
Planet.listOfPlanets = [];
Planet.inventoryCount = 2000000000;
Planet.purchasedPlanets = [];
