function init() {
  //put any page initialization/handlebars initialization here
  var formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var template = formTemplate

  document.getElementsByTagName("main")[0].innerHTML
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

var recipe = {
  description: 'yummy chicken noodle soup',
  ingredients: [
    {quantity: "1 cup", name: 'chicken'},
    {quantity: "3 nanoliters", name: 'stock'},
    {quantity: "12", name: 'noodles'}
  ]
}

function createRecipe() {

  var name = document.getElementById("name")
  var description = document.getElementById("recipeDescription")
  var ingredients = document.getElementById("ingredients")

  document.getElementsByTagName("main")[0].innerHTML += template

}
