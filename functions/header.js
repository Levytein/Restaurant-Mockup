import Logo from "../assets/Logo.png";

const headerDiv = (() => {
  const header = document.createElement("div");
  header.id = "header";

 

  const navigationContainer = document.createElement("div");
  navigationContainer.id = 'navBar';

  const logoContainer = document.createElement("div");
  const headerLogo = document.createElement("img");
  headerLogo.src = Logo;
  headerLogo.id = "header-logo";
  logoContainer.id ="logoWrapper";
  logoContainer.appendChild(headerLogo);
  navigationContainer.appendChild(logoContainer);

  const buttonContainer = document.createElement("div");
  buttonContainer.id ="buttonContainer";
  const homeButton = document.createElement("button");
  homeButton.textContent = "Home";
  homeButton.id = "homeButton";
  buttonContainer.appendChild(homeButton);

  const menuButton = document.createElement("button");
  menuButton.textContent = "Menu";
  menuButton.id = "menuButton";
  buttonContainer.appendChild(menuButton);

  const aboutButton = document.createElement("button");
  aboutButton.textContent = "About";
  aboutButton.id = "aboutButton";
  buttonContainer.appendChild(aboutButton);
  navigationContainer.appendChild(buttonContainer);


  header.appendChild(navigationContainer);
  return header;
});

export default headerDiv;
