import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://masapu-harshita-09:98614932@cluster0.fcwghbh.mongodb.net/Food-del').then(()=>console.log("DataBase Connected"));
}