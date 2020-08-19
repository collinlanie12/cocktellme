var drinkWhiskey = "Whiskey";
var drinkRum = "Spiced Rum";
var drinkVod = "Vodka";
var drinkTequila = "Tequila";
var drinkScotch = "Scotch";
var drinkLager = "Lager";
var drinkCognac = "Cognac";
var drinkCider = "Cider";
var drinkGin = "Gin";
var drinkChampagne = "Champagne";
var drinkAle = "Ale";
var drinkIrishW = "Irish Whiskey"
var drinkBourbon = "Bourbon";
var drinkDryV = "Dry Vermouth";
var drinkSweetV = "Sweet Vermouth";

function vodka() {
  var cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drinkVod;
  $.ajax({

    url: cocktailURL,
    method: "GET"
  }).then(function (response) {
    for (var i = 0; i < response.drinks.length; i++) {
      var resultsLi = $("<li>")
      var divCard = $("<div>").attr("class", "uk-card uk-card-default");
      var caroDiv = $("<div>").attr("class", "uk-card-media-top");
      var newImg = $("<img>").attr("src", response.drinks[i].strDrinkThumb);
      caroDiv.append(newImg);
      divCard.append(caroDiv);
      var divCardBody = $("<div>").attr("class", "uk-card-body");
      var newH3 = $("<h3>").text(response.drinks[i].strDrink).css({ "color": "black" });
      divCardBody.append(newH3);
      divCard.append(divCardBody);
      resultsLi.append(divCard);
      $("#cocktails").append(resultsLi);
    }
  });
}
function spicedRum() {
  var cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drinkRum;
  $.ajax({

    url: cocktailURL,
    method: "GET"
  }).then(function (response) {
    for (var i = 0; i < response.drinks.length; i++) {
      var resultsLi = $("<li>")
      var divCard = $("<div>").attr("class", "uk-card uk-card-default");
      var caroDiv = $("<div>").attr("class", "uk-card-media-top");
      var newImg = $("<img>").attr("src", response.drinks[i].strDrinkThumb);
      caroDiv.append(newImg);
      divCard.append(caroDiv);
      var divCardBody = $("<div>").attr("class", "uk-card-body");
      var newH3 = $("<h3>").text(response.drinks[i].strDrink).css({ "color": "black" });
      divCardBody.append(newH3);
      divCard.append(divCardBody);
      resultsLi.append(divCard);
      $("#cocktails").append(resultsLi);
    }
  });
}
function whiskey() {
  var cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drinkWhiskey;
  $.ajax({
    url: cocktailURL,
    method: "GET"
  }).then(function (response) {
    for (var i = 0; i < response.drinks.length; i++) {
      var resultsLi = $("<li>")
      var divCard = $("<div>").attr("class", "uk-card uk-card-default");
      var caroDiv = $("<div>").attr("class", "uk-card-media-top");
      var newImg = $("<img>").attr("src", response.drinks[i].strDrinkThumb);
      caroDiv.append(newImg);
      divCard.append(caroDiv);
      var divCardBody = $("<div>").attr("class", "uk-card-body");
      var newH3 = $("<h3>").text(response.drinks[i].strDrink).css({ "color": "black" });
      divCardBody.append(newH3);
      divCard.append(divCardBody);
      resultsLi.append(divCard);
      $("#cocktails").append(resultsLi);
    }
  });
}
function tequila() {
  var cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drinkTequila;
  $.ajax({

    url: cocktailURL,
    method: "GET"
  }).then(function (response) {
    for (var i = 0; i < response.drinks.length; i++) {
      var resultsLi = $("<li>")
      var divCard = $("<div>").attr("class", "uk-card uk-card-default");
      var caroDiv = $("<div>").attr("class", "uk-card-media-top");
      var newImg = $("<img>").attr("src", response.drinks[i].strDrinkThumb);
      caroDiv.append(newImg);
      divCard.append(caroDiv);
      var divCardBody = $("<div>").attr("class", "uk-card-body");
      var newH3 = $("<h3>").text(response.drinks[i].strDrink).css({ "color": "black" });
      divCardBody.append(newH3);
      divCard.append(divCardBody);
      resultsLi.append(divCard);
      $("#cocktails").append(resultsLi);
    }
  });
}
function scotch() {
  var cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drinkScotch;
  $.ajax({

    url: cocktailURL,
    method: "GET"
  }).then(function (response) {
    for (var i = 0; i < response.drinks.length; i++) {
      var resultsLi = $("<li>")
      var divCard = $("<div>").attr("class", "uk-card uk-card-default");
      var caroDiv = $("<div>").attr("class", "uk-card-media-top");
      var newImg = $("<img>").attr("src", response.drinks[i].strDrinkThumb);
      caroDiv.append(newImg);
      divCard.append(caroDiv);
      var divCardBody = $("<div>").attr("class", "uk-card-body");
      var newH3 = $("<h3>").text(response.drinks[i].strDrink).css({ "color": "black" });
      divCardBody.append(newH3);
      divCard.append(divCardBody);
      resultsLi.append(divCard);
      $("#cocktails").append(resultsLi);
    }
  });
}
function lager() {
  var cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drinkLager;
  $.ajax({

    url: cocktailURL,
    method: "GET"
  }).then(function (response) {
    for (var i = 0; i < response.drinks.length; i++) {
      var resultsLi = $("<li>")
      var divCard = $("<div>").attr("class", "uk-card uk-card-default");
      var caroDiv = $("<div>").attr("class", "uk-card-media-top");
      var newImg = $("<img>").attr("src", response.drinks[i].strDrinkThumb);
      caroDiv.append(newImg);
      divCard.append(caroDiv);
      var divCardBody = $("<div>").attr("class", "uk-card-body");
      var newH3 = $("<h3>").text(response.drinks[i].strDrink).css({ "color": "black" });
      divCardBody.append(newH3);
      divCard.append(divCardBody);
      resultsLi.append(divCard);
      $("#cocktails").append(resultsLi);
    }
  });
}
function cognac() {
  var cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drinkCognac;
  $.ajax({

    url: cocktailURL,
    method: "GET"
  }).then(function (response) {
    for (var i = 0; i < response.drinks.length; i++) {
      var resultsLi = $("<li>")
      var divCard = $("<div>").attr("class", "uk-card uk-card-default");
      var caroDiv = $("<div>").attr("class", "uk-card-media-top");
      var newImg = $("<img>").attr("src", response.drinks[i].strDrinkThumb);
      caroDiv.append(newImg);
      divCard.append(caroDiv);
      var divCardBody = $("<div>").attr("class", "uk-card-body");
      var newH3 = $("<h3>").text(response.drinks[i].strDrink).css({ "color": "black" });
      divCardBody.append(newH3);
      divCard.append(divCardBody);
      resultsLi.append(divCard);
      $("#cocktails").append(resultsLi);
    }
  });
}
function cider() {
  var cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drinkCider;
  $.ajax({

    url: cocktailURL,
    method: "GET"
  }).then(function (response) {
    for (var i = 0; i < response.drinks.length; i++) {
      var resultsLi = $("<li>")
      var divCard = $("<div>").attr("class", "uk-card uk-card-default");
      var caroDiv = $("<div>").attr("class", "uk-card-media-top");
      var newImg = $("<img>").attr("src", response.drinks[i].strDrinkThumb);
      caroDiv.append(newImg);
      divCard.append(caroDiv);
      var divCardBody = $("<div>").attr("class", "uk-card-body");
      var newH3 = $("<h3>").text(response.drinks[i].strDrink).css({ "color": "black" });
      divCardBody.append(newH3);
      divCard.append(divCardBody);
      resultsLi.append(divCard);
      $("#cocktails").append(resultsLi);
    }
  });
}
function gin() {
  var cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drinkGin;
  $.ajax({

    url: cocktailURL,
    method: "GET"
  }).then(function (response) {
    for (var i = 0; i < response.drinks.length; i++) {
      var resultsLi = $("<li>")
      var divCard = $("<div>").attr("class", "uk-card uk-card-default");
      var caroDiv = $("<div>").attr("class", "uk-card-media-top");
      var newImg = $("<img>").attr("src", response.drinks[i].strDrinkThumb);
      caroDiv.append(newImg);
      divCard.append(caroDiv);
      var divCardBody = $("<div>").attr("class", "uk-card-body");
      var newH3 = $("<h3>").text(response.drinks[i].strDrink).css({ "color": "black" });
      divCardBody.append(newH3);
      divCard.append(divCardBody);
      resultsLi.append(divCard);
      $("#cocktails").append(resultsLi);
    }
  });
}
function champagne() {
  var cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drinkChampagne;
  $.ajax({

    url: cocktailURL,
    method: "GET"
  }).then(function (response) {
    for (var i = 0; i < response.drinks.length; i++) {
      var resultsLi = $("<li>")
      var divCard = $("<div>").attr("class", "uk-card uk-card-default");
      var caroDiv = $("<div>").attr("class", "uk-card-media-top");
      var newImg = $("<img>").attr("src", response.drinks[i].strDrinkThumb);
      caroDiv.append(newImg);
      divCard.append(caroDiv);
      var divCardBody = $("<div>").attr("class", "uk-card-body");
      var newH3 = $("<h3>").text(response.drinks[i].strDrink).css({ "color": "black" });
      divCardBody.append(newH3);
      divCard.append(divCardBody);
      resultsLi.append(divCard);
      $("#cocktails").append(resultsLi);
    }
  });
}
function ale() {
  var cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drinkAle;
  $.ajax({

    url: cocktailURL,
    method: "GET"
  }).then(function (response) {
    for (var i = 0; i < response.drinks.length; i++) {
      var resultsLi = $("<li>")
      var divCard = $("<div>").attr("class", "uk-card uk-card-default");
      var caroDiv = $("<div>").attr("class", "uk-card-media-top");
      var newImg = $("<img>").attr("src", response.drinks[i].strDrinkThumb);
      caroDiv.append(newImg);
      divCard.append(caroDiv);
      var divCardBody = $("<div>").attr("class", "uk-card-body");
      var newH3 = $("<h3>").text(response.drinks[i].strDrink).css({ "color": "black" });
      divCardBody.append(newH3);
      divCard.append(divCardBody);
      resultsLi.append(divCard);
      $("#cocktails").append(resultsLi);
    }
  });
}
function irishW() {
  var cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drinkIrishW;
  $.ajax({

    url: cocktailURL,
    method: "GET"
  }).then(function (response) {
    for (var i = 0; i < response.drinks.length; i++) {
      var resultsLi = $("<li>")
      var divCard = $("<div>").attr("class", "uk-card uk-card-default");
      var caroDiv = $("<div>").attr("class", "uk-card-media-top");
      var newImg = $("<img>").attr("src", response.drinks[i].strDrinkThumb);
      caroDiv.append(newImg);
      divCard.append(caroDiv);
      var divCardBody = $("<div>").attr("class", "uk-card-body");
      var newH3 = $("<h3>").text(response.drinks[i].strDrink).css({ "color": "black" });
      divCardBody.append(newH3);
      divCard.append(divCardBody);
      resultsLi.append(divCard);
      $("#cocktails").append(resultsLi);
    }
  });
}
function bourbon() {
  var cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drinkBourbon;
  $.ajax({

    url: cocktailURL,
    method: "GET"
  }).then(function (response) {
    for (var i = 0; i < response.drinks.length; i++) {
      var resultsLi = $("<li>")
      var divCard = $("<div>").attr("class", "uk-card uk-card-default");
      var caroDiv = $("<div>").attr("class", "uk-card-media-top");
      var newImg = $("<img>").attr("src", response.drinks[i].strDrinkThumb);
      caroDiv.append(newImg);
      divCard.append(caroDiv);
      var divCardBody = $("<div>").attr("class", "uk-card-body");
      var newH3 = $("<h3>").text(response.drinks[i].strDrink).css({ "color": "black" });
      divCardBody.append(newH3);
      divCard.append(divCardBody);
      resultsLi.append(divCard);
      $("#cocktails").append(resultsLi);
    }
  });
}
function dryV() {
  var cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drinkDryV;
  $.ajax({

    url: cocktailURL,
    method: "GET"
  }).then(function (response) {
    for (var i = 0; i < response.drinks.length; i++) {
      var resultsLi = $("<li>")
      var divCard = $("<div>").attr("class", "uk-card uk-card-default");
      var caroDiv = $("<div>").attr("class", "uk-card-media-top");
      var newImg = $("<img>").attr("src", response.drinks[i].strDrinkThumb);
      caroDiv.append(newImg);
      divCard.append(caroDiv);
      var divCardBody = $("<div>").attr("class", "uk-card-body");
      var newH3 = $("<h3>").text(response.drinks[i].strDrink).css({ "color": "black" });
      divCardBody.append(newH3);
      divCard.append(divCardBody);
      resultsLi.append(divCard);
      $("#cocktails").append(resultsLi);
    }
  });
}
function sweetV() {
  var cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drinkSweetV;
  $.ajax({

    url: cocktailURL,
    method: "GET"
  }).then(function (response) {
    for (var i = 0; i < response.drinks.length; i++) {
      var resultsLi = $("<li>")
      var divCard = $("<div>").attr("class", "uk-card uk-card-default");
      var caroDiv = $("<div>").attr("class", "uk-card-media-top");
      var newImg = $("<img>").attr("src", response.drinks[i].strDrinkThumb);
      caroDiv.append(newImg);
      divCard.append(caroDiv);
      var divCardBody = $("<div>").attr("class", "uk-card-body");
      var newH3 = $("<h3>").text(response.drinks[i].strDrink).css({ "color": "black" });
      divCardBody.append(newH3);
      divCard.append(divCardBody);
      resultsLi.append(divCard);
      $("#cocktails").append(resultsLi);
    }
  });
}

