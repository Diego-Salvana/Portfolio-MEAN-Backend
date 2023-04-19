"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AboutMeModel = void 0;
const mongoose_1 = require("mongoose");
const aboutMeSchema = new mongoose_1.Schema({
    name: { type: String },
    lastname: { type: String },
    aboutMeText: { type: String, required: true },
}, {
    timestamps: true,
    versionKey: false,
});
const AboutMeModel = (0, mongoose_1.model)('About', aboutMeSchema);
exports.AboutMeModel = AboutMeModel;
