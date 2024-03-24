import React, { useEffect, useState } from 'react'
import { Comic } from '../types/comic'
import { Link, NavLink } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { HiOutlineStatusOnline } from "react-icons/hi";
import { AiFillLike } from "react-icons/ai";
import { RiUserFollowLine } from "react-icons/ri";
import { GrView } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";
import { PiWarningCircleFill } from "react-icons/pi";
import { MdLibraryBooks } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
type Props = {
    comic: Comic | null
}

const DetailComic = ({ comic }: Props) => {
console.log(comic)

    return (
        <section className='bg-neutral-800 rounded-md'>
            <div className='px-6'>
                <div className="text-sm flex gap-3 pt-6 pb-4">
                    <NavLink to={'/'}>
                        <span className="opacity-50 text-white pt-6">Trang Chủ</span>
                    </NavLink>
                    <span className='text-white'>/</span>
                    <span className='text-white'>{comic?.title}</span>
                </div>
                <div className="flex gap-7 text-white">
                    <div>
                        <img className="rounded-md" src={comic?.images} alt="" />
                    </div>
                    <div>
                        <h1 className="font-semibold text-xl mb-7">{comic?.title}</h1>
                        <ul className=''>
                            <li className='flex gap-[86px] '>
                                <p className='flex gap-2 items-center'><IoMdAdd />Tên khác</p>
                                <h2>{comic?.title}</h2>
                            </li>
                            <li className='flex gap-[99px]'>
                                <p className='flex gap-2 items-center'><FaUser />Tác giả</p>
                                <h2>{comic?.author}</h2>
                            </li>
                            <li className='flex gap-[75px]'>
                                <p className='flex gap-2 items-center'><HiOutlineStatusOnline />Tình trạng</p>
                                <h2>{comic?.status}</h2>
                            </li>
                            <li className='flex gap-[75px]'>
                                <p className='flex gap-2 items-center'><AiFillLike /> Lượt thích</p>
                                <h2>{comic?.like}</h2>
                            </li>
                            <li className='flex gap-[50px]'>
                                <p className='flex gap-2 items-center'><RiUserFollowLine />Lượt theo dõi</p>
                                <h2>{comic?.follow}</h2>
                            </li>
                            <li className='flex gap-[80px]'>
                                <p className='flex gap-2 items-center'><GrView />Lượt xem</p>
                                <h2>{comic?.status}</h2>
                            </li>
                        </ul>
                        <div className="">

                        {comic?.categoryId.map((item)=>(
                        <button>{item.title}</button>
                    ))}
                        </div>
                        <div className="mt-9 flex">
                            <button className='m-2 p-2 bg-lime-700 h-[40px] w-[150px] rounded-md flex justify-center gap-2 items-center'><MdLibraryBooks />Đọc từ đầu</button>
                            <button className='m-2 p-2 bg-rose-600 h-[40px] w-[150px] rounded-md flex justify-center gap-2 items-center'><FaHeart />Theo dõi</button>
                            <button className='m-2 p-2 text-center bg-fuchsia-600 h-[40px] w-[150px] rounded-md gap-2 flex justify-center items-center'><AiFillLike />Thích</button>
                        </div>
                  
                    </div>
                </div>

            </div>
            <div className='p-4 mt-9'>
                <h3 className='text-white flex gap-2 items-center text-xl italic'><PiWarningCircleFill />Giới thiệu</h3>
                <p className='text-white italic'>{comic?.description}</p>
            </div>
            <div>
                <div className="max-h-200 overflow-auto p-5">
                    <h2 className='text-white flex gap-2 items-center text-xl italic mb-5'><FaDatabase /> Danh sách chương</h2>
                    <div className='border rounded-md'>
                        {comic?.chapters.map((chap) => (
                            <div className="flex justify-between items-center gap-2 text-white border-b-2 m-3" key={comic._id}>
                                <p className=" text-white p-3">
                                    <Link className="flex justify-between items-center gap-2 hover:text-orange-300 " to={chap.link}>
                                        <p>
                                        Chương
                                        </p>
                                        {chap.numberChapter}
                                    </Link>
                                </p>
                                <div>{chap.createdAt.toString()}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailComic