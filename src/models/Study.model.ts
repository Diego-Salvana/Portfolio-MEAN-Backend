import { Schema, model } from 'mongoose';
import { Study } from '../interfaces/Study.interface';

const studySchema = new Schema<Study>(
   {
      name: { type: String, required: true },
      institution: { type: String, required: true },
      start: { type: Number, required: true },
      end: { type: String },
   },
   {
      timestamps: true,
      versionKey: false,
   }
);

const StudyModel = model('Studies', studySchema);

export { StudyModel };
