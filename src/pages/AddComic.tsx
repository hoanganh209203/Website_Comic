import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { ErrorFormComic, FormComic } from '../types/comic'
import comicService from '../services/commic'
import productValidate from '../validation/product'
import { toast } from 'react-toastify'
import { Category, FormCate } from '../types/category'
import categoryService from '../services/category'
import { response } from 'express'

type Props = {}
const AddComic = (props: Props) => {
  const [cate,setCate] = useState<Category[]>([])
  const navgate = useNavigate()
  const [form, setForm] = useState<FormComic>({
    title: '',
    chapters: [
      {
        numberChapter: 0,
        link:''
      }
    ],
    description: '',
    images:'',
    categoryId:[],
    like: 0,
    follow: 0,
    status: '',
    rating: 0,
    author: '',
  })
  const [erorrForm, setErrorForm] = useState<ErrorFormComic>({});

  const handelChange =(
    e: React.ChangeEvent<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >
  )=>{ 
    const {name , value} = e.target;
    setForm({
      ...form,
      [name]: value
    })
    
    setErrorForm({ ...erorrForm, [name]: null });
  }
  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) =>{
    console.log(form);
    
    e.preventDefault()
    const { value, errorMessage } = productValidate(form);
    
    if (errorMessage) {
      setErrorForm(errorMessage);
      return;
  }
  comicService
  .create(value)
  .then(() => {
    toast.success("Created product successfully");
    navgate("/admin");
  })
  .catch((error) => {
    console.log(error);
  });
};
const [formCate, setFormCate] = useState<FormCate>({
  title: '',
})

useEffect(()=>{
  fetchComics()
},[])
const fetchComics = async () => {
const respone = await categoryService.getAll()
 setCate(respone.data)
}
  return (
    <form className="bg-white p-5 rounded-lg" onSubmit={onSubmit} >
    <div className="columns-3">
      <div className="mb-5">
        <label
          htmlFor="base-input"
          className="block mb-2 text-sm font-medium"
        >
          Title
        </label>
        <input
          type="text"
          name="title"
          onChange={handelChange}
          id="base-input"
          className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {erorrForm?.title && (
          <span className="text-sm text-red-400">* {erorrForm.title}</span>
        )}
      </div>
      <div className="mb-5">
        <label
          htmlFor="base-input"
          className="block mb-2 text-sm font-medium"
        >
        Tac gia
        </label>
        <input
          onChange={handelChange}
          type="text"
          name="author"
          id="base-input"
          className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {erorrForm?.author && (
          <span className="text-sm text-red-400">* {erorrForm.author}</span>
        )}
      </div>
      <div className="mb-5">
        <label
          htmlFor="base-input"
          className="block mb-2 text-sm font-medium"
        >
          Categories
        </label>
        <select
          onChange={handelChange}
          name="categoryId"
          className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          id=""
        >
          {cate.map((item)=>(<option value="">{item.title}</option>))}
        </select>
        {erorrForm?.categoryId && (
          <span className="text-sm text-red-400">* {erorrForm.categoryId}</span>
        )}
      </div>
    </div>
    <div className="mb-5">
      <label htmlFor="base-input" className="block mb-2 text-sm font-medium">
        Images
      </label>
      <input
        type="text"
        onChange={handelChange}
        name="images"
        id="base-input"
        className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      {erorrForm?.images && (
        <span className="text-sm text-red-400">* {erorrForm.images}</span>
      )}
    </div>
    <div className="mb-5">
      <label htmlFor="base-input" className="block mb-2 text-sm font-medium">
        Description
      </label>
      <textarea
        onChange={handelChange}
        name="description"
        id=""
        className="w-full border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        rows={10}
      ></textarea>
      {erorrForm?.description && (
        <span className="text-sm text-red-400">
          * {erorrForm.description}
        </span>
      )}
    </div>
    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
      Save
    </button>
  </form>
);
}

export default AddComic