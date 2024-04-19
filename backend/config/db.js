import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://akshar:91730531705@cluster0.3yc4s15.mongodb.net/food-del').then(()=>console.log("MongoDB connected"));
}