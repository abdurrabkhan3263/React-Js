import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export function Card({ id, img, value }) {
  return (
    <>
      <div
        className="h-[55vh] w-[22%] bg-blue-300 rounded-lg overflow-hidden relative cursor-pointer"
        key={id}
      >
        <NavLink to={`/more/:${id}`}>
          <div className="absolute h-full overflow-hidden w-full">
            <img
              src={img}
              alt="poster"
              className="object-cover w-full h-full"
            />
          </div>
        </NavLink>
        <div className="absolute w-full  text-white text-[30px] font-bold leading-7 bottom-[20px]  flex items-center justify-center">
          <h1 className="text-center p-[10px] bg-black w-[80%] rounded-xl">
            {(value && value.title) || value.name}
          </h1>
        </div>
        <div className="absolute top-0 right-0 mr-[10px] mt-[10px] text-white text-[20px]">
          <FaHeart />
        </div>
        <div className="absolute w-[50px] h-[50px] bg-red-600 flex items-center justify-center ml-[10px] mt-[10px] rounded-full">
          <p className="">{value && value.vote_average}</p>
        </div>
      </div>
    </>
  );
}
