const renderDestinatinations = () => {
  const main = document.querySelector(".main-container-moon");

  const destionationsContainer = createDestinations(destinations);
  main.appendChild(destionationsContainer);
};

const createDestinations = (destinations) => {
  const section = document.createElement("section");
  const img = document.createElement("img");
  const divButtons = document.createElement("div");
  const btnMoon = document.createElement("button");
  const btnMars = document.createElement("button");
  const btnEuropa = document.createElement("button");
  const btnTitan = document.createElement("button");
  const destinationsContent = document.createElement("div");
  const h1 = document.createElement("h1");
  const description = document.createElement("p");
  const hr = document.createElement("hr");
  const more_infos = document.createElement("div");
  const divFirstInfo = document.createElement("div");
  const divSecundInfo = document.createElement("div");
  const paragraphFisrtInfo = document.createElement("p");
  const titleInfo = document.createElement("h2");
  const paragraphSecundInfo = document.createElement("p");
  const titleSecundInfo = document.createElement("h2");
  const divButtonsContainer = document.createElement("div");
  const hrDestinations = document.createElement("hr");

  section.classList.add("content");
  img.src = destinations[0].image;
  img.classList.add("destination-image");
  btnMoon.innerText = "MOON";
  btnMars.innerText = "MARS";
  btnEuropa.innerText = "EUROPA";
  btnTitan.innerHTML = "TITAN";
  destinationsContent.classList.add("div-destination-content");
  h1.innerText = destinations[0].title;
  h1.classList.add("destination-title");
  divButtons.classList.add("div-buttons");

  description.innerText = destinations[0].description;
  description.classList.add("destination-description");
  more_infos.classList.add("div-more-infos");
  paragraphFisrtInfo.innerText = destinations[0].more_infos[0].paragraph;
  paragraphFisrtInfo.classList.add("first-text-info");
  titleInfo.innerText = destinations[0].more_infos[0].title;
  titleInfo.classList.add("first-title-info");
  paragraphSecundInfo.innerText = destinations[0].more_infos[1].paragraph;
  paragraphSecundInfo.classList.add("secund-title-info");
  titleSecundInfo.innerText = destinations[0].more_infos[1].title;
  titleSecundInfo.classList.add("secund-text-info");
  divButtonsContainer.classList.add("div-buttons-container");
  hrDestinations.classList.add("hr-destination");

  btnMars.addEventListener("click", () => {
    img.src = destinations[1].image;
    h1.innerText = destinations[1].title;
    description.innerText = destinations[1].description;
    paragraphFisrtInfo.innerText = destinations[1].more_infos[0].paragraph;
    titleInfo.innerText = destinations[1].more_infos[0].title;
    paragraphSecundInfo.innerText = destinations[1].more_infos[1].paragraph;
    titleSecundInfo.innerText = destinations[1].more_infos[1].title;
    hrDestinations.style.marginLeft = "60px";
    let width = window.matchMedia("(min-width: 800px)");
    if (width.matches) {
      hrDestinations.style.marginLeft = "70px";
    }
  });
  btnEuropa.addEventListener("click", () => {
    img.src = destinations[2].image;
    h1.innerText = destinations[2].title;
    description.innerText = destinations[2].description;
    paragraphFisrtInfo.innerText = destinations[2].more_infos[0].paragraph;
    titleInfo.innerText = destinations[2].more_infos[0].title;
    paragraphSecundInfo.innerText = destinations[2].more_infos[1].paragraph;
    titleSecundInfo.innerText = destinations[2].more_infos[1].title;
    hrDestinations.style.marginLeft = "115px";
    let width = window.matchMedia("(min-width: 800px)");
    if (width.matches) {
      hrDestinations.style.marginLeft = "135px";
    }
  });
  btnTitan.addEventListener("click", () => {
    img.src = destinations[3].image;
    h1.innerText = destinations[3].title;
    description.innerText = destinations[3].description;
    titleInfo.innerText = destinations[3].more_infos[0].title;
    titleSecundInfo.innerText = destinations[3].more_infos[1].title;
    hrDestinations.style.marginLeft = "175px";
    let width = window.matchMedia("(min-width: 800px)");
    if (width.matches) {
      hrDestinations.style.marginLeft = "205px";
    }
  });
  btnMoon.addEventListener("click", () => {
    img.src = destinations[0].image;
    h1.innerText = destinations[0].title;
    description.innerText = destinations[0].description;
    titleInfo.innerText = destinations[0].more_infos[0].title;
    titleSecundInfo.innerText = destinations[0].more_infos[1].title;
    hrDestinations.style.marginLeft = "5px";
    let width = window.matchMedia("(min-width: 800px)");
    if (width.matches) {
      hrDestinations.style.marginLeft = "10px";
    }
  });

  divButtons.append(btnMoon, btnMars, btnEuropa, btnTitan);
  divButtonsContainer.append(divButtons, hrDestinations);
  destinationsContent.append(
    divButtonsContainer,
    h1,
    description,
    hr,
    more_infos
  );
  more_infos.append(divFirstInfo, divSecundInfo);
  divFirstInfo.append(paragraphFisrtInfo, titleInfo);
  divSecundInfo.append(paragraphSecundInfo, titleSecundInfo);
  section.append(img, destinationsContent);

  return section;
};

renderDestinatinations();

const transitionPages = () => {
  const btnCrew = document.querySelector(".btn-crew");
  const btnHome = document.querySelector(".btn-home");
  const btnTechnology = document.querySelector(".btn-Technology");

  btnCrew.addEventListener("click", () => {
    window.location.replace("../../../pages/crew/crew.html");
  });

  btnHome.addEventListener("click", () => {
    window.location.replace("/");
  });

  btnTechnology.addEventListener("click", () => {
    window.location.replace("/pages/technology/technology-vehicle.html");
  });
};
transitionPages();
