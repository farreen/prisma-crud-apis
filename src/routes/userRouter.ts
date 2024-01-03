import { Router } from "express";
import {getAllUsers, createUsers, deleteUsers, updateUsers} from '../controllers/userController'

const userRouter = Router();

userRouter.get("/allUsers", getAllUsers);
userRouter.post("/create", createUsers);
userRouter.delete("/:id", deleteUsers);
userRouter.put("/:id", updateUsers);



export default userRouter;