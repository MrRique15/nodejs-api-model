import express from "express";
import sampleRoutes from "./routes/sample";
import { Request, Response } from "express";
const app = express();

// ----------------------------------------------------------------
// Root route
app.get("/", (req: Request, res: Response) => {
    res.send({ message: "Server Running, connection OK!" });
});
// ----------------------------------------------------------------
// Routes to be used
app.use("/sample", sampleRoutes);
// ----------------------------------------------------------------
// Server listening on port 3000
app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running on port " + (process.env.PORT || 3000));
});
// ----------------------------------------------------------------