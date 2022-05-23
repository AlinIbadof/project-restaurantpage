import pageHome from "./page-home";
import pageMenu from "./page-menu";

function pageLoad() {
  // Navigation buttons
  const btnHome = document.createElement("div");
  btnHome.classList.add("navbtn");
  btnHome.classList.add("homebtn");
  btnHome.textContent = "Home";

  const btnMenu = document.createElement("div");
  btnMenu.classList.add("navbtn");
  btnMenu.classList.add("menubtn");
  btnMenu.textContent = "Menu";

  const btnContact = document.createElement("div");
  btnContact.classList.add("navbtn");
  btnContact.classList.add("contactbtn");
  btnContact.textContent = "Contact";

  const buttons = document.createElement("div");
  buttons.classList.add("navigation");

  buttons.appendChild(btnHome);
  buttons.appendChild(btnMenu);
  buttons.appendChild(btnContact);
  ////////////////////////////

  // Content
  const title = document.createElement("div");
  title.textContent = "Alin's restaurant";
  title.classList.add("title");

  const chefImage = document.createElement("img");
  chefImage.src = "../src/chef.jpeg";
  chefImage.classList.add("chefimg");

  const taglineDiv = document.createElement("div");
  taglineDiv.classList.add("tagline");
  const taglineP = document.createElement("p");
  taglineP.textContent = "Life’s too short for boring food";

  taglineDiv.appendChild(taglineP);

  const reviewDiv = document.createElement("div");
  reviewDiv.classList.add("review");
  const reviewP = document.createElement("p");
  reviewP.textContent =
    "It's a great experience. The ambiance is very welcoming and charming. Amazing wines, food and service. Staff are extremely knowledgeable and make great recommendations.";

  reviewDiv.appendChild(reviewP);

  const contentDiv = document.createElement("div");
  contentDiv.classList.add("middleContent");

  contentDiv.appendChild(title);
  contentDiv.appendChild(chefImage);
  contentDiv.appendChild(taglineDiv);
  contentDiv.appendChild(reviewDiv);
  ///////////////////////////////

  // Footer section
  const footer = document.createElement("div");
  footer.classList.add("footer");
  footer.textContent = "@ Alin Ibadof";
  //////////////////////////////

  // creating a new element which will serve as a container for the above strucutre (for easier styling)
  const homePage = document.createElement("div");
  homePage.classList.add("home");
  homePage.classList.add("page");

  homePage.appendChild(buttons);
  homePage.appendChild(contentDiv);
  homePage.appendChild(footer);

  // appending the above created structure to the content div
  const element = document.getElementById("content");
  element.appendChild(homePage);

  btnHome.addEventListener("click", () => {
    clearPage();
    pageHome();
  });

  btnMenu.addEventListener("click", () => {
    clearPage();
    pageMenu();
  });
}

function clearPage() {
  const element = document.getElementById("content");
  element.removeChild(element.firstChild);
}

export default pageLoad;
