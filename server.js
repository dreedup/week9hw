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

app.listen(3000, function () {
    console.log('Listening on port 3000');
});