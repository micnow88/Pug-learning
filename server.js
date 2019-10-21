var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.use('/store', function(req, res, next){
  console.log('Hej, jestem pośrednikiem przy żądaniu do /store');
  next();
});

app.get('/', function (req, res) {
  res.send('hello world');
});

app.get('/store', function (req, res) {
  res.render('content');
});

app.get('/first-template', function(req, res){
    res.render('first-template');
});

app.get('/dynamic-view', function(req, res){
    res.render('dynamic', {
        name: "Moja dynamiczna strona",
        url: "http://www.google.com",
        user:
          { name: "Johnny", age: "20" }
    });
});

app.get('/user', function(req, res){
  res.render('dynamic', {
    user:
        { name: "Johnny", age: "20" }
  });
})

app.listen(3000);
app.use(function (req, res, next) {
  res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});
