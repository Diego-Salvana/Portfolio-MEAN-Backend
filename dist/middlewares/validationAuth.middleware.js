"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidator = void 0;
const express_validator_1 = require("express-validator");
const validResultExpress_middleware_1 = require("./validResultExpress.middleware");
const loginValidator = [
    (0, express_validator_1.body)('email', 'Formato de email incorrecto').trim().isEmail().normalizeEmail(),
    (0, express_validator_1.body)('password', 'Formato de contraseña incorrecto').trim().isLength({ min: 6 }),
    validResultExpress_middleware_1.validatorResultExpress,
];
exports.loginValidator = loginValidator;
