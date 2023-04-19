"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const projects_controller_1 = require("../controllers/projects.controller");
const session_middleware_1 = require("../middlewares/session.middleware");
const validationProject_middleware_1 = require("../middlewares/validationProject.middleware");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', projects_controller_1.getProjects);
router.get('/:id', projects_controller_1.getProject);
router.post('/', session_middleware_1.checkJwt, validationProject_middleware_1.projectValidator, projects_controller_1.createProject);
router.put('/:id', session_middleware_1.checkJwt, validationProject_middleware_1.projectValidator, projects_controller_1.updateProject);
router.delete('/:id', session_middleware_1.checkJwt, projects_controller_1.deleteProject);