"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectValidator = void 0;
const express_validator_1 = require("express-validator");
const validResultExpress_middleware_1 = require("./validResultExpress.middleware");
const projectValidator = [
    (0, express_validator_1.body)('name', 'El nombre es obligatorio').trim().notEmpty(),
    (0, express_validator_1.body)('description', 'La descripción es obligatoria').trim().notEmpty(),
    (0, express_validator_1.body)('linkGitHub', 'El link a Git-Hub es obligatorio').trim().notEmpty(),
    validResultExpress_middleware_1.validatorResultExpress,
];
exports.projectValidator = projectValidator;
