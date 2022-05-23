function pageLoad() {
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
  reviewDiv.classList.add("title");
  const reviewP = document.createElement("p");
  reviewP.textContent =
    "It's a great experience. The ambiance is very welcoming and charming. Amazing wines, food and service. Staff are extremely knowledgeable and make great recommendations.";

  reviewDiv.appendChild(reviewP);

  // creating a new element which will serve as a container for the above strucutre (for easier styling)
  const homePage = document.createElement("div");
  homePage.classList.add("home");

  homePage.appendChild(title);
  homePage.appendChild(chefImage);
  homePage.appendChild(taglineDiv);
  homePage.appendChild(reviewDiv);
  // appending the above created structure to the content div
  const element = document.getElementById("content");
  element.appendChild(homePage);
}

export default pageLoad;
