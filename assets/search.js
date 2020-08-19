


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
  



$(document).on("click", "#searchBtnEnd", function(){
    if($("searchBtnEnd").val() === Vodka){
        vodka
    }
  })
  