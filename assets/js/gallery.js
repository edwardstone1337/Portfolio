document.addEventListener("DOMContentLoaded", function () {
    fetch("components/gallery.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("gallery-section").innerHTML = data;
        });
});
