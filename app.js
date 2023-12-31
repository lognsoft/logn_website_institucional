const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const consign = require('consign');
const error = require('./middlewares/error');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

consign()
.then('routes')
.into(app);

// get our port
const port = process.env.PORT || 3000;

app.use(error.notFound);
app.use(error.serverError);

app.listen(port, () => {
  console.log(`sua aplicação esta no ar na porta ${port}`);
})
