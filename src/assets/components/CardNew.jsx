/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

export default function CardNew({ date, theme, news }) {
  const [showIcon, setShowIcon] = React.useState(false);
  const handleIcon = () => setShowIcon(!showIcon)
  return (
    <section className="font-inter font-bold flex flex-col justify-center w-full bg-dark-50 max-w-5xl p-10 rounded-lg border mb-5 border-dark-30 hover:border-brand duration-300">
      <div className="w-full flex justify-between items-center text-brand">
        <span className="text-sm ">{date}</span>
        <button onClick={handleIcon} type="button" className="flex p-2 hover:bg-brand/20 rounded-full duration-700">
          {!showIcon && <FaRegHeart className=" text-lg duration-500" />}
          {showIcon && <FaHeart className="text-lg duration-500" />}
        </button>
      </div>
      <div className="flex flex-col">
        <h2 className="text-dark-10 mb-4 text-lg">{theme}</h2>
        <p className="text-dark-20 text-sm font-thin">{news}</p>
      </div>
    </section>
  );
}
