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
exports.update = exports.get = void 0;
const AboutMe_model_1 = require("../models/AboutMe.model");
const get = () => __awaiter(void 0, void 0, void 0, function* () {
    const responseItem = yield AboutMe_model_1.AboutMeModel.findOne({ name: 'Diego', lastname: 'Salvañá' });
    return responseItem;
});
exports.get = get;
const update = (id, about) => __awaiter(void 0, void 0, void 0, function* () {
    const responseItem = yield AboutMe_model_1.AboutMeModel.findByIdAndUpdate(id, about, { new: true });
    return responseItem;
});
exports.update = update;
