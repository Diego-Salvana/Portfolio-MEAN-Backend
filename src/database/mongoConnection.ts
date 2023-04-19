import mongoose from 'mongoose';

const dbConnection = async () => {
   const DB_URI = <string>process.env.MONGO_URI;
   await mongoose.connect(DB_URI);
};

export { dbConnection };
