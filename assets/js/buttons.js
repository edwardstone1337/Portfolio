document.addEventListener("DOMContentLoaded", function () {
    fetch("components/button.html")
        .then(response => response.text())
        .then(data => {
            document.querySelectorAll(".button-container").forEach(container => {
                let customText = container.getAttribute("data-text") || "Click me";
                let buttonType = container.getAttribute("data-type") || "primary";
                let buttonLink = container.getAttribute("data-link") || "#"; // Get the link

                let buttonElement = document.createElement("div");
                buttonElement.innerHTML = data;

                let button = buttonElement.querySelector("a");
                button.textContent = customText;
                button.classList.remove("primary"); // Remove default class
                button.classList.add(buttonType); // Apply correct type (primary/secondary)
                button.href = buttonLink; // Set the href to navigate

                container.innerHTML = buttonElement.innerHTML;
            });
        });
});