function clear() {
  $("#cocktails").empty();
}


$(document).on("click", "#searchBtnEnd", function () {
  if ($(this).text() === "Whiskey") {
    clear();
    whiskey();
  } else if ($(this).text() === "Spiced Rum") {
    spicedRum();
  } else if ($(this).text() === "Vodka") {
    clear();
    vodka();
  } else if ($(this).text() === "Tequila") {
    clear();
    tequila();
  } else if ($(this).text() === "Scotch") {
    clear();
    scotch();
  } else if ($(this).text() === "Lager") {
    clear();
    lager();
  } else if ($(this).text() === "Cognac") {
    clear();
    cognac();
  } else if ($(this).text() === "Cider") {
    clear();
    cider();
  } else if ($(this).text() === "Gin") {
    clear();
    gin();
  } else if ($(this).text() === "Champagne") {
    clear();
    champagne();
  } else if ($(this).text() === "Ale") {
    clear();
    ale();
  } else if ($(this).text() === "Irish Whiskey") {
    clear();
    irishW();
  } else if ($(this).text() === "Bourbon") {
    clear();
    bourbon();
  } else if ($(this).text() === "Dry Vermouth") {
    clear();
    dryV();
  } else if ($(this).val() === "Sweet Vermouth") {
    clear();
    sweetV();
  }
})
