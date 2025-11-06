import mongoose from "mongoose";


async function conectaNaDatabase() {

    mongoose.connect(process.env.DB_CONNCTION_STRING);

    return mongoose.connection;

};

export default conectaNaDatabase;

