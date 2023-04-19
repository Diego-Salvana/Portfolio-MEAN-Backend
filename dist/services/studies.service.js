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
const Study_model_1 = require("../models/Study.model");
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const responseItems = yield Study_model_1.StudyModel.find();
    return responseItems;
});
exports.getAll = getAll;
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const responseItem = yield Study_model_1.StudyModel.findById(id);
    return responseItem;
});
exports.getById = getById;
const insert = (study) => __awaiter(void 0, void 0, void 0, function* () {
    const responseItem = yield Study_model_1.StudyModel.create(study);
    return responseItem;
});
exports.insert = insert;
const update = (id, study) => __awaiter(void 0, void 0, void 0, function* () {
    const responseItem = yield Study_model_1.StudyModel.findByIdAndUpdate(id, study, { new: true });
    return responseItem;
});
exports.update = update;
const deleteById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const responseItem = yield Study_model_1.StudyModel.findByIdAndDelete(id);
    return responseItem;
});
exports.deleteById = deleteById;
