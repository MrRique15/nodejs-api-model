"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sample_js_1 = __importDefault(require("../models/sample.js"));
// ----------------------------------------------------------------
// Sample controller class
class Sample {
    constructor() { }
    ;
    get(req, res) {
        let message = sample_js_1.default.addDataToDB(req.body);
        res.send({ message: "GET route working... " + message });
    }
    ;
    post(req, res) {
        let message = sample_js_1.default.addDataToDB(req.body);
        res.send({ message: "POST route working... " + message });
    }
    ;
    put(req, res) {
        let message = sample_js_1.default.addDataToDB(req.body);
        res.send({ message: "PUT route working... " + message });
    }
    ;
    patch(req, res) {
        let message = sample_js_1.default.addDataToDB(req.body);
        res.send({ message: "PATCH route working... " + message });
    }
    ;
    del(req, res) {
        let message = sample_js_1.default.addDataToDB(req.body);
        res.send({ message: "DELETE route working... " + message });
    }
    ;
}
;
// ----------------------------------------------------------------
exports.default = new Sample();
