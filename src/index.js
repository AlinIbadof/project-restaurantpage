import pageLoad from "./page-load";

pageLoad();

import pageMenu from "./page-menu";

function clearPage() {
  const element = document.getElementById("content");
  element.removeChild(element.firstChild);
}
