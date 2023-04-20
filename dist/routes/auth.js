"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const validationAuth_middleware_1 = require("../middlewares/validationAuth.middleware");
const session_middleware_1 = require("../middlewares/session.middleware");
const router = (0, express_1.Router)();
exports.router = router;
router.post('/login', validationAuth_middleware_1.loginValidator, auth_controller_1.loginCtrl);
router.get('/refresh', session_middleware_1.checkJwt, auth_controller_1.refreshToken);