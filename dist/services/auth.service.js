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
exports.loginUser = void 0;
const User_models_1 = require("../models/User.models");
const bcrypt_handel_1 = require("../utils/bcrypt.handel");
const jwt_handle_1 = require("../utils/jwt.handle");
const loginUser = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    const isUser = yield User_models_1.UserModel.findOne({ email });
    if (!isUser)
        return 'USER_NOT_FOUND';
    const passwordHash = isUser.password;
    const isCorrectPass = yield (0, bcrypt_handel_1.verifyPassword)(password, passwordHash);
    if (!isCorrectPass)
        return 'INCORRECT_PASSWORD';
    const token = (0, jwt_handle_1.generateToken)(email);
    const data = { token, user: isUser.email };
    return data;
});
exports.loginUser = loginUser;
