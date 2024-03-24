import Joi from "joi"
import { FormComic } from "../types/comic"


const productSchema = Joi.object<FormComic>({
    title: Joi.string().required().messages({
        "string.empty": "Please fill in the title field."
    }),
    author: Joi.string().required().messages({
        "string.empty": "Please fill in the title field."
    }),
    description: Joi.string().required().messages({
        "string.empty": "Please fill in the description field."
    }),
    chapters: Joi.array().required().messages({
        "number.base": "Please fill in the price field.",
        "number.min":"The price must be greater than 0."
    }),
    categoryId: Joi.array().items(Joi.string()),
    images: Joi.string().required().messages({
        "string.empty": "Please fill in the image field."
    }),
}).options({abortEarly:false})

const productValidate = (data:FormComic)=>{
    const {value,error} = productSchema.validate(data)
    console.log(error?.details);
    
    let errorMessage:{ [key: string | number]:any } = {}
    if(error){
        error.details.forEach(detail =>{
            errorMessage[detail.path[0]] = detail.message
        });
    }
    if(Object.keys(errorMessage).length > 0){
        return {value,errorMessage}
    }
    return {value,errorMessage:null}
    
}

export default productValidate