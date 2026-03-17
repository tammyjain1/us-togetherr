function goToMain() {
    document.getElementById("welcome-page").style.display = "none";
    document.getElementById("main-page").classList.remove("hidden");
}

function toggleContent(id) {
    document.getElementById(id).classList.toggle("hidden");
}