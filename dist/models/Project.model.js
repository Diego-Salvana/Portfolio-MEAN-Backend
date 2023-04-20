"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectModel = void 0;
const mongoose_1 = require("mongoose");
const projectSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    linkWeb: { type: String },
    linkGitHub: { type: String, required: true },
}, {
    timestamps: true,
    versionKey: false,
});
const ProjectModel = (0, mongoose_1.model)('Project', projectSchema);
exports.ProjectModel = ProjectModel;
