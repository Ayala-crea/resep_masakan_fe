document.addEventListener("DOMContentLoaded", function() {
    var exploreRecipesButton = document.getElementById("explore-recipes");
    var recipesLink = document.getElementById("recipes-link");

    if (exploreRecipesButton) {
        exploreRecipesButton.addEventListener("click", function() {
            window.location.href = "daftar_resep.html";
        });
    }

    if (recipesLink) {
        recipesLink.addEventListener("click", function(event) {
            event.preventDefault();
            window.location.href = "daftar_resep.html";
        });
    }
});
