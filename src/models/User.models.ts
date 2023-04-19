import { Schema, model } from 'mongoose';
import { Auth } from '../interfaces/Auth.interface';

const userSchema = new Schema<Auth>(
   {
      email: { type: String, require: true, unique: true },
      password: { type: String, require: true },
   },
   {
      timestamps: true,
      versionKey: false,
   }
);

const UserModel = model('User', userSchema);

export { UserModel };
