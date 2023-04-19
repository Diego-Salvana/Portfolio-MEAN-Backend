"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const mongoConnection_1 = require("./database/mongoConnection");
const PORT = process.env.PORT;
const app = (0, express_1.default)();
(0, mongoConnection_1.dbConnection)()
    .then(() => console.log('DB conectada 📖'))
    .catch((err) => {
    console.log(err);
    throw new Error('Error al inicializar DB');
});
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(routes_1.router);
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
