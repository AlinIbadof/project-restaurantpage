import pageHome from "./page-home";
import pageMenu from "./page-menu";

function pageContact() {
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
  btnContact.classList.add("currentpage");
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
  title.textContent = "Alin's restaurant's contact info";
  title.classList.add("title");

  const restaurantImage = document.createElement("img");
  restaurantImage.src = "../src/restaurant.jpg";
  restaurantImage.classList.add("restaurantimg");

  const address = document.createElement("div");
  address.textContent = "9831 S. 6th Street; Ames, IA 50010";
  address.classList.add("address");

  const manager = document.createElement("div");
  manager.textContent = "Alin Ibadof -> manager@mail.restaurant.com";
  manager.classList.add("manager");

  // form for sending a message
  const form = document.createElement("form");
  form.setAttribute("id", "form");

  const formNameLabel = document.createElement("label");
  formNameLabel.setAttribute("for", "name");
  formNameLabel.textContent = "Name:";
  const formNameInput = document.createElement("input");
  formNameInput.setAttribute("type", "text");
  formNameInput.setAttribute("name", "name");
  formNameInput.setAttribute("id", "name");

  const formEmailLabel = document.createElement("label");
  formEmailLabel.setAttribute("for", "email");
  formEmailLabel.textContent = "Email:";
  const formEmailInput = document.createElement("input");
  formEmailInput.setAttribute("type", "email");
  formEmailInput.setAttribute("name", "email");
  formEmailInput.setAttribute("id", "email");

  const formMessageLabel = document.createElement("label");
  formMessageLabel.setAttribute("for", "msg");
  formMessageLabel.textContent = "Message:";
  const formMessageInput = document.createElement("input");
  formMessageInput.setAttribute("type", "text");
  formMessageInput.setAttribute("name", "msg");
  formMessageInput.setAttribute("id", "msg");

  const formSubmitBtn = document.createElement("button");
  formSubmitBtn.setAttribute("type", "submit");
  formSubmitBtn.textContent = "Submit";

  form.appendChild(formNameLabel);
  form.appendChild(formNameInput);
  form.appendChild(formEmailLabel);
  form.appendChild(formEmailInput);
  form.appendChild(formMessageLabel);
  form.appendChild(formMessageInput);
  form.appendChild(formSubmitBtn);
  /////////////////

  const contentDiv = document.createElement("div");
  contentDiv.classList.add("middleContent");

  contentDiv.appendChild(title);
  contentDiv.appendChild(restaurantImage);
  contentDiv.appendChild(address);
  contentDiv.appendChild(manager);
  contentDiv.appendChild(form);

  ///////////////////////////////

  // Footer section ---------------------------------------------------
  const footer = document.createElement("div");
  footer.classList.add("footer");
  footer.textContent = "@ Alin Ibadof";
  //////////////////////////////

  // creating a new element which will serve as a container for the above strucutre (for easier styling)
  const contactPage = document.createElement("div");
  contactPage.classList.add("contact");
  contactPage.classList.add("page");

  contactPage.appendChild(buttons);
  contactPage.appendChild(contentDiv);
  contactPage.appendChild(footer);

  // appending the above created structure to the content div
  const element = document.getElementById("content");
  element.appendChild(contactPage);
}

function clearPage() {
  const element = document.getElementById("content");
  element.removeChild(element.firstChild);
}

export default pageContact;
