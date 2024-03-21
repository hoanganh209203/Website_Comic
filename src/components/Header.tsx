import React from 'react'
import { FaSearch } from "react-icons/fa";



const Header = () => {
  return (
    <div className="flex items-center justify-between container py-3 bg-black">
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <img
            className="rounded"
            width={30}
            height={30}
            src="https://st.truyenqqvn.com/template/frontend/images/logo-icon.png"
            alt=""
          />
          <div className="bg-gradient-to-r from-[#00d4ff] to-[#79095c] bg-clip-text ">
            <p className="text-xl leading-9 font-bold text-transparent font-mono font-pacifico">
              Hoang Em
            </p>
          </div>
        </div>
        <div className="w-[400px] rounded-full bg-neutral-600 h-10 flex items-center pl-3">
          <input
            placeholder="Bạn muốn tìm truyện gì ?"
            className="bg-transparent w-[90%] outline-none text-gray-400"
            type="text"
          />
          <button className="text-white">
            <FaSearch />
          </button>
        </div>
      </div>
      <div className="flex gap-3">
        <button className="rounded-lg w-20 h-10 bg-blue-400 text-white text-xs font-medium">
          Đăng kí
        </button>
        <button className="rounded-lg w-20 h-10 bg-blue-400 text-white text-xs font-medium">
          Đăng nhập
        </button>
      </div>
    </div>
  )
}

export default Header