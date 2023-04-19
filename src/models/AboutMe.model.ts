import { Schema, model } from 'mongoose';
import { AboutMe } from '../interfaces/AboutMe.interface';

const aboutMeSchema = new Schema<AboutMe>(
   {
      name: { type: String },
      lastname: { type: String },
      aboutMeText: { type: String, required: true },
   },
   {
      timestamps: true,
      versionKey: false,
   }
);

const AboutMeModel = model('About', aboutMeSchema);

export { AboutMeModel };
