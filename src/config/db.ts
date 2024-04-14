import mongoose from "mongoose";
import {config} from "./config"

const connectDB = async() => {
    try{

        mongoose.connection.on('connected', () => {
            console.log("Connected to DB successfully")
        });

        //what if error comes in future like suppose once connected but in future if it comes
        // because catch covers in first time connection
        mongoose.connection.on('error', (err) => {
            console.log('Error in connecting to database',err);
        });

        await mongoose.connect(config.databaseUrl as string);

        

    //initial connection error    
    } catch(err){
        console.log("Failed to connect to database. ", err);
        //if database is not connecting then what is the sense of starting app so we terminate the server
        process.exit(1);
    }
}

export default connectDB;
