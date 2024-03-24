export interface Comic {
  _id: string,
  title: string,
  chapters: [
    {
      numberChapter: number,
      link: string,
      createdAt: string
    }
  ],
  description: string,
  rating: number,
  author: string,
  categoryId: [
    {
      _id: string,
      title: string,
      updatedAt: string
    }
  ],
  images: string,
  goodComic: boolean,
  like: number,
  follow: number,
  status: string,
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
  categoryId: [],
  like: number,
  follow: number,
  status: string,
  rating: number,
  author: string,
}

export interface ErrorFormComic {
  title?: string,
  chapters?: [
    {
      numberChapter?: number,
      link?: string
    }
  ],
  description?: string,
  images?: string,
  categoryId?: string[],
  like?: number,
  follow?: number,
  status?: string,
  rating?: number,
  author?: string,
}


export interface ListComic {
  total: number,
  page: number,
  limit: number,
  data: Comic[],
  
}