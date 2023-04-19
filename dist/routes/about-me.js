"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const about_me_controller_1 = require("../controllers/about-me.controller");
const validationAbout_middleware_1 = require("../middlewares/validationAbout.middleware");
const session_middleware_1 = require("../middlewares/session.middleware");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', about_me_controller_1.getAbout);
router.put('/:id', session_middleware_1.checkJwt, validationAbout_middleware_1.aboutValidator, about_me_controller_1.updateAbout);
