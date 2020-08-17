

cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"


console.log(cocktailURL);

$.ajax({
    url: cocktailURL,
    method: "GET"
  }).then(function(response) {
    console.log(cocktailURL);
    console.log(response);
  });