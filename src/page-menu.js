import pageHome from "./page-home";
import pageContact from "./page-contact";

function pageMenu() {
  // Navigation buttons
  const btnHome = document.createElement("div");
  btnHome.classList.add("navbtn");
  btnHome.classList.add("homebtn");
  btnHome.setAttribute("id", "homebtn");
  btnHome.textContent = "Home";

  const btnMenu = document.createElement("div");
  btnMenu.classList.add("navbtn");
  btnMenu.classList.add("menubtn");
  btnMenu.setAttribute("id", "menubtn");
  btnMenu.textContent = "Menu";

  const btnContact = document.createElement("div");
  btnContact.classList.add("navbtn");
  btnContact.classList.add("contactbtn");
  btnContact.setAttribute("id", "contactbtn");
  btnContact.textContent = "Contact";

  const buttons = document.createElement("div");
  buttons.classList.add("navigation");

  buttons.appendChild(btnHome);
  buttons.appendChild(btnMenu);
  buttons.appendChild(btnContact);
  ////////////////////////////

  // Content ---------------------------------------------------
  const title = document.createElement("div");
  title.textContent = "Alin's restaurant's Menu";
  title.classList.add("title");

  const foodImage = document.createElement("img");
  foodImage.src = "../src/grilledcheese.jpg";
  foodImage.classList.add("cheeseimg");

  const taglineDiv = document.createElement("div");
  taglineDiv.classList.add("tagline");
  const taglineP = document.createElement("p");
  taglineP.textContent = "Griled cheese sandwich";

  taglineDiv.appendChild(taglineP);

  const reviewDiv = document.createElement("div");
  reviewDiv.classList.add("review");
  const reviewP = document.createElement("p");
  reviewP.textContent =
    "It's all about the crust. Choose a hearty bread, butter it up, and shred your favorite cheddar for the best grilled cheese ever: crispy-crunchy on the outside, melty, cheddar middle, and the world's most impressive cheese pull.";

  reviewDiv.appendChild(reviewP);

  const contentDiv = document.createElement("div");
  contentDiv.classList.add("middleContent");

  contentDiv.appendChild(title);
  contentDiv.appendChild(foodImage);
  contentDiv.appendChild(taglineDiv);
  contentDiv.appendChild(reviewDiv);
  ///////////////////////////////

  // Footer section ---------------------------------------------------
  const footer = document.createElement("div");
  footer.classList.add("footer");
  footer.textContent = "@ Alin Ibadof";
  //////////////////////////////

  // creating a new element which will serve as a container for the above strucutre (for easier styling)
  const menuPage = document.createElement("div");
  menuPage.classList.add("menu");
  menuPage.classList.add("page");

  menuPage.appendChild(buttons);
  menuPage.appendChild(contentDiv);
  menuPage.appendChild(footer);

  // appending the above created structure to the content div
  const element = document.getElementById("content");
  element.appendChild(menuPage);
}

function clearPage() {
  const element = document.getElementById("content");
  element.removeChild(element.firstChild);
}

export default pageMenu;
