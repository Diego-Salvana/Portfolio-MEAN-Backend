"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studyValidator = void 0;
const express_validator_1 = require("express-validator");
const validResultExpress_middleware_1 = require("./validResultExpress.middleware");
const studyValidator = [
    (0, express_validator_1.body)('name', 'El nombre es obligatorio').trim().notEmpty(),
    (0, express_validator_1.body)('institution', 'Institución es obligatoria').trim().notEmpty(),
    (0, express_validator_1.body)('start', 'Formato año de inicio incorrecto').isNumeric().trim().isLength({ min: 4, max: 4 }),
    validResultExpress_middleware_1.validatorResultExpress,
];
exports.studyValidator = studyValidator;
