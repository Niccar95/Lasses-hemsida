import axios from "axios";
import axios from "axios";
import "../scss/style.scss";
import { IDogAPIdata } from "./Models/IDogAPIdata";

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

const imageContainer = document.getElementById("imageContainer");
response.data.message.forEach((dogImg) => {
  console.log(dogImg);
  const newContainer = document.createElement("div") as HTMLDivElement;
  const image = document.createElement("img");
  imageContainer?.appendChild(image);
  imageContainer?.appendChild(newContainer);
  image.src = dogImg;
  image.alt = "Picture of dog";
  image.className = "dogImage";
});

//===================DOG FACT QUOTE==========================
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
//===========================================================
