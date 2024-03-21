import React, { useEffect, useState } from 'react'
import { Category } from '../types/category'
import categoryService from '../services/category'
import { FaCaretDown } from 'react-icons/fa'


const Menu = () => {
    const [categories,setCategories] = useState<Category[]>([])
    useEffect(()=>{
        fetchCategories()
    },[])

    const fetchCategories = async () => {
        try {
            const data = await categoryService.getAll();
            setCategories(data.data)
        } catch (error) {
            console.log(error);
            
        }
    }
  return (
    <div className="bg-neutral-800 relative font-normal">
      <ul className="flex items-center gap-3 text-white h-max container">
        <li className="px-3 py-3 hover:bg-orange-300 cursor-pointer">
          <p>Trang chủ</p>
        </li>
        <li className="px-3 py-3 hover:bg-orange-300 cursor-pointer group">
          <p className="flex items-center gap-1">
            Thể loại
            <span>
              <FaCaretDown />
            </span>
          </p>
          <div className="hidden absolute top-full left-0 bg-neutral-800 border-y border-white w-full p-3 group-hover:block duration-300">
            <ul className="grid grid-cols-8 gap-4 font-light">
              {categories.map((category, index) => (
                <li key={index}>
                  <a className="hover:text-orange-300" href="/">
                    {category.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li className="px-3 py-3 hover:bg-orange-300 cursor-pointer">
          <p>Xếp hạng</p>
        </li>
        <li className="px-3 py-3 hover:bg-orange-300 cursor-pointer">
          <p>Con gái</p>
        </li>
        <li className="px-3 py-3 hover:bg-orange-300 cursor-pointer">
          <p>Con trai</p>
        </li>
        <li className="px-3 py-3 hover:bg-orange-300 cursor-pointer">
          <p>Tìm truyện</p>
        </li>
        <li className="px-3 py-3 hover:bg-orange-300 cursor-pointer">
          <p>Lịch sử</p>
        </li>
        <li className="px-3 py-3 hover:bg-orange-300 cursor-pointer">
          <p>Theo dõi</p>
        </li>
        <li className="px-3 py-3 hover:bg-orange-300 cursor-pointer">
          <p>Thảo luận</p>
        </li>
        <li className="px-3 py-3 hover:bg-orange-300 cursor-pointer">
          <p>Fanpage</p>
        </li>
        <li className="px-3 py-3 hover:bg-orange-300 cursor-pointer">
          <p>Discord</p>
        </li>
      </ul>
    </div>
  );
}

export default Menu