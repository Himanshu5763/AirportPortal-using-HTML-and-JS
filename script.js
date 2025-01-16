function  getUser() {
    event.preventDefault();
    let userName = localStorage.getItem("email");
    document.getElementById("link").innerText=userName;
    console.log(userName)
}