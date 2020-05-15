function validate() {
  const button = document.querySelector("button");
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const error = document.querySelector(".error");

    if (email.value === "") {
      error.style.display = "block";
      button.style.cursor = "disable";
      email.classList.add("input-error");
    }

    if (password.value.length <= 6) {
      error.style.display = "block";

      password.classList.add("input-error");
    }

    email.addEventListener("click", () => {
      error.style.display = "none";
      email.classList.remove("input-error");
    });
    password.addEventListener("click", () => {
      error.style.display = "none";
      password.classList.remove("input-error");
    });
  });
}

validate();
