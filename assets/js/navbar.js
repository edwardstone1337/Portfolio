document.addEventListener("DOMContentLoaded", function () {
    // Load the navbar dynamically
    fetch("components/navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;

            // Highlight the current page in the navbar
            const currentPage = window.location.pathname.split("/").pop();
            if (currentPage === "" || currentPage === "index.html") {
                document.getElementById("nav-home")?.classList.add("active");
            } else if (currentPage === "work.html") {
                document.getElementById("nav-work")?.classList.add("active");

            }
        });
});
