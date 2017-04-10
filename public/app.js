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

var cats = [
  {name: "Amber", faveFood: "Chicken", img: "http://i.imgur.com/mtj8mFV.jpg"},
  {name: "Maru", faveFood: "Sushi", img: "https://s-media-cache-ak0.pinimg.com/originals/f5/44/db/f544db41696216763a0df47af581e5cb.jpg"},
  {name: "Boba", faveFood: "Sock Fluff", img: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"},
  {name: "Barnaby", faveFood: "Tuna", img: "http://www.factzoo.com/sites/all/img/mammals/felidae/rotund-pallas-cat-not-pleased.jpg"},
  {name: "Max", faveFood: "Whiskas Temptations", img: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"}
];



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

  //addCat("Amber", "Chicken", "http://i.imgur.com/mtj8mFV.jpg");

  cats.forEach(function(cat){
    addCat(cat.name, cat.faveFood, cat.img);
  })


}

window.onload = app;