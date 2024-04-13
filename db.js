import mongoose from "mongoose"

const URI = "mongodb+srv://deepak21062000:Deepak21062000@cluster0.dxwdw3z.mongodb.net/OYO";
const connectDB = async () =>{
    await mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Database Connected....");
} 

export default connectDB;