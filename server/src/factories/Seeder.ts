import * as dotenv from "dotenv";
import * as mongoose from "mongoose";

import * as alumnoFactory from "./AlumnoFactory";

dotenv.config({ path: ".env" });

(mongoose as any).Promise = global.Promise;
mongoose.connect(process.env.MONGOLAB_URI, { useMongoClient: true })
    .then(() => run())
    .catch(err => console.log("MongoDB connection error. Please make sure MongoDB is running."));

function run() 
{
	alumnoFactory.alumnoData(5);
}

