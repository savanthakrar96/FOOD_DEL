import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://savan:Savan9624@cluster0.uoxsrmi.mongodb.net/food-del').then(() => console.log("DB connected"));
}