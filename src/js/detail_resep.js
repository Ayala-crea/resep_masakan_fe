document.addEventListener("DOMContentLoaded", function() {
    var recipeContent = document.getElementById("recipe-content");
    if (recipeContent) {
        var selectedRecipe = localStorage.getItem("selectedRecipe");
        if (selectedRecipe) {
            var recipe = JSON.parse(selectedRecipe);

            var recipeTitle = document.createElement("h2");
            recipeTitle.textContent = recipe.title;

            var recipeImage = document.createElement("img");
            recipeImage.src = recipe.image;
            recipeImage.alt = recipe.title;

            var recipeDescription = document.createElement("p");
            recipeDescription.textContent = recipe.description;

            var recipeIngredients = document.createElement("h3");
            recipeIngredients.textContent = "Bahan-bahan:";

            var recipeContentText = document.createElement("pre");
            recipeContentText.textContent = recipe.content;

            var recipeSteps = document.createElement("h3");
            recipeSteps.textContent = "Cara Memasak:";

            var recipeStepsList = document.createElement("ol");
            recipe.cookingSteps.forEach(function(step) {
                var stepItem = document.createElement("li");
                stepItem.textContent = step;
                recipeStepsList.appendChild(stepItem);
            });

            recipeContent.appendChild(recipeTitle);
            recipeContent.appendChild(recipeImage);
            recipeContent.appendChild(recipeDescription);
            recipeContent.appendChild(recipeIngredients);
            recipeContent.appendChild(recipeContentText);
            recipeContent.appendChild(recipeSteps);
            recipeContent.appendChild(recipeStepsList);
        } else {
            recipeContent.textContent = "Resep tidak ditemukan.";
        }
    }
});
