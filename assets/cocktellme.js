cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"


$.ajax({
    url: cocktailURL,
    method: "GET"
  }).then(function(response) {
    //console.log(cocktailURL);
    console.log(response);
  });