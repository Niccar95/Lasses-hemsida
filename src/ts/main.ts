import axios from "axios";
import "../scss/style.scss";
import { IDogAPIdata } from "./Models/IDogAPIdata";
import { IBoredResponse } from "./Models/IBoredResponse";

const aboutLasse = document.getElementById("aboutLasse") as HTMLSelectElement;

const aboutMeHeader = document.createElement("h3");
aboutMeHeader.innerHTML = `Om mig`;
const Ptag = document.createElement("p");

Ptag.innerHTML = `Hej! Lasse heter jag och är (...) år. 
Jag älskar hundar, mat och vin.`;

aboutLasse.appendChild(aboutMeHeader);
aboutLasse.appendChild(Ptag);

const response = await axios.get<IdogResponse>(
  "https://dog.ceo/api/breeds/image/random/3"
);
console.log(response.data);

const imageContainer = document.getElementById("imageContainer");
response.data.message.forEach((dogImg) => {
  console.log(dogImg);
  const image = document.createElement("img");
  imageContainer?.appendChild(image);
  image.src = dogImg;
  image.alt = "Picture of dog";
  image.className = "dogImage";
});

//===================DOG FACT QUOTE========================== LASSE FAVORIT Retriver och Boxer
//Hämta DOG API Facts
const responseDog = await axios.get<IDogAPIdata>(
  "https://dogapi.dog/api/v2/facts?limit=10"
);
//Få fram fact-quote
const data = responseDog.data.data[0].attributes.body;

//Skapa Container för fakta quoten
const factContainer = document.getElementById(
  "dogFactContainer"
) as HTMLDivElement;
//Funktion för att skapa html
const createHtmlForDogFact = (theData: string) => {
  const factText = document.createElement("h3");
  factText.innerHTML = theData;
  factText.setAttribute("id", "factTextID");
  factContainer.appendChild(factText);
};
//anropa funktionen med parameter för att få infon till API:et
createHtmlForDogFact(data);
//===========================================================

const fetchData = async (): Promise<string> => {
  const response = await axios.get<IBoredResponse>(
    "http://www.boredapi.com/api/activity?type=recreational"
  );

  console.log(response.data.activity);

  return response.data.activity;
};

fetchData();
