cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"


$.ajax({
    url: cocktailURL,
    method: "GET"
  }).then(function(response) {
    //console.log(cocktailURL);
    console.log(response);

    $('.uk-button').on("click", function(){
      window.location='./questions.html';
    });

    //$("#new-img").attr("src", response.drinks[1].strDrinkThumb);
    for(var i = 0; i < response.drinks.length; i++){
      var newLi = $("<li>");
      var newImg = $("<img>");
      newImg.attr("src", response.drinks[i].strDrinkThumb);
      newLi.append(newImg);
      //$(".uk-slider-items").append(newLi);
    }
  });