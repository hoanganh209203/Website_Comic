import React from 'react'

const TopComic = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-1 container">
      <div>
        <img
          className="w-full h-full object-cover"
          src="https://i.truyenvua.com/slider/290x191/slider_1559211185.jpg?gt=hdfgdfg&mobile=2"
          alt=""
        />
      </div>
      <div className="col-span-2 row-span-2">
        <img
          className="w-full h-full object-cover"
          src="https://i.truyenvua.com/slider/583x386/slider_1559213537.jpg?gt=hdfgdfg&mobile=2"
          alt=""
        />
      </div>
      <div>
        <img
          className="w-full h-full object-cover"
          src="https://i.truyenvua.com/slider/290x191/slider_1559213426.jpg?gt=hdfgdfg&mobile=2"
          alt=""
        />
      </div>
      <div>
        <img
          className="w-full h-full object-cover"
          src="https://i.truyenvua.com/slider/290x191/slider_1567830171.jpg?gt=hdfgdfg&mobile=2"
          alt=""
        />
      </div>
      <div>
        <img
          className="w-full h-full object-cover"
          src="https://i.truyenvua.com/slider/290x191/slider_1560493497.jpg?gt=hdfgdfg&mobile=2"
          alt=""
        />
      </div>
    </div>
  )
}

export default TopComic