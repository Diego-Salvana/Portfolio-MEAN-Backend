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
exports.refreshToken = exports.loginCtrl = void 0;
const auth_service_1 = require("../services/auth.service");
const jwt_handle_1 = require("../utils/jwt.handle");
const loginCtrl = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = body;
        const isUser = yield (0, auth_service_1.loginUser)({ email, password });
        if (isUser === 'USER_NOT_FOUND' || isUser === 'INCORRECT_PASSWORD') {
            res.status(400).send(isUser);
        }
        else {
            res.send(isUser);
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).send('SERVER_ERROR');
    }
});
exports.loginCtrl = loginCtrl;
const refreshToken = (req, res) => {
    var _a;
    try {
        const user = (_a = req.user) === null || _a === void 0 ? void 0 : _a.email;
        if (user) {
            const token = (0, jwt_handle_1.generateToken)(user);
            const data = { token, user };
            res.send(data);
        }
        else {
            throw new Error('GENERATE_TOKEN_ERROR');
        }
    }
    catch (err) {
        console.log(err);
        res.status(401).send('UNAUTHORIZED');
    }
};
exports.refreshToken = refreshToken;
