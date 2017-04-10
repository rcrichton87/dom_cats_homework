var createCat = function(){
  var cat = document.createElement("ul");
  cat.classList.add("cat");
  return cat;
}

var createName = function(inputName){
  var name = document.createElement("li");
  name.innerText = "Name: " + inputName;
  return name;
}

var createFavouriteFood = function(favourite){
  var favouriteFood = document.createElement("li");
  favouriteFood.innerText = "Favourite Food: " + favourite;
  return favouriteFood;
}

var createImageLi = function(imageURL){
  var imageLi = document.createElement("li");
  imageLi.classList.add("image");
  var image = document.createElement("img");
  image.src = imageURL;
  image.style.width = "500px";
  imageLi.appendChild(image);
  return imageLi;
}

var appendElements = function(cat, name, favouriteFood, imageLi){
  cat.appendChild(name);
  cat.appendChild(favouriteFood);
  cat.appendChild(imageLi);

  var cats = document.querySelector("#cats");
  cats.appendChild(cat);
}

var addCat = function(name, favouriteFood, imageURL){
  var cat = createCat();
  var catName = createName(name);
  var catFavouriteFood = createFavouriteFood(favouriteFood);
  var catImageLi = createImageLi(imageURL);

  appendElements(cat, catName, catFavouriteFood, catImageLi);
}



var app = function(){

// var cat = document.createElement("ul");
// cat.classList.add("cat");

// var name = document.createElement("li");
// name.innerText = "Name: Amber";

// var favouriteFood = document.createElement("li");
// favouriteFood.innerText = "Favourite Food: Chicken";

// var imageLi = document.createElement("li");
// imageLi.classList.add("image");
// var image = document.createElement("img");
// image.src = "http://i.imgur.com/mtj8mFV.jpg"
// image.style.width = "500px";
// imageLi.appendChild(image);

// cat.appendChild(name);
// cat.appendChild(favouriteFood);
// cat.appendChild(imageLi);

// var cats = document.querySelector("#cats");
// cats.appendChild(cat);

addCat("Amber", "Chicken", "http://i.imgur.com/mtj8mFV.jpg");


}

window.onload = app;