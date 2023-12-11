import axios from 'axios'
import '../scss/style.scss'


const aboutLasse = document.getElementById('aboutLasse') as HTMLSelectElement;

const aboutMeHeader = document.createElement('h3');
aboutMeHeader.innerHTML = `Om mig`;
const Ptag = document.createElement('p');

Ptag.innerHTML = `Hej! Lasse heter jag och är (...) år. 
Jag älskar hundar, mat och vin.`

aboutLasse.appendChild(aboutMeHeader)
aboutLasse.appendChild(Ptag)

const response = await axios.get<IdogResponse>("https://dog.ceo/api/breeds/image/random/3");

const imageContainer = document.getElementById("imageContainer");
response.data.message.forEach((dogImg => {
  console.log(dogImg)
  const image = document.createElement("img");
  imageContainer?.appendChild(image);
  image.src = dogImg;
  image.alt = "Picture of dog";
  image.className = "dogImage";

}))

