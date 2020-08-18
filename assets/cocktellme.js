//cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka"
$.ajax({

  url: cocktailURL,
  method: "GET"
}).then(function (response) {
  //console.log(cocktailURL);
  console.log(response);

  //$("#new-img").attr("src", response.drinks[1].strDrinkThumb);
  for (var i = 0; i < response.drinks.length; i++) {
    var newLi = $("<li>");
    var newImg = $("<img>");
    newImg.attr("src", response.drinks[i].strDrinkThumb);
    newLi.append(newImg);
    $(".uk-slider-items").append(newLi);
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
  window.location = './newuser.html';
})

