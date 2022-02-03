const mongoose = require('mongoose');
const MONGODB_URI = require('./config');

(async() => {
try{
    const db = await mongoose.connect("mongodb+srv://testUser:12345@doctorstrange.wc8mn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
    console.log("Db connected to " + db.connection.name);
}catch(error){
    console.error(error);
}
})();