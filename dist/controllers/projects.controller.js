"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProject = exports.updateProject = exports.createProject = exports.getProjects = exports.getProject = void 0;
const error_handle_1 = require("../utils/error.handle");
const projectsSvc = __importStar(require("../services/projects.service"));
const getProjects = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseItems = yield projectsSvc.getAll();
        res.send(responseItems);
    }
    catch (err) {
        (0, error_handle_1.handleHttpError)(res, 'ERROR_GET_PROJECTS', err);
    }
});
exports.getProjects = getProjects;
const getProject = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const responseItem = yield projectsSvc.getById(id);
        responseItem
            ? res.send(responseItem)
            : res.status(400).send('PROJECT_NOT_FOUND');
    }
    catch (err) {
        (0, error_handle_1.handleHttpError)(res, 'ERROR_GET_PROJECT', err);
    }
});
exports.getProject = getProject;
const createProject = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseItem = yield projectsSvc.insert(body);
        res.status(201).send(responseItem);
    }
    catch (err) {
        (0, error_handle_1.handleHttpError)(res, 'ERROR_CREATE_PROJECT', err);
    }
});
exports.createProject = createProject;
const updateProject = ({ params, body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const responseItem = yield projectsSvc.update(id, body);
        responseItem
            ? res.send(responseItem)
            : res.status(400).send('PROJECT_NOT_FOUND');
    }
    catch (err) {
        (0, error_handle_1.handleHttpError)(res, 'ERROR_UPDATE_PROJECT', err);
    }
});
exports.updateProject = updateProject;
const deleteProject = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const responseItem = yield projectsSvc.deleteById(id);
        responseItem
            ? res.send({ delete: 'ok' })
            : res.status(400).send('PROJECT_NOT_FOUND');
    }
    catch (err) {
        (0, error_handle_1.handleHttpError)(res, 'ERROR_DELETE_PROJECT', err);
    }
});
exports.deleteProject = deleteProject;
