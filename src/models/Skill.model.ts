import { Schema, model } from 'mongoose';
import { Skill } from '../interfaces/Skill.interface';

const skillSchema = new Schema<Skill>(
   {
      name: { type: String, required: true, unique: true },
      iconHTML: { type: String, required: true, unique: true },
      color: { type: String, required: true },
   },
   {
      timestamps: true,
      versionKey: false,
   }
);

const SkillModel = model('Skill', skillSchema);

export { SkillModel };
