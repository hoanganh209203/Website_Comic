import axios from "axios";
import { API } from "../constants/constant";
import { https } from "../configs/axios";
import { Comic } from "../types/comic";

const comicService = {
    getListComic(page=1,limit=30){
        return https.get(API+`/products?_limit=${limit}&_page=${page}`)
    },
    goodComics(){
        return https.get(API+`/products?goodComic=true`)
    },
    getDetail(id:string){
        return https.get(API+`/products/${id}`)
    },
}
export default comicService