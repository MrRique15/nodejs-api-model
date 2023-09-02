"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// ----------------------------------------------------------------
// This is the router file for the sample route
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// ----------------------------------------------------------------
// Controller to be used
const sample_1 = __importDefault(require("../controllers/sample"));
// ----------------------------------------------------------------
// Model routes to be used
router.get("/get", sample_1.default.get);
router.post("/post", sample_1.default.post);
router.put("/put", sample_1.default.put);
router.patch("/patch", sample_1.default.patch);
router.delete("/delete", sample_1.default.del);
// ----------------------------------------------------------------
// Exporting the router
exports.default = router;
