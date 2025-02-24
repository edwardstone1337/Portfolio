document.addEventListener("DOMContentLoaded", function () {
    fetch("components/ux-case-studies.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("ux-case-studies-section").innerHTML = data;
        });
});
