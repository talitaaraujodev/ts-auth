import { Router } from "express";
import UserController from "./app/controllers/UserController";
import authMiddleware from "./app/middlewares/authMiddleware";
import AuthController from "./app/controllers/AuthController";
const router = Router();

router.post("/users", UserController.store);
router.post("/auth", AuthController.authenticate);
router.get("/users", authMiddleware, UserController.index)
export default router;