"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || '';
const generateToken = (email) => {
    const jwt = (0, jsonwebtoken_1.sign)({ email }, JWT_SECRET, { expiresIn: '90d' });
    return jwt;
};
exports.generateToken = generateToken;
const verifyToken = (token) => {
    const jwtPayload = (0, jsonwebtoken_1.verify)(token, JWT_SECRET);
    return jwtPayload;
};
exports.verifyToken = verifyToken;
