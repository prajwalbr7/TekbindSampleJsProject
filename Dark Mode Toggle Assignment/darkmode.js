let button = document.querySelector("#buttonToggle");
let MainElement = document.querySelector("#MainContainer");

button.addEventListener("click", function () {
    if (button.innerHTML === "Enable Dark Mode") {
        localStorage.setItem("mode", "Dark");
        button.innerHTML = "Enable White Mode";
        button.style.backgroundColor = "#DFDEDF";
        button.style.color = "#6E6D70";
        MainElement.style.backgroundColor = "black";
    } else {
        localStorage.setItem("mode", "White");
        button.innerHTML = "Enable Dark Mode";
        button.style.backgroundColor = "#6E6D70";
        button.style.color = "#DFDEDF";
        MainElement.style.backgroundColor = "white";
    }
});

function loadMode() {
    let savedMode = localStorage.getItem("mode");
    if (savedMode === "Dark") {
        button.innerHTML = "Enable White Mode";
        button.style.backgroundColor = "#DFDEDF";
        button.style.color = "#6E6D70";
        MainElement.style.backgroundColor = "black";
    } else {
        button.innerHTML = "Enable Dark Mode";
        button.style.backgroundColor = "#6E6D70";
        button.style.color = "#DFDEDF";
        MainElement.style.backgroundColor = "white";
    }
}


setTimeout(() => {
    MainElement.style.transition = "background-color 0.5s ease-in-out";
}, 100);

loadMode();
