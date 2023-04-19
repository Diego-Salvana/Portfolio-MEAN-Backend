"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudyModel = void 0;
const mongoose_1 = require("mongoose");
const studySchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    institution: { type: String, required: true },
    start: { type: Number, required: true },
    end: { type: String },
}, {
    timestamps: true,
    versionKey: false,
});
const StudyModel = (0, mongoose_1.model)('Studies', studySchema);
exports.StudyModel = StudyModel;
