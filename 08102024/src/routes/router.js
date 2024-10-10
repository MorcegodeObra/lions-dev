import { Router } from "express"
import routerVivo from "../routes/rotaVivo.js"

const router = Router();

router.use("/vivo",routerVivo)

export default router