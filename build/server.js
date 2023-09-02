"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sample_1 = __importDefault(require("./routes/sample"));
const app = (0, express_1.default)();
// ----------------------------------------------------------------
// Root route
app.get("/", (req, res) => {
    res.send({ message: "Server Running, connection OK!" });
});
// ----------------------------------------------------------------
// Routes to be used
app.use("/sample", sample_1.default);
// ----------------------------------------------------------------
// Server listening on port 3000
app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running on port " + (process.env.PORT || 3000));
});
// ----------------------------------------------------------------
