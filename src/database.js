import { connect } from "mongoose";

(async() =>{
    try{
        const db = await connect("mongodb+srv://testUser:12345@doctorstrange.wc8mn.mongodb.net/DoctorStrange?retryWrites=true&w=majority")
        console.log("DB connected to",db.connection.name)
    }catch(error){
        console.log(error)
    }
    
})()