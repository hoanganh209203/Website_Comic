import React, { useContext, useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import comicService from '../services/commic';
import { Comic } from '../types/comic';
import { toast } from 'react-toastify';
import { API } from '../constants/constant';


type Props = {}

const ListComic = (props: Props) => {
    const [comic , setComic] = useState<Comic[]>([])
    useEffect(()=>{
        fetchComics();
    },[])
    const fetchComics = async () => {
        const response = await comicService.getListComic();
        setComic(response.data)
        console.log(response.data);
        
    }
    return (
        <div className="bg-white  rounded-xl p-5">
      <div className="mb-10">
        <h2 className="text-xl font-semibold">Admin Product List</h2>
      </div>
      <Link className="mb-3" to="/admin/add">
        <button className="px-3 h-10 bg-green-600 hover:bg-green-400 rounded-md text-black font-semibold">
          Add new products
        </button>
      </Link>
      <table className="table-auto mt-5">
        <thead>
          <tr>
            <th>Image</th>
            <th className="w-[300px] text-start">Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
  {comic.map((item)=>(
    <tr key={item._id}>
    <td>
      <img
        className="w-20 h-20 object-cover"
        src={item.images}
        alt=""
      />
    </td>
    <th>{item.title}</th>
    <td>{item.status}</td>
    {/* {item.categoryId.map((cate)=>(
        <td>
            {cate.title}
        </td>
    ))} */}
    <td>
      <p className="overflow-hidden text-ellipsis h-12">
        {item.author}
      </p>
    </td>
  </tr>
  ))}
 
 </tbody>
      </table>
    </div>
    )
}

export default ListComic