"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillModel = void 0;
const mongoose_1 = require("mongoose");
const skillSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    iconHTML: { type: String, required: true, unique: true },
    color: { type: String, required: true },
}, {
    timestamps: true,
    versionKey: false,
});
const SkillModel = (0, mongoose_1.model)('Skill', skillSchema);
exports.SkillModel = SkillModel;
