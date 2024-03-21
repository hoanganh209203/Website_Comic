import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import { Comic } from "../types/comic";
import ProductsItem from "./ProductsItem";
import { useEffect, useState } from "react";
import comicService from "../services/commic";
const GoodComic = () => {
  // const date = new Date();
  // console.log(date.toISOString());
  const [goodComics, setGoodComics] = useState<Comic[]>([]);
  useEffect(() => {
    fetchComics();
  }, []);

  const fetchComics = async () => {
    const response = await comicService.goodComics();
    setGoodComics(response.data);
  };
  return (
    <div className="mt-8 container">
      <div className="flex items-center text-xl text-red-500 gap-2">
        <span>
          <FaStar />
        </span>
        <h1 className="font-bold">Truyện Hay</h1>
      </div>
      <div className="flex">
        <Swiper
          slidesPerView={6}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
        >
          {goodComics.map((comic, index) => (
            <SwiperSlide key={index}>
              <div className="py-2">
                <ProductsItem comic={comic} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div>
          
        </div> */}
      </div>
    </div>
  );
};

export default GoodComic;
