import axios from "axios";
import { API } from "../constants/constant";

export const categoryService = {
    getAll(){
        return axios.get(API+"/category")
    }
}

export default categoryService