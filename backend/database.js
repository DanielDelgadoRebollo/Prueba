import { MONGODB_URI } from './config';
const mongoose = require('mongoose');

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true
}) 
    .then(db => console.log(`DB is connected`))
    .catch(err => console.error(err));