import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetUserInfoController } from "./controllers/GetUserController";
import { LoginUserController } from "./controllers/LoginUserController";
import { authentication } from "./middleware/auth";

const router = Router();

const createUserController = new CreateUserController();
const loginUserController = new LoginUserController();
const getUserInfoController = new GetUserInfoController();

router.post("/users", createUserController.handle);

router.post("/login", loginUserController.handle);
router.get("/users/:userId", getUserInfoController.handle);

// rota com authentication
router.get("/users/profile/:userId", authentication, getUserInfoController.handle);

export default router;
