import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Comic } from '../types/comic';
import { spinnerCT } from '../App';
import comicService from '../services/commic';
import DetailComic from '../components/DetailComic';

type Props = {}

const DetailPage = (props: Props) => {
    const param = useParams();
    const _id = String(param.id);
    console.log(_id);
    
    const [dispatch] = useContext(spinnerCT);
  const [comic, setComic] = useState<Comic | null>(null);
  useEffect(() => {
    // dispatch({ type: "show" });
    comicService.getDetail(_id).then((response) => {
      setComic(response.data.data);      
    //   dispatch({ type: "colse" });
    });
  }, []);
  
  return (
    <div className="p-6 rounded-xl">
      <DetailComic key={comic?._id} comic={comic} />
    </div>
  )
}

export default DetailPage