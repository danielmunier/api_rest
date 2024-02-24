import { Router } from "express";
import AuthController from "./controllers/AuthController";
const routes = Router()

routes.post("/register", AuthController.register)



export default routes