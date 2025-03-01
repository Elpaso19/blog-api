import {Router} from "express"
import { signIn, signUp } from "../auth/auth.controller.js";



const router=Router()


router.post("/sign-up",signUp)
router.post("/sign-in",signIn)

const authRouter=router
export default authRouter;