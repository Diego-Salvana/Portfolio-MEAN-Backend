"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aboutValidator = void 0;
const express_validator_1 = require("express-validator");
const validResultExpress_middleware_1 = require("./validResultExpress.middleware");
const aboutValidator = [
    (0, express_validator_1.body)('aboutMeText', 'La descripción es obligatoria').trim().notEmpty(),
    validResultExpress_middleware_1.validatorResultExpress,
];
exports.aboutValidator = aboutValidator;
