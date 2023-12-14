import '../scss/style.scss'


const aboutLasse = document.getElementById('aboutLasse') as HTMLSelectElement;

const aboutMeHeader = document.createElement('h3');
aboutMeHeader.innerHTML = `Om mig`;
aboutMeHeader.className = 'aboutMe'
const Ptag = document.createElement('p');

Ptag.innerHTML = `Hej! Lasse heter jag och är (...) år. 
Jag älskar hundar, mat och vin!`

aboutLasse.appendChild(aboutMeHeader)
aboutLasse.appendChild(Ptag)
