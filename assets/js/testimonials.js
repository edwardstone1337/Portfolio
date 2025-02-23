document.addEventListener("DOMContentLoaded", function () {
    fetch("components/testimonials.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("testimonials-section").innerHTML = data;
        });
});
