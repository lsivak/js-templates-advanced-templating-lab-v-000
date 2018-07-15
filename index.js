function init() {

  //put any page initialization/handlebars initialization here
  var formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var template = formTemplate
displayIngredient()

}

  function displayIngredient() {
    var formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
    Handlebars.registerHelper('displayIngredient', function(ingredients) {
       return new Handlebars.SafeString('<li name="ingredientsList">' + ingredients + '</li>')
     })
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)

}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})


function createRecipe() {
  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var template = recipeTemplate


  var name = document.getElementById("name").value
  var description = document.getElementById("description").value
  var ingredients = document.getElementById("ingredients").value
  var recipeIngredients = []
for(var i=0;i<ingredients.length;i++) {
  if(ingredients[i].value !== "") {
    recipeIngredients.push(ingredients[i].value)
  }
}
  var recipe = {name, recipeIngredients, description}

return recipe
}

function updateRecipe() {
  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var template = recipeTemplate

  var name = document.getElementById("name").value
  var description = document.getElementById("description").value
  var ingredients = document.getElementById("ingredients").value
  var recipeIngredients = []
for(var i=0;i<ingredients.length;i++) {
  if(ingredients[i].value !== "") {
    recipeIngredients.push(ingredients[i].value)
  }
}
  var recipe = {name, recipeIngredients, description}

return recipe
}

function displayEditForm() {
  var formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var template = formTemplate

}
