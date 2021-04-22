import { Router } from "express";
import adminRoutes from "./admin";
const router = Router();
import rateLimit from "express-rate-limit";

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

export default function () {
    router.use("/admin", adminRoutes());
    return router;
};

