const bikesSection = document.querySelector(".main-section");
const showAllDiv = document.querySelector(".showAllDiv");
const showAllBadge = document.querySelector(".showAll");
const filterButtons = document.querySelectorAll(".group");

let allBikes = [];

fetchBikesData();

function fetchBikesData() {
  fetch("https://challenges.brainster.tech/ajax_data/data.json")
    .then((response) => response.json())
    .then((data) => {
      allBikes = data.products;

      renderBikesCards(allBikes);
      updateBadges();

      showAllBadge.innerHTML = allBikes.length;
    })
    .catch((error) => console.error("Error fetching data:", error));
}

showAllDiv.addEventListener("click", () => {
  renderBikesCards(allBikes);
  filterButtons.forEach((filterBtn) => {
    filterBtn.classList.remove("filter-clicked");
  });
});

// ------------- RENDER BIKES CARDS ---------------
function renderBikesCards(bikesData) {
  bikesSection.innerHTML = "";

  bikesData.forEach((bike) => {
    const card = document.createElement("div");
    card.classList.add(
      "h-fit",
      "border",
      "border-gray-300",
      "hover:cursor-pointer",
      "hover:border-2",
      "hover:border-orange-400"
    );

    const imgUrl = `https://ibogoeska.github.io/weekly_challenges/starter-files/img/${bike.image}.png`;

    card.innerHTML = `
      <img src="${imgUrl}" alt="${bike.name}" class="w-full block p-5 h-[200px] hover:scale-110 " />
      <div class="bg-orange-400 p-4">
      <h3 class="font-bold">${bike.name}</h3>
      <p>${bike.price} $</p>
      </div>
    `;

    bikesSection.appendChild(card);
  });
}

// ------------ FILTER THE BIKES --------------
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((buttonItem) => {
      buttonItem.classList.remove("filter-clicked");
    });

    btn.classList.add("filter-clicked");
    const property = btn.dataset.filter;
    const value = btn.dataset.value;

    const filteredBikes = allBikes.filter((bikeItem) => {
      const bikeValue = bikeItem[property].toLowerCase().replace(/\s+/g, "-");

      return bikeValue === value.toLowerCase();
    });

    renderBikesCards(filteredBikes);
  });
});

// Update the badges to show the number of bikes according the name of the bike it filters
function updateBadges() {
  filterButtons.forEach((b) => {
    const filterKey = b.dataset.filter;
    const filterValue = b.dataset.value;

    const count = allBikes.filter((i) => {
      const bikeVal = i[filterKey].toLowerCase().replace(/\s+/g, "-");

      return bikeVal === filterValue.toLowerCase();
    }).length;

    const badgeSpan = b.querySelector(".badge");
    if (badgeSpan) {
      badgeSpan.textContent = count;
    }
  });
}
