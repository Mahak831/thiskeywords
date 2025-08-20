let form = document.querySelector("#userForm");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let url = document.querySelector("#url");
let cardsContainer = document.querySelector("#cardsContainer");

const userManager = {
  users: [],
  init: function () {
    form.addEventListener("submit", this.submitform.bind(this));
  },
  submitform: function (e) {
    e.preventDefault();
    this.addUsers();
  },
  addUsers: function () {
    this.users.push({
      username: username.value,
      role: role.value,
      bio: bio.value,
      url: url.value,
    });
    form.reset();
    this.renderUi();
  },
  renderUi: function () {
    // clear previous cards
    cardsContainer.innerHTML = "";

    this.users.forEach(function (user) {
      const card = document.createElement("div");
      card.classList.add("card");

      const img = document.createElement("img");
      img.src = user.url || "https://via.placeholder.com/70";
      card.appendChild(img);

      const h3 = document.createElement("h3");
      h3.textContent = user.username;
      card.appendChild(h3);

      const h4 = document.createElement("h4");
      h4.textContent = user.role;
      card.appendChild(h4);

      const p = document.createElement("p");
      p.textContent = user.bio;
      card.appendChild(p);

      cardsContainer.appendChild(card);
    });
  },
};

userManager.init();
