
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
} 

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const PORT = require("./config");

// Initializations
const app = express();
require('./database');

// settings
app.set('port', PORT);

// middlewares
app.use(morgan('dev'));
app.use(cors());
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename(req, file, cb) {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
})

app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes
app.use('/api/usuarios', require('./routes/usuarios'));

// static files
app.use(express.static(path.join(__dirname, 'public')));

// start the server
app.listen(app.get(PORT), () => {
    console.log(`Server on port ${app.get('port')}`);
});