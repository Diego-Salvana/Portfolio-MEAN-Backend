"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skillValidator = void 0;
const express_validator_1 = require("express-validator");
const validResultExpress_middleware_1 = require("./validResultExpress.middleware");
const skillValidator = [
    (0, express_validator_1.body)('name', 'El nombre es obligatorio').trim().notEmpty(),
    (0, express_validator_1.body)('iconHTML', 'El ícono es obligatorio').trim().notEmpty(),
    (0, express_validator_1.body)('color', 'El color es obligatorio').trim().notEmpty(),
    validResultExpress_middleware_1.validatorResultExpress,
];
exports.skillValidator = skillValidator;
