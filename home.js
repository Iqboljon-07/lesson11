document.addEventListener("DOMContentLoaded", function () {
  let container = document.querySelector(".container");

  (async function () {
    let response = await fetch(`https://fakestoreapi.com/users`);
    let users = await response.json();
    users.forEach((user) => {
      let card = document.createElement("div");
      card.classList.add("card", "bg-success");

      card.innerHTML = `

      <h2>${user.name.firstname}</h2>
      <p>Email: ${user.email}</p>
      `;
      container.appendChild(card);
    });
  })();
});
