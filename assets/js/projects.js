document.addEventListener("DOMContentLoaded", function () {
    fetch("components/projects.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("projects-section").innerHTML = data;
        });
});
