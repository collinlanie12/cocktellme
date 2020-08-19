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
      console.log(response);
      for (var i = 0; i < response.drinks.length; i++) {
        var resultsLi = $("<li>")
        var divCard = $("<div>").attr("class", "uk-card uk-card-default");
        var caroDiv = $("<div>").attr("class", "uk-card-media-top");
        var newImg = $("<img>").attr("src", response.drinks[i].strDrinkThumb);
        console.log(newImg);
        caroDiv.append(newImg);
        divCard.append(caroDiv);
        var divCardBody = $("<div>").attr("class", "uk-card-body");
        var newH3 = $("<h3>").text(response.drinks[i].strDrink).css({ "color": "black" });
        divCardBody.append(newH3);
        divCard.append(divCardBody);
        resultsLi.append(divCard);
        $(".uk-slider-items").append(resultsLi);
      }
    });
  }
  function spicedRum() {
    var cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drinkRum;
    $.ajax({
  
      url: cocktailURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      for (var i = 0; i < response.drinks.length; i++) {
        var resultsLi = $("<li>")
        var divCard = $("<div>").attr("class", "uk-card uk-card-default");
        var caroDiv = $("<div>").attr("class", "uk-card-media-top");
        var newImg = $("<img>").attr("src", response.drinks[i].strDrinkThumb);
        console.log(newImg);
        caroDiv.append(newImg);
        divCard.append(caroDiv);
        var divCardBody = $("<div>").attr("class", "uk-card-body");
        var newH3 = $("<h3>").text(response.drinks[i].strDrink).css({ "color": "black" });
        divCardBody.append(newH3);
        divCard.append(divCardBody);
        resultsLi.append(divCard);
        $(".uk-slider-items").append(resultsLi);
      }
    });
  }
  function whiskey() {
    var cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drinkWhiskey;
    $.ajax({
      url: cocktailURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      for (var i = 0; i < response.drinks.length; i++) {
        var resultsLi = $("<li>")
        var divCard = $("<div>").attr("class", "uk-card uk-card-default");
        var caroDiv = $("<div>").attr("class", "uk-card-media-top");
        var newImg = $("<img>").attr("src", response.drinks[i].strDrinkThumb);
        console.log(newImg);
        caroDiv.append(newImg);
        divCard.append(caroDiv);
        var divCardBody = $("<div>").attr("class", "uk-card-body");
        var newH3 = $("<h3>").text(response.drinks[i].strDrink).css({ "color": "black" });
        divCardBody.append(newH3);
        divCard.append(divCardBody);
        resultsLi.append(divCard);
        $(".uk-slider-items").append(resultsLi);
      }
    });
  }
  function tequila() {
    var cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drinkTequila;
    $.ajax({
  
      url: cocktailURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      for (var i = 0; i < response.drinks.length; i++) {
        var resultsLi = $("<li>")
        var divCard = $("<div>").attr("class", "uk-card uk-card-default");
        var caroDiv = $("<div>").attr("class", "uk-card-media-top");
        var newImg = $("<img>").attr("src", response.drinks[i].strDrinkThumb);
        console.log(newImg);
        caroDiv.append(newImg);
        divCard.append(caroDiv);
        var divCardBody = $("<div>").attr("class", "uk-card-body");
        var newH3 = $("<h3>").text(response.drinks[i].strDrink).css({ "color": "black" });
        divCardBody.append(newH3);
        divCard.append(divCardBody);
        resultsLi.append(divCard);
        $(".uk-slider-items").append(resultsLi);
      }
    });
  }
  function scotch() {
    var cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drinkScotch;
    $.ajax({
  
      url: cocktailURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      for (var i = 0; i < response.drinks.length; i++) {
        var resultsLi = $("<li>")
        var divCard = $("<div>").attr("class", "uk-card uk-card-default");
        var caroDiv = $("<div>").attr("class", "uk-card-media-top");
        var newImg = $("<img>").attr("src", response.drinks[i].strDrinkThumb);
        console.log(newImg);
        caroDiv.append(newImg);
        divCard.append(caroDiv);
        var divCardBody = $("<div>").attr("class", "uk-card-body");
        var newH3 = $("<h3>").text(response.drinks[i].strDrink).css({ "color": "black" });
        divCardBody.append(newH3);
        divCard.append(divCardBody);
        resultsLi.append(divCard);
        $(".uk-slider-items").append(resultsLi);
      }
    });
  }
  function lager() {
    var cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drinkLager;
    $.ajax({
  
      url: cocktailURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      for (var i = 0; i < response.drinks.length; i++) {
        var resultsLi = $("<li>")
        var divCard = $("<div>").attr("class", "uk-card uk-card-default");
        var caroDiv = $("<div>").attr("class", "uk-card-media-top");
        var newImg = $("<img>").attr("src", response.drinks[i].strDrinkThumb);
        console.log(newImg);
        caroDiv.append(newImg);
        divCard.append(caroDiv);
        var divCardBody = $("<div>").attr("class", "uk-card-body");
        var newH3 = $("<h3>").text(response.drinks[i].strDrink).css({ "color": "black" });
        divCardBody.append(newH3);
        divCard.append(divCardBody);
        resultsLi.append(divCard);
        $(".uk-slider-items").append(resultsLi);
      }
    });
  }
  function cognac() {
    var cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drinkCognac;
    $.ajax({
  
      url: cocktailURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      for (var i = 0; i < response.drinks.length; i++) {
        var resultsLi = $("<li>")
        var divCard = $("<div>").attr("class", "uk-card uk-card-default");
        var caroDiv = $("<div>").attr("class", "uk-card-media-top");
        var newImg = $("<img>").attr("src", response.drinks[i].strDrinkThumb);
        console.log(newImg);
        caroDiv.append(newImg);
        divCard.append(caroDiv);
        var divCardBody = $("<div>").attr("class", "uk-card-body");
        var newH3 = $("<h3>").text(response.drinks[i].strDrink).css({ "color": "black" });
        divCardBody.append(newH3);
        divCard.append(divCardBody);
        resultsLi.append(divCard);
        $(".uk-slider-items").append(resultsLi);
      }
    });
  }
  function cider() {
    var cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drinkCider;
    $.ajax({
  
      url: cocktailURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      for (var i = 0; i < response.drinks.length; i++) {
        var resultsLi = $("<li>")
        var divCard = $("<div>").attr("class", "uk-card uk-card-default");
        var caroDiv = $("<div>").attr("class", "uk-card-media-top");
        var newImg = $("<img>").attr("src", response.drinks[i].strDrinkThumb);
        console.log(newImg);
        caroDiv.append(newImg);
        divCard.append(caroDiv);
        var divCardBody = $("<div>").attr("class", "uk-card-body");
        var newH3 = $("<h3>").text(response.drinks[i].strDrink).css({ "color": "black" });
        divCardBody.append(newH3);
        divCard.append(divCardBody);
        resultsLi.append(divCard);
        $(".uk-slider-items").append(resultsLi);
      }
    });
  }
  function gin() {
    var cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drinkGin;
    $.ajax({
  
      url: cocktailURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      for (var i = 0; i < response.drinks.length; i++) {
        var resultsLi = $("<li>")
        var divCard = $("<div>").attr("class", "uk-card uk-card-default");
        var caroDiv = $("<div>").attr("class", "uk-card-media-top");
        var newImg = $("<img>").attr("src", response.drinks[i].strDrinkThumb);
        console.log(newImg);
        caroDiv.append(newImg);
        divCard.append(caroDiv);
        var divCardBody = $("<div>").attr("class", "uk-card-body");
        var newH3 = $("<h3>").text(response.drinks[i].strDrink).css({ "color": "black" });
        divCardBody.append(newH3);
        divCard.append(divCardBody);
        resultsLi.append(divCard);
        $(".uk-slider-items").append(resultsLi);
      }
    });
  }
  function champagne() {
    var cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drinkChampagne;
    $.ajax({
  
      url: cocktailURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      for (var i = 0; i < response.drinks.length; i++) {
        var resultsLi = $("<li>")
        var divCard = $("<div>").attr("class", "uk-card uk-card-default");
        var caroDiv = $("<div>").attr("class", "uk-card-media-top");
        var newImg = $("<img>").attr("src", response.drinks[i].strDrinkThumb);
        console.log(newImg);
        caroDiv.append(newImg);
        divCard.append(caroDiv);
        var divCardBody = $("<div>").attr("class", "uk-card-body");
        var newH3 = $("<h3>").text(response.drinks[i].strDrink).css({ "color": "black" });
        divCardBody.append(newH3);
        divCard.append(divCardBody);
        resultsLi.append(divCard);
        $(".uk-slider-items").append(resultsLi);
      }
    });
  }
  function ale() {
    var cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drinkAle;
    $.ajax({
  
      url: cocktailURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      for (var i = 0; i < response.drinks.length; i++) {
        var resultsLi = $("<li>")
        var divCard = $("<div>").attr("class", "uk-card uk-card-default");
        var caroDiv = $("<div>").attr("class", "uk-card-media-top");
        var newImg = $("<img>").attr("src", response.drinks[i].strDrinkThumb);
        console.log(newImg);
        caroDiv.append(newImg);
        divCard.append(caroDiv);
        var divCardBody = $("<div>").attr("class", "uk-card-body");
        var newH3 = $("<h3>").text(response.drinks[i].strDrink).css({ "color": "black" });
        divCardBody.append(newH3);
        divCard.append(divCardBody);
        resultsLi.append(divCard);
        $(".uk-slider-items").append(resultsLi);
      }
    });
  }
  function irishW() {
    var cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drinkIrishW;
    $.ajax({
  
      url: cocktailURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      for (var i = 0; i < response.drinks.length; i++) {
        var resultsLi = $("<li>")
        var divCard = $("<div>").attr("class", "uk-card uk-card-default");
        var caroDiv = $("<div>").attr("class", "uk-card-media-top");
        var newImg = $("<img>").attr("src", response.drinks[i].strDrinkThumb);
        console.log(newImg);
        caroDiv.append(newImg);
        divCard.append(caroDiv);
        var divCardBody = $("<div>").attr("class", "uk-card-body");
        var newH3 = $("<h3>").text(response.drinks[i].strDrink).css({ "color": "black" });
        divCardBody.append(newH3);
        divCard.append(divCardBody);
        resultsLi.append(divCard);
        $(".uk-slider-items").append(resultsLi);
      }
    });
  }
  function bourbon() {
    var cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drinkBourbon;
    $.ajax({
  
      url: cocktailURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      for (var i = 0; i < response.drinks.length; i++) {
        var resultsLi = $("<li>")
        var divCard = $("<div>").attr("class", "uk-card uk-card-default");
        var caroDiv = $("<div>").attr("class", "uk-card-media-top");
        var newImg = $("<img>").attr("src", response.drinks[i].strDrinkThumb);
        console.log(newImg);
        caroDiv.append(newImg);
        divCard.append(caroDiv);
        var divCardBody = $("<div>").attr("class", "uk-card-body");
        var newH3 = $("<h3>").text(response.drinks[i].strDrink).css({ "color": "black" });
        divCardBody.append(newH3);
        divCard.append(divCardBody);
        resultsLi.append(divCard);
        $(".uk-slider-items").append(resultsLi);
      }
    });
  }
  function dryV() {
    var cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drinkDryV;
    $.ajax({
  
      url: cocktailURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      for (var i = 0; i < response.drinks.length; i++) {
        var resultsLi = $("<li>")
        var divCard = $("<div>").attr("class", "uk-card uk-card-default");
        var caroDiv = $("<div>").attr("class", "uk-card-media-top");
        var newImg = $("<img>").attr("src", response.drinks[i].strDrinkThumb);
        console.log(newImg);
        caroDiv.append(newImg);
        divCard.append(caroDiv);
        var divCardBody = $("<div>").attr("class", "uk-card-body");
        var newH3 = $("<h3>").text(response.drinks[i].strDrink).css({ "color": "black" });
        divCardBody.append(newH3);
        divCard.append(divCardBody);
        resultsLi.append(divCard);
        $(".uk-slider-items").append(resultsLi);
      }
    });
  }
  function sweetV() {
    var cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drinkSweetV;
    $.ajax({
  
      url: cocktailURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      for (var i = 0; i < response.drinks.length; i++) {
        var resultsLi = $("<li>")
        var divCard = $("<div>").attr("class", "uk-card uk-card-default");
        var caroDiv = $("<div>").attr("class", "uk-card-media-top");
        var newImg = $("<img>").attr("src", response.drinks[i].strDrinkThumb);
        console.log(newImg);
        caroDiv.append(newImg);
        divCard.append(caroDiv);
        var divCardBody = $("<div>").attr("class", "uk-card-body");
        var newH3 = $("<h3>").text(response.drinks[i].strDrink).css({ "color": "black" });
        divCardBody.append(newH3);
        divCard.append(divCardBody);
        resultsLi.append(divCard);
        $(".uk-slider-items").append(resultsLi);
      }
    });
  }




