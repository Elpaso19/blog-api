import { Router } from "express";
import authRouter from "./auth.routes.js";

const router = Router();

router.get("/health",function(req,res){
    return res.status(200).json({
        sucess:true,
        message:"server is up and running"
    })
})
router.use("*",function(req,res){
    return res.status(404).json({
        success:false,
        message:`the requested route ${req.originalUrl} does not exist on this server or is not availiable for this method ${req.method.toLowerCase()}`
    })
})

router.use("/auth",authRouter)

const appRouter = router;

export default appRouter;
