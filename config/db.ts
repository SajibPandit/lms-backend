//importing pakages
import mongoose from 'mongoose'

//load db url
const dbUrl:string  = process.env.MONGO_URL|| ''

//db connection
const connectDB = async ()=>{
    try {
        await mongoose.connect(dbUrl);
        console.log(`MongoDB Connected`);
      } catch (error : any) {
        console.error(error.message);
        process.exit(1);
      }
}

export default connectDB