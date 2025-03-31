function verification() {
    var username = document.login.pseudo.value;
    var password = document.login.password.value;
    if (username === "admin" && password === "admin") {
        window.location.href = "authorized.html";
    } else if (username === "admin" && password !== "admin") {
        alert("Mot de passe incorrect");
    } else if (username !== "admin" && password === "admin") {
        alert("Nom d'utilisateur incorrect");
    } else if (username !== "admin" && password !== "admin") {
        alert("Nom d'utilisateur et mot de passe incorrects");
    }
}