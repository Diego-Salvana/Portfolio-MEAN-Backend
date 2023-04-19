"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleHttpError = void 0;
const handleHttpError = (res, error, errorRaw) => {
    console.log('Controller error', errorRaw);
    res.status(500).send(error);
};
exports.handleHttpError = handleHttpError;
