const renderModalButtons = () => {
  const body = document.querySelector("body");

  const buttons = createModalButtons();

  body.appendChild(buttons);
  closeModal();
};

const createModalButtons = () => {
  const section = document.createElement("section");
  const home = document.createElement("button");
  const destinations = document.createElement("button");
  const crew = document.createElement("button");
  const technology = document.createElement("button");
  const divButtons = document.createElement("div");
  const btnClose = document.createElement("img");
  const divbtn1 = document.createElement("div");
  const divbtn2 = document.createElement("div");
  const divbtn3 = document.createElement("div");
  const divbtn4 = document.createElement("div");
  const spanDivBtn1 = document.createElement("span");
  const spanDivBtn2 = document.createElement("span");
  const spanDivBtn3 = document.createElement("span");
  const spanDivBtn4 = document.createElement("span");

  home.innerText = "HOME";
  destinations.innerText = "DESTINATION";
  crew.innerText = "CREW";
  technology.innerText = "TECHNOLOGY";
  btnClose.src = "../assets/shared/icon-close.svg";
  spanDivBtn1.innerText = "00";
  spanDivBtn2.innerText = "01";
  spanDivBtn3.innerText = "02";
  spanDivBtn4.innerText = "03";

  section.classList.add("modal-container");
  divButtons.classList.add("div-btns-header");
  home.classList.add("btn-home");
  destinations.classList.add("btn-destination");
  crew.classList.add("btn-crew");
  technology.classList.add("btn-Technology");
  btnClose.classList.add("close-btn");

  destinations.addEventListener("click", () => {
    window.location.replace("../pages/destination/destinations.html");
  });

  crew.addEventListener("click", () => {
    window.location.replace("/pages/crew/crew.html");
  });

  technology.addEventListener("click", () => {
    window.location.replace("/pages/technology/technology-vehicle.html");
  });

  divbtn1.append(spanDivBtn1, home);
  divbtn2.append(spanDivBtn2, destinations);
  divbtn3.append(spanDivBtn3, crew);
  divbtn4.append(spanDivBtn4, technology);
  divButtons.append(divbtn1, divbtn2, divbtn3, divbtn4);
  section.append(btnClose, divButtons);

  return section;
};

const renderButtons = () => {
  const btnSetings = document.querySelector(".image-setings");

  btnSetings.addEventListener("click", () => {
    renderModalButtons();
  });
};

const closeModal = () => {
  const closeBtn = document.querySelector(".close-btn");
  const modalContainer = document.querySelector(".modal-container");

  closeBtn.addEventListener("click", () => {
    modalContainer.remove();
  });
};

renderButtons();
