import RockyPlanet from "./RockyPlanet.js"
import GasGiant from "./GasGiant.js"
import IceGiant from "./IceGiant.js"

export default class Planet {
    public static listOfPlanets: Planet[] = []
    public static inventoryCount: number = 2000000000
    public static purchasedPlanets: string[] = []

    private name: string
    size: number
    parentStar: string

    constructor(name: string, size: number, parentStar: string) {
        this.name = name
        this.size = size
        this.parentStar = parentStar
    }

    protected displayPlanet(): void {
        let planetList = document.querySelector('.planet-list')
        let index = 0;
        planetList.innerHTML = '';
        for (let planet of Planet.listOfPlanets) {
            console.log(planet);
            console.log('coreComponents' in planet)
            let newPlanet = document.createElement('div');
            newPlanet.classList.add(index.toString());
            newPlanet.innerHTML = `
            <h1>
                Planet <span class="planet-name">${planet.name}</span> 
                <input type="text" value="${planet.name}" class="name-field" style="font-size:1em; display:none">
                <input type="button" value="Edit" class="name-edit">
                <input type="button" value="OK" class="ok-button" style="display:none">
            </h1>
            <p>Radius: ${planet.size}
            <br>Parent Star: ${planet.parentStar}
            <br>Core Elements: ${'coreComponents' in planet ? (<RockyPlanet>planet).coreComp : ""}
            ${'gases' in planet ? (<GasGiant>planet).gasList : ""}
            ${'fluidElements' in planet ? (<IceGiant>planet).fluids : ""}
            `
            //console.log(newPlanet);
            planetList.appendChild(newPlanet);
            index++;
        }
        let editButtons = document.getElementsByClassName('name-edit');
        for (let button of editButtons) {
            button.addEventListener('click', () => {
                let editField = (<HTMLInputElement>button.previousElementSibling);
                let okButton = (<HTMLInputElement>button.nextElementSibling);
                let prevName = button.previousElementSibling.previousElementSibling;
                console.log(prevName)
                editField.style.display = "inline";
                okButton.style.display = "inline";
                (<HTMLInputElement>button).style.display = "none";
                prevName.textContent = "";
            });
        }
        let updateButtons = document.getElementsByClassName('ok-button');
        for (let button of updateButtons) {
            button.addEventListener('click', () => {
                let parentDiv = button.parentElement.parentElement;
                let planetIndex = parseInt(parentDiv.classList[0]);

                let nameField = (<HTMLInputElement>button.previousElementSibling.previousElementSibling).value;
                console.log(nameField);
                //console.log(Planet.listOfPlanets[planetIndex])

                Planet.listOfPlanets[planetIndex].planetName = nameField;
                this.displayPlanet();
            });
        }
    }

    public set planetName(newName:string){
        this.name = newName;
    }

}