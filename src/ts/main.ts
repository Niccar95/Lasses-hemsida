import axios from 'axios'
import '../scss/style.scss'

const response = await axios.get<IdogResponse>("https://dog.ceo/api/breeds/image/random/3");

const imageContainer = document.getElementById("imageContainer");
response.data.message.forEach((dogImg => {
  console.log(dogImg)
  const newContainer = document.createElement("div") as HTMLDivElement;
  const image = document.createElement("img");
  imageContainer?.appendChild(image);
  imageContainer?.appendChild(newContainer);
  image.src = dogImg;
  image.alt = "Picture of dog";
  image.className = "dogImage";

}))

