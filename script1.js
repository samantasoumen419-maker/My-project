let form = document.querySelector("#contactForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.querySelector("#name").value;

    document.querySelector("#output").textContent =
        "Thanks, " + name + "! I will reply soon.";

});