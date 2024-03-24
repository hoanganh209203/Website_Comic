import React, { useEffect, useState } from 'react'
import { Comic } from '../types/comic';
import comicService from '../services/commic';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import ProductsItem from './ProductsItem';

type Props = {}

const ComicList = () => {
    const [page, setPage] = useState(1);
    const [totalComic, setTotalComic] = useState();
    const [comic,setComic] = useState<Comic[]>([])
    const limit = 10;

    useEffect(()=>{
        fetchComics();
    },[])
    const fetchComics = async () => {
        const response = await comicService.getListComic(page,limit);
        setComic(response.data)
        setTotalComic(response.headers["x-total-count"]);
    }
  return (
    <div className="container mt-5">
      <div className="flex items-center gap-2 text-white font">
        <FaCloudDownloadAlt fontSize={28} />
        <h2 className="font-bold text-xl">Truyện Mới Cập Nhật</h2>
      </div>
      <div className="grid grid-cols-6 gap-x-3 gap-y-5 mt-3">
        {comic.map((comic, index) => (
          <ProductsItem key={index} comic={comic} />
        ))}
      </div>
      <div className="">
        
         {/* <button onClick={()=>{setPage(page - 1)}}>PrevPage</button>
         <button onClick={()=>{setPage(page + 1)}}>NextPage</button> */}
      </div>
    </div>
  )
}

export default ComicList