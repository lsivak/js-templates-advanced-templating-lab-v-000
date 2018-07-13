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

Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("partial-template").innerHTML)
function renderFormTemplate() {
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var html = template({description: 'recipeDescription', ingredients: 'ingredients'});
}
}

function createRecipe() {

  var name = document.getElementById("name").value
  var description = document.getElementById("recipeDescription").value
  var ingredients = document.getElementById("ingredients").value
  var recipe = {name, ingredients, description}

  document.getElementsByTagName("main")[0].innerHTML += template
}
