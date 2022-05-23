import { pageLoad, clearPage } from "./page-load";
import pageHome from "./page-home";
import pageContact from "./page-contact";
import pageMenu from "./page-menu";

pageLoad();

function btnEvents() {
  const homeBtn = document.getElementById("homebtn");
  const menuBtn = document.getElementById("menubtn");
  const contactBtn = document.getElementById("contactbtn");

  homeBtn.addEventListener("click", () => {
    clearPage();
    pageHome();
    btnEvents();
  });
  menuBtn.addEventListener("click", () => {
    clearPage();
    pageMenu();
    btnEvents();
  });
  contactBtn.addEventListener("click", () => {
    clearPage();
    pageContact();
    btnEvents();
  });
}

btnEvents();
