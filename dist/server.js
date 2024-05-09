"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.get('/server/time', async (req, res, next) => {
    res.json({ time: new Date().toISOString() });
});
app.get('/hello/:name', async (req, res, next) => {
    const { name } = req.params;
    res.json({ message: `Hello ${name}` });
});
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
