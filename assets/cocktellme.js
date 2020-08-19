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

