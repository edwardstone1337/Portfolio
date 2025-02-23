document.addEventListener("DOMContentLoaded", function () {
    fetch("components/books.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("book-section").innerHTML = data;
        });
});
