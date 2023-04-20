"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkJwt = void 0;
const jwt_handle_1 = require("../utils/jwt.handle");
const checkJwt = (req, res, next) => {
    var _a;
    try {
        const tokenHeader = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ').pop();
        const jwtPayload = (0, jwt_handle_1.verifyToken)(`${tokenHeader}`);
        if (typeof jwtPayload !== 'string') {
            req.user = jwtPayload;
        }
        next();
    }
    catch (err) {
        console.log(err);
        res.status(400).send('INVALID_SESSION');
    }
};
exports.checkJwt = checkJwt;
