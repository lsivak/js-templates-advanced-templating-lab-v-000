function init() {
  handlebars()
  //put any page initialization/handlebars initialization here
  var formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var template = formTemplate

  document.getElementsByTagName("main")[0].innerHTML
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function handlebars() {
  Handlebars.registerHelper('showDescription', function(description) {
     return new Handlebars.SafeString('description="recipeDescription"')
   })
  Handlebars.registerHelper('showIngredient', function(ingredient) {
     return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
   })
Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
}

function createRecipe() {

  var name = document.getElementById("name").value
  var description = document.getElementById("recipeDescription").value
  var ingredients = document.getElementById("ingredients").value
  var recipe = {name, ingredients, description}

  document.getElementsByTagName("main")[0].innerHTML += template
}
