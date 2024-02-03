const iconHeart = document.querySelectorAll("#icon");

iconHeart.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("filled");
  });
});

const searchText = () => {
  console.log("Entrei na função searchText!");
  const searchInput = document
    .querySelectorAll(".search-input")
    .value.toLowerCase();

  const paragraphs = document.getElementsByTagName("p");

  const searchResults = [];

  for (let i = 0; i < paragraphs.length; i++) {
    console.log("Entrei no FOR!");
    const paragraph = paragraphs[i];
    const paragraphText = paragraphs[i].textContent.toLowerCase();

    if (paragraphText.includes(searchInput)) {
      searchInput.classList.add("highlight");
      searchResults.push(paragraphText);
    } else {
      paragraph.classList.add("hidden");
    }
  }

  showResults(searchResults);
};

const showResults = (results) => {
  const resultElement = document.querySelectorAll(".inside-paragraph");

  if (results.length > 0) {
    resultElement.textContent = "" + results.join(", ");
  } else {
    alert("Nenhum resultado encontrado!");
  }
};

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    searchText();
  }
});

// const handleKeyPress = (event) => {
//   if (event.key === "Enter" && event.keyCode !== 13) {
//     searchText;
//   }
// };

const clearHighlights = (elements) => {
  for (let i = 0; i < elements.length; i++) {
    elements[i].innerHTML = elements[i].textContent;
  }
};
