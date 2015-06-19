var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function(request, response){
  response.send('hello cats!');
});

app.get('/cats', function(request, response){
  var cats = ['felix', 'garfield', 'tom'];
  response.json(cats);
});

app.get('/cats2', function(request, response){
  var petShop = {
    name: 'ye olde petshop'
    }
  response.json(petShop);
});

var quotes = [
 "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison.",
 "No matter where you go, there you are. ",
 "If it is a good idea, go ahead and do it. It is much easier to apologize than to get permission. - Rear Admiral Grace Hopper, USN, Ph.D"
];

app.get("/quote", function (req, res){
 var randomIndex = Math.floor(Math.random()*quotes.length);
 res.send(quotes[randomIndex]);
});


app.listen(port, function(){
  console.log('app started on port', port);

})
