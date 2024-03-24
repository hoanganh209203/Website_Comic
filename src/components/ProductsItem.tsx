import React from 'react'
import { Comic } from '../types/comic'
import { NavLink } from 'react-router-dom'

type Props = {
    comic:Comic
}
const ProductsItem = ({comic}: Props) => {
  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden rounded group-hover:shadow-[0px_0px_14px_3px_rgba(253,186,116,0.7)] duration-200">
      <NavLink to={`comic/${comic._id}`}>
        <img
          className="group-hover:scale-105 duration-200"
          src={comic.images}
          alt=""
        />
        </NavLink>
      </div>

      <div className="text-white text-center mt-1">
        <NavLink to={`comic/${comic._id}`}>
        <h1 className="font-bold whitespace-nowrap overflow-hidden text-ellipsis w-[96%]">
          {comic.title}
        </h1>
        </NavLink>
        <p className="text-sm text-gray-400 font-medium">Chương: Vô tận</p>
      </div>
    </div>
  )
}

export default ProductsItem