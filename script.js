const API_KEY = "55788998-ffa16aec88d8230da6c52cead";

const container = document.getElementById("image-container");
const button = document.getElementById("loadMore");

let page = 1;

async function loadImages () {
    const url = `https://pixabay.com/api/?key=${API_KEY}&editors_choice=true&page=${page}&per_page=10`;

  const response = await fetch(url);
  const data = await response.json();

  displayImages(data.hits);
}

function displayImages(images) {
//   container.innerHTML = "";

  images.forEach(img => {
    const imageElement = document.createElement("img");

    imageElement.src = img.webformatURL;
    imageElement.alt = img.tags;

    imageElement.style.width = "100px";
    imageElement.style.margin = "50px";

    container.appendChild(imageElement);
  });
}

loadImages()


button.addEventListener("click", () => {
    page++;
    loadImages();
})