import * as authService from './auth.service.js '
import Validator from '../lib/classes/validator.class.js'
import { ValidationException } from "../lib/classes/errors.class.js"
import { asyncWapper } from '../lib/utils.js'
import { signInSchema, signUpSchema } from './auth.request.js'



export const signUp=asyncWapper(async(req,res)=>{
    const {errors,value}=Validator.validate(signUpSchema,req.body)

    if(errors) throw new ValidationException('the request failed with the following errors',errors)

        const user= await authService.createNewUserRecord(value)

        return res.status(201).json({
            success:true,
            message:"new user record created successfully",
            data:{
                username:user.name,
                emaail:user.email,
                role:user.role
            }
        })


})



export const signIn=asyncWapper(async(req,res)=>{
    const {errors,value}=Validator.validate(signInSchema,req.body)
    if(errors) throw new ValidationException('the request failed with the following errors',errors)

        const token =await authService.authenticateUser(value)

        res.cookie("token",token)
        return res.status(200).json({
            success:true,
            message:"user login successfully"
        })

})
