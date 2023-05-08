const transitionsPages = () => {
  const btnDestination = document.querySelector(".btn-destination");
  const btnHome = document.querySelector(".btn-home");
  const btnCrew = document.querySelector(".btn-crew");
  const btnTechnology = document.querySelector(".btn-Technology");

  btnHome.addEventListener("click", () => {
    window.location.replace("/");
  });

  btnDestination.addEventListener("click", () => {
    window.location.replace("../pages/destination/destinations.html");
  });
  btnCrew.addEventListener("click", () => {
    window.location.replace("/pages/crew/crew.html");
  });

  btnTechnology.addEventListener("click", () => {
    console.log("teste");
    window.location.replace("/pages/technology/technology-vehicle.html");
  });
};
transitionsPages();
