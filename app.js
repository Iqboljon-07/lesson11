document.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector("form");

  try {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      let username = event.target[0].value;
      let password = event.target[1].value;
      let response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
      let token = await response.json();
      console.log("Token received", token.token);

      localStorage.setItem("authToken", token.token);
      window.location.replace("home.html");
    });
  } catch (error) {
    console.error("Form submission failed:", error);
  }
});

// localStorage.setItem("ism", "Iqboljon");

// document.body.innerHTML = localStorage.getItem("ism");
