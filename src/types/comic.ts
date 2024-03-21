export interface Comic{
    _id: string,
    title: string,
    chapters: [
      {
        numberChapter: number,
        link: string
      }
    ],
    description: string,
    rating: number,
    author: string,
    categoryId:string[],
    images: string,
    goodComic: boolean,
    like:number,
    follow:number,
    status:string,
}

export interface FormComic {
  title: string,
  chapters: [
    {
      numberChapter: number,
      link: string
    }
  ],
  description: string,
  images: string,
  categoryId:string[],
}

export interface ErrorFormProduct{
  title?: string,
  chapters?: [
    {
      numberChapter?: number,
      link?: string
    }
  ],
  description?: string,
  images?: string,
  categoryId?:string[],
}

export interface ListComic{
    total:number,
    page:number,
    limit:number,
    data:Comic[]
}