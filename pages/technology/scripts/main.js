const renderTechnologies = () => {
  const main = document.querySelector(".main-container");

  const newTechnologies = createTechnologies();
  main.appendChild(newTechnologies);
};

const createTechnologies = () => {
  const section = document.createElement("section");
  const img = document.createElement("img");
  const divButons = document.createElement("div");
  const firstBtn = document.createElement("button");
  const secundBtn = document.createElement("button");
  const threeBtn = document.createElement("button");
  const divText = document.createElement("div");
  const phrase = document.createElement("span");
  const name = document.createElement("h2");
  const description = document.createElement("p");
  const divContentContainer = document.createElement("div");
  let width = window.matchMedia("(min-width: 800px)");

  if (!width.matches) {
    img.src = technologies[0].image;
  } else {
    img.src = "../../../assets/technology/image-launch-vehicle-portrait.jpg";
  }
  phrase.innerText = technologies[0].phrase;
  name.innerText = technologies[0].name;
  description.innerText = technologies[0].description;
  firstBtn.innerText = 1;
  secundBtn.innerText = 2;
  threeBtn.innerText = 3;

  section.classList.add("container");
  divButons.classList.add("div-buttons");
  firstBtn.classList.add("btn-one");
  secundBtn.classList.add("btn-two");
  threeBtn.classList.add("btn-three");
  divText.classList.add("div-text");
  divContentContainer.classList.add("div-content");

  firstBtn.addEventListener("click", () => {
    img.src = technologies[0].image;
    phrase.innerText = technologies[0].phrase;
    name.innerText = technologies[0].name;
    description.innerText = technologies[0].description;
    firstBtn.style.backgroundColor = "#fff";
    firstBtn.style.borderColor = "#fff";
    (firstBtn.style.color = "#000"),
      (secundBtn.style.backgroundColor = "transparent");
    (secundBtn.style.color = "#fff"), (secundBtn.style.borderColor = "#4D4D56");
    threeBtn.style.backgroundColor = "transparent";
    threeBtn.style.color = "#fff";
    threeBtn.style.borderColor = "#4D4D56";
    let width = window.matchMedia("(min-width: 800px)");
    if (width.matches) {
      img.src = "../../../assets/technology/image-launch-vehicle-portrait.jpg";
    }
  });

  secundBtn.addEventListener("click", () => {
    img.src = technologies[1].image;
    phrase.innerText = technologies[1].phrase;
    name.innerText = technologies[1].name;
    description.innerText = technologies[1].description;
    firstBtn.style.backgroundColor = "transparent";
    (firstBtn.style.color = "#fff"), (firstBtn.style.borderColor = "#4D4D56");
    secundBtn.style.backgroundColor = "#fff";
    (secundBtn.style.color = "#000"), (secundBtn.style.borderColor = "#fff");
    threeBtn.style.backgroundColor = "transparent";
    threeBtn.style.color = "#fff";
    threeBtn.style.borderColor = "#4D4D56";
    let width = window.matchMedia("(min-width: 800px)");
    if (width.matches) {
      img.src = "../../../assets/technology/image-spaceport-portrait.jpg";
    }
  });

  threeBtn.addEventListener("click", () => {
    img.src = technologies[2].image;
    phrase.innerText = technologies[2].phrase;
    name.innerText = technologies[2].name;
    description.innerText = technologies[2].description;
    firstBtn.style.backgroundColor = "transparent";
    (firstBtn.style.color = "#fff"), (firstBtn.style.borderColor = "#4D4D56");
    secundBtn.style.backgroundColor = "transparent";
    (secundBtn.style.color = "#fff"), (secundBtn.style.borderColor = "#4D4D56");
    threeBtn.style.backgroundColor = "#fff";
    threeBtn.style.color = "#000";
    threeBtn.style.borderColor = "#fff";
    let width = window.matchMedia("(min-width: 800px)");
    if (width.matches) {
      img.src = "../../../assets/technology/image-space-capsule-portrait.jpg";
    }
  });

  divButons.append(firstBtn, secundBtn, threeBtn);
  divText.append(phrase, name, description);
  divContentContainer.append(divButons, divText);
  section.append(img, divContentContainer);

  return section;
};

const transitionsPages = () => {
  const btnHome = document.querySelector(".btn-home");
  const btnDestinations = document.querySelector(".btn-destination");
  const btnCrew = document.querySelector(".btn-crew");

  btnHome.addEventListener("click", () => {
    window.location.replace("/");
  });

  btnDestinations.addEventListener("click", () => {
    window.location.replace("/pages/destination/destinations.html");
  });

  btnCrew.addEventListener("click", () => {
    window.location.replace("/pages/crew/crew.html");
  });
};
transitionsPages();

renderTechnologies();
