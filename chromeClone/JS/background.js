const images = ["hawaii.jpeg", "aurora.jpeg", "forest.jpeg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const body = document.body;
body.style.backgroundImage = `url('../img/${chosenImage}')`;
body.style.backgroundSize = "cover";
body.style.backgroundPosition = "center";
body.style.backgroundRepeat = "no-repeat";
