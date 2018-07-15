function init() {

  //put any page initialization/handlebars initialization here
  var formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var template = formTemplate
displayIngredient()

}

  function displayIngredient() {
    var formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
    Handlebars.registerHelper('displayIngredient', function(ingredient) {
       return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
     })
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)

}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})


function createRecipe() {
  var name = document.getElementById("name").innerText
  var description = document.getElementById("description").innerText
  var ingredientsNodes = document.getElementsByName("ingredientsList")
  var ingredients = []
  for(var i=0;i<ingredientsNodes.length;i++) {
    ingredients.push(ingredientsNodes[i].innerText)
  }
}
function updateRecipe() {
  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var template = recipeTemplate

  var name = document.getElementById("name").innerText
  var description = document.getElementById("description").innerText
  var ingredientsNodes = document.getElementsByName("ingredientsList")
  var ingredients = []
  for(var i=0;i<ingredientsNodes.length;i++) {
    ingredients.push(ingredientsNodes[i].innerText)
  }
}
  var recipe = {name, recipeIngredients, description}

return recipe
}

function displayEditForm() {
  var formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var template = formTemplate

}
