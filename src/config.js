import { config } from 'dotenv'
config()

export const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://testUser:12345@doctorstrange.wc8mn.mongodb.net/DoctorStrange?retryWrites=true&w=majority"
export const PORT = process.env.PORT || 3000;