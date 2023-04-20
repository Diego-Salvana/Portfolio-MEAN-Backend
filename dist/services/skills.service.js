"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteById = exports.update = exports.insert = exports.getById = exports.getAll = void 0;
const Skill_model_1 = require("../models/Skill.model");
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const responseItems = yield Skill_model_1.SkillModel.find();
    return responseItems;
});
exports.getAll = getAll;
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const responseItem = yield Skill_model_1.SkillModel.findById(id);
    return responseItem;
});
exports.getById = getById;
const insert = (skill) => __awaiter(void 0, void 0, void 0, function* () {
    const responseItem = yield Skill_model_1.SkillModel.create(skill);
    return responseItem;
});
exports.insert = insert;
const update = (id, skill) => __awaiter(void 0, void 0, void 0, function* () {
    const responseItem = yield Skill_model_1.SkillModel.findByIdAndUpdate(id, skill, { new: true });
    return responseItem;
});
exports.update = update;
const deleteById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const responseItem = yield Skill_model_1.SkillModel.findByIdAndDelete(id);
    return responseItem;
});
exports.deleteById = deleteById;
