
var jokes = [
 { setup: "What's the difference between a guitar and a fish?",
   punchline: "You can't tuna fish." },
 { setup: "What do you get when you cross a cow and a duck?",
   punchline: "Milk and quackers." },
 { setup: "How many tickles does it take to make an octupus laugh?",
   punchline: "Ten Tickles" }
];

module.exports = function() {
 var randomIndex = Math.floor(Math.random() * jokes.length);
 return jokes[randomIndex];
};
