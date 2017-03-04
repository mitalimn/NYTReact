// Node Dependencies
var axios = require('axios');



// NY Times API Request Function
var articleQuery = function(topic, beginYear, endYear){

  var authKey = "";

  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" +
                  topic + "&begin_date=" + beginYear + "0101" + "&end_date=" + endYear + "1231";