$(document).on("click", "#searchBtnEnd", function(){
    if($("searchBtnEnd").val() === "Whiskey"){
        whiskey();
    } else if($("searchBtnEnd").val() === "Spiced Rum") {
        spicedRum();
    } else if($("searchBtnEnd").val() === "Vodka"){
        vodka();
    } else if($("searchBtnEnd").val() === "Tequila"){
        tequila();
    } else if($("searchBtnEnd").val() === "Scotch"){
        scotch();
    } else if($("searchBtnEnd").val() === "Lager"){
        lager();
    } else if($("searchBtnEnd").val() === "Cognac"){
        cognac();
    } else if($("searchBtnEnd").val() === "Cider"){
        cider();
    } else if($("searchBtnEnd").val() === "Gin"){
        gin();
    } else if($("searchBtnEnd").val() === "Champagne"){
        champagne();
    } else if($("searchBtnEnd").val() === "Ale"){
        ale();
    } else if($("searchBtnEnd").val() === "Irish Whiskey"){
        irishW();
    } else if($("searchBtnEnd").val() === "Bourbon"){
        bourbon();
    } else if($("searchBtnEnd").val() === "Dry Vermouth"){
        dryV();
    } else if($("searchBtnEnd").val() === "Sweet Vermouth"){
        sweetV();
    }
  })
  