const express = require('express')

const app = express();

app.get('/', function (req, res) {res.send('<h1>Hello World!</h1>')
})

app.get('/greeting/:name', (req, res) => {
    const name = req.params.name;
    const greeting = `Hello, ${name}! It's so great to see you!`;
    res.send(greeting);
  })

  app.get('/tip/:total/:tipPercentage', (req, res) => {
    const total = parseFloat(req.params.total);
    const tipPercentage = parseFloat(req.params.tipPercentage);
    const tipAmount = (total * tipPercentage) / 100;
    res.send(tipAmount.toString());
  });

  const magic8BallResponses = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
  ];
  
  app.get('/magic/:question', (req, res) => {
    const question = req.params.question.replace(/%20/g, ' ');
    const randomResponse = magic8BallResponses[Math.floor(Math.random() * magic8BallResponses.length)];
    const responseHtml = `<h1>${question}</h1><h1>${randomResponse}</h1>`;
    res.send(responseHtml);
  });

app.listen(3000, function () {
    console.log('Listening on port 3000');
});