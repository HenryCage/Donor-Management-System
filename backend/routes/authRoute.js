import { signup } from "../controllers/auth.controller";
import express from express;
const Router = express.Router()

Router.post('/', signup)

module.exports = Router