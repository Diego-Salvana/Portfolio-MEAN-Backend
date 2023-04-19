"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const studies_controller_1 = require("../controllers/studies.controller");
const session_middleware_1 = require("../middlewares/session.middleware");
const validationStudy_middleware_1 = require("../middlewares/validationStudy.middleware");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', studies_controller_1.getStudies);
router.get('/:id', studies_controller_1.getStudy);
router.post('/', session_middleware_1.checkJwt, validationStudy_middleware_1.studyValidator, studies_controller_1.createStudy);
router.put('/:id', session_middleware_1.checkJwt, validationStudy_middleware_1.studyValidator, studies_controller_1.updateStudy);
router.delete('/:id', session_middleware_1.checkJwt, studies_controller_1.deleteStudy);
