const transitionsPages = () => {
  const btnDestination = document.querySelector(".btn-destination");
  const btnHome = document.querySelector(".btn-home");
  btnTechnology = document.querySelector(".btn-Technology");

  btnDestination.addEventListener("click", () => {
    window.location.replace("/pages/destination/destinations.html");
  });

  btnHome.addEventListener("click", () => {
    window.location.replace("/");
  });

  btnTechnology.addEventListener("click", () => {
    window.location.replace("/pages/technology/technology-vehicle.html");
  });
};

transitionsPages();

const renderCrews = () => {
  const main = document.querySelector(".main-container");

  const cardCrew = createCrews(crews);
  main.appendChild(cardCrew);
};

const createCrews = (crews) => {
  const section = document.createElement("section");
  const divText = document.createElement("div");
  const divButtons = document.createElement("div");
  const office = document.createElement("h3");
  const name = document.createElement("h1");
  const description = document.createElement("p");
  const img = document.createElement("img");
  const firstBtn = document.createElement("button");
  const secundBtn = document.createElement("button");
  const threeBtn = document.createElement("button");
  const fourBtn = document.createElement("button");

  section.classList.add("content-crews");
  divText.classList.add("div-text");
  divButtons.classList.add("div-btns");
  firstBtn.classList.add("first-btn");
  secundBtn.classList.add("secund-btn");
  threeBtn.classList.add("three-btn");
  fourBtn.classList.add("four-btn");
  office.classList.add("office");
  name.classList.add("name-crew");
  description.classList.add("description-crew");
  img.classList.add("image-crew");

  office.innerText = crews[0].office;
  name.innerText = crews[0].name;
  description.innerText = crews[0].description;
  img.src = crews[0].image;

  firstBtn.addEventListener("click", () => {
    office.innerText = crews[0].office;
    name.innerText = crews[0].name;
    description.innerText = crews[0].description;
    img.src = crews[0].image;
    secundBtn.style.backgroundColor = "#979797";
    threeBtn.style.backgroundColor = "#979797";
    fourBtn.style.backgroundColor = "#979797";
    firstBtn.style.backgroundColor = "#fff";
  });

  secundBtn.addEventListener("click", () => {
    office.innerText = crews[1].office;
    name.innerText = crews[1].name;
    description.innerText = crews[1].description;
    img.src = crews[1].image;
    firstBtn.style.backgroundColor = "#979797";
    threeBtn.style.backgroundColor = "#979797";
    fourBtn.style.backgroundColor = "#979797";
    secundBtn.style.backgroundColor = "#fff";
  });

  threeBtn.addEventListener("click", () => {
    office.innerText = crews[2].office;
    name.innerText = crews[2].name;
    description.innerText = crews[2].description;
    img.src = crews[2].image;
    firstBtn.style.backgroundColor = "#979797";
    secundBtn.style.backgroundColor = "#979797";
    fourBtn.style.backgroundColor = "#979797";
    threeBtn.style.backgroundColor = "#fff";
  });

  fourBtn.addEventListener("click", () => {
    office.innerText = crews[3].office;
    name.innerText = crews[3].name;
    description.innerText = crews[3].description;
    img.src = crews[3].image;
    firstBtn.style.backgroundColor = "#979797";
    secundBtn.style.backgroundColor = "#979797";
    threeBtn.style.backgroundColor = "#979797";
    fourBtn.style.backgroundColor = "#fff";
  });

  divButtons.append(firstBtn, secundBtn, threeBtn, fourBtn);
  divText.append(office, name, description, divButtons);
  section.append(divText, img);

  return section;
};

renderCrews();
