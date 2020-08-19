<<<<<<< HEAD
cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
// cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/list.php?g=Alcholic"
=======
cocktailURL = "https://www.thecocktaildb.com/api/json/v2/9973533/popular.php"

var drinkWhiskey = "Whiskey";
var drinkRum = "Spiced Rum";
var drinkVod = "Vodka";
var drinkTequila = "Tequila";
var drinkScotch = "Scotch";
var drinkLager = "Lager";
var drinkCognac = "Cognac";

>>>>>>> a2a38a9088419ecd4254d2aab35b6642e1aff318
$.ajax({

  url: cocktailURL,
  method: "GET"
}).then(function (response) {
  console.log(response);

  for (var i = 0; i < response.drinks.length; i++) {
    var newLi = $("<li>").attr("class", "uk-width-1-5 uk-transition-toggle");
    var newImg = $("<img>");
    var newH5 = $("<h5>").attr("class", "uk-margin-remove").css({ "color": "white" });
    newH5.text(response.drinks[i].strDrink);
    var newDivPanel = $("<div>").attr("class", "uk-panel");
    var newDiv = $("<div>").attr("class", "uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom");
    newDivPanel.append(newDiv);
    newDiv.append(newH5);
    newImg.attr("src", response.drinks[i].strDrinkThumb);
    newDivPanel.append(newImg);
    newLi.append(newDivPanel);
    $("#sliderUL").append(newLi);
  }
});

$('#google-button').on('click', function () {
  // Initialize with your OAuth.io app public key
  OAuth.initialize('SwtCfntFYnWRa2E5jhP30wnVEG8');
  // Use popup for OAuth
  OAuth.popup('google').then(google => {
    console.log(google);
    // Retrieves user data from oauth provider
    console.log(google.me());

    if (google.provider === "google") {
      console.log(google.provider)
      window.location = './newuser.html';
    }

  });

})

$('#submit').on('click', function () {
  if ($("Email").val() === "" || $("#Password").val() === "") {
    // alert("Please insert your Email & Password to take the quiz.")
    $('#pw').append("<h3>" + "You must enter a valid email and password" + "</h3>")
  } else {
    window.location = './newuser.html';
  }
})


$(document).on("click", "#searchBtnEnd", function(){
  console.log("hey");
})

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
      $("#slider_ul").append(resultsLi);
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
      $("#slider_ul").append(resultsLi);
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
      $("#slider_ul").append(resultsLi);
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
      $("#slider_ul").append(resultsLi);
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
      $("#slider_ul").append(resultsLi);
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
      $("#slider_ul").append(resultsLi);
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
      $("#slider_ul").append(resultsLi);
    }
  });
}


var queryResults = "https://api.traitify.com/v1/assessments/" + "ddb69c62-70bc-4406-af2f-aeb47f329ea5" + "?data=blend,types,traits,career_matches"
$.ajax({
  url: queryResults,
  beforeSend: function (xhr) {
    xhr.setRequestHeader("Authorization", "Basic " + btoa("17330cfb2aff43ce8e99dd4889736e0b:x"));
  },
  type: 'GET',
  dataType: 'json',
  contentType: 'application/json',
})
  .then(function (response) {
    console.log(response);
    console.log(response.personality_blend.personality_type_1.name);
    if (response.personality_blend.personality_type_1.name === "Action-Taker") {
      whiskey();
      $("#yourPersonalityCocktail").text("You are described as an Action-Taker. Action-Takers are hands-on doers! You excel at solitary, goal-oriented work and ‘getting the job done’. You’re also known for being handy, practical, applied, and ‘down to earth’.  The assessment has matched you with cocktails that contain " + drinkWhiskey + "!");
    } else if (response.personality_blend.personality_type_1.name === "Inventor") {
      spicedRum();
      $("#yourPersonalityCocktail").text("You are described as an Inventor! Inventors are for being creative! Inventors excel when they are ‘lost in their work, completely engrossed in a project!.  The assessment has matched you with cocktails that contain " + drinkRum + "!");
    } else if (response.personality_blend.personality_type_1.name === "Naturalist") {
      vodka();
      $("#yourPersonalityCocktail").text("You are described as being attached to the natural world, frequently working with plants and animals in their environment. Often nature lovers, they like to experience the world outdoors.  The assessment has matched you with cocktails that contain " + drinkVod + "!");
    } else if (response.personality_blend.personality_type_1.name === "Visionary") {
      tequila();
      $("#yourPersonalityCocktail").text("You are described as a pioneer. You are a great convincer and like to work with others in a 'take charge' capacity. You love to take risks, make changes and set trends.  The assessment has matched you with cocktails that contain " + drinkTequila + "!");
    } else if (response.personality_blend.personality_type_1.name === "Analyzer") {
      scotch();
      $("#yourPersonalityCocktail").text("You are described as an inquisitive person. They delve, study and look deeply for information. You have a keen eye and an experimental nature.  The assessment has matched you with cocktails that contain " + drinkScotch + "!");
    } else if (response.personality_blend.personality_type_1.name === "Mentor") {
      lager();
      $("#yourPersonalityCocktail").text("You are described as a people-oriented person. You have great communication skills and are most fulfilled when assisting or working directly with others to improve a personal or societal situation.  The assessment has matched you with cocktails that contain " + drinkLager + "!");
    } else if (response.personality_blend.personality_type_1.name === "Planner") {
      cognac();
      $("#yourPersonalityCocktail").text("You are described as a detailed person. You are methodical, precise, and detail-oriented. Planners create systems to follow, and enjoy working with data, detail, words and numbers.  The assessment has matched you with cocktails that contain " + drinkCognac + "!");
    }
  });
