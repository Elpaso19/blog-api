import Joi from "joi";




export const signUpSchema=Joi.object({
    emaail:Joi.string().email().required(),
    username:Joi.string().alphanum().min(3).max(20).required(),
    password:Joi.string().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.[@$!%*?&])[A-Za-z\\d@$!%*?&],{8,$}')).required(),
    name:Joi.string().min(3).max(25).required(),
    confirmPassword:Joi.ref("password"),
    role:Joi.string().valid("admin","user")

})
export const signInSchema=Joi.object({
    
    identifier:Joi.string().required(),
    

    password:Joi.string().required()
})
