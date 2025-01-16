const email = document.getElementById("email");
const uname = document.getElementById("name");
const pass = document.getElementById("password");
const button = document.getElementById("signup");

button.addEventListener("click", () => {
  const dataobj = {
    email: email.value,
    name: uname.value,
    password: pass.value,
  };
  fetch("http://localhost:8080/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataobj),
  })
    .then((res) => res.json())
    .then((data) => {
      alert(
        "Account created successfully! Please go to login to create a todo"
      );
      window.location.replace(`../signin/signin.html`);
    });
});
