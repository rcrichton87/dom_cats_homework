var app = function(){

var cat = document.createElement("ul");
cat.classList.add("cat");

var name = document.createElement("li");
name.innerText = "Name: Amber";

var favouriteFood = document.createElement("li");
favouriteFood.innerText = "Favourite Food: Chicken";

var imageLi = document.createElement("li");
imageLi.classList.add("image");
var image = document.createElement("img");
image.src = "http://i.imgur.com/mtj8mFV.jpg"
image.style.width = "500px";
imageLi.appendChild(image);

cat.appendChild(name);
cat.appendChild(favouriteFood);
cat.appendChild(imageLi);

var cats = document.querySelector("#cats");
cats.appendChild(cat);


}

window.onload = app;