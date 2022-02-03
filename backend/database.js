const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://testUser:12345@doctorstrange.wc8mn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true
}) 
    .then(db => console.log(`DB is connected`))
    .catch(err => console.error(err));