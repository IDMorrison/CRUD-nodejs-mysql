// Para comenzar ejecutar en bash => npm run dev; para correr servidor local


const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const express = require('express');
const app = express();

// importing routes 
const customerRoutes = require('./routes/customer');

// settings 
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middlewares (peticiones de usuario)
app.use(morgan('dev'));
app.use(myConnection(mysql, {
   host: 'localhost',
   user: 'root',
   password: 'cacapedo18',
   port: 3306,
   database: 'crude'
}, 'single'));
app.use(express.urlencoded({ extended: false })) // : Transforma los form en objetos que puede ser entendidos por este servidor

// routes
app.use('/', customerRoutes);

// static files  
app.use(express.static(path.join(__dirname, 'public')));


// starting the server
app.listen(app.get('port'), () => {
   console.log('server on port 3000');
})