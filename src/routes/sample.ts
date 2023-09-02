// ----------------------------------------------------------------
// This is the router file for the sample route
import express from "express";
const router = express.Router();
// ----------------------------------------------------------------
// Controller to be used
import sample from "../controllers/sample";
// ----------------------------------------------------------------
// Model routes to be used
router.get("/get", sample.get);

router.post("/post", sample.post);

router.put("/put", sample.put);

router.patch("/patch", sample.patch);

router.delete("/delete", sample.del);
// ----------------------------------------------------------------
// Exporting the router
export default router;