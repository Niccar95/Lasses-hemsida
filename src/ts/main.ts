import axios from "axios";
import "../scss/style.scss";
import { IDogAPIdata } from "./Models/IDogAPIdata";

//Hämta DOG API Facts
const response = await axios.get<IDogAPIdata>(
  "https://dogapi.dog/api/v2/facts?limit=10"
);
//Få fram fact
const data = response.data.data[0].attributes.body;

//Skapa Container för fakta quoten
const factContainer = document.getElementById(
  "dogFactContainer"
) as HTMLDivElement;
//Funktion för att skapa html
const createHtmlForDogFact = (theData: string) => {
  const factText = document.createElement("h3");
  factText.innerHTML = theData;
  factContainer.appendChild(factText);
};
//anropa funktionen med parameter för att få infon till API:et
createHtmlForDogFact(data);
