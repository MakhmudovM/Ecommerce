import React, { useState } from "react";
import { BsCart3 } from "react-icons/bs";

import hero1 from "../assets/images/image-product-1.jpg";
import hero2 from "../assets/images/image-product-2.jpg";
import hero3 from "../assets/images/image-product-3.jpg";
import hero4 from "../assets/images/image-product-4.jpg";
import smhero1 from "../assets/images/image-product-1-thumbnail.jpg";
import smhero2 from "../assets/images/image-product-2-thumbnail.jpg";
import smhero3 from "../assets/images/image-product-3-thumbnail.jpg";
import smhero4 from "../assets/images/image-product-4-thumbnail.jpg";

import minus from "../assets/images/icon-minus.svg";
import plus from "../assets/images/icon-plus.svg";




const images = [hero1, hero2, hero3, hero4];
const smImages = [smhero1, smhero2, smhero3, smhero4];


const Hero = () => {
  const [img, setImg] = useState(images[1]);
  const [imgSm, setImgSm] = useState(smImages[1]);
  const [count, setCount] = useState(1);

  function setImage(e, index) {
    setImg(images[index]);
    setImgSm(images[index]);
  }

  const incrementFunc = () => {
    setCount(count + 1);
  };

  const decrementFunc = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  function handleSubmit(e) {
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.reload();
    e.preventDefault()
  }

  const cart = {
    image: imgSm,
    price: 125.0,
    title: "Fall Limited Edition Sneakers",
    count: count,
  };

  return (
    <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-32 mt-20">
      <div className="w-full lg:w-96 lg:h-96">
        <button
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          <img className="rounded-lg mb-3 w-full" src={img} alt="" />
        </button>
        <dialog
          id="my_modal_3"
          className="modal bg-black bg-opacity-60 flex items-center justify-center"
        >
          <div className="modal-box border-none overflow-hidden bg-transparent rounded-lg lg:grid">
            <form method="dialog flex">
              
            </form>

            <div>
              <img src={img} alt="" className="rounded-lg w-full" />
              
              
            </div>
            
          </div>
        </dialog>
        <div className=" lg:grid grid-cols-4 gap-8  sm:hidden md:hidden">
          {smImages.map((smImage, index) => (
            <img
              className="rounded-lg cursor-pointer"
              key={smImage}
              onClick={(e) => setImage(e, index)}
              src={smImage}
              alt=""
            />
          ))}
        </div>
      </div>
      <div className="w-full lg:w-96 md:w-3/4">
        <span className="text-warning text-xl font-medium">sneaker company</span>
        <h1 className="font-bold text-4xl mt-7 mb-8 text-black">
          Fall Limited Edition Sneakers
        </h1>
        <p className="text-sm text-slate-500 mb-6">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div>
          <div className="flex gap-6 items-start">
            <span className="text-2xl font-medium mb-3">$125.00</span>
            <span className="text-warning font-medium bg-orange-100 rounded py-1 px-3 mt-1">
              50%
            </span>
          </div>
          <p className="line-through text-xl text-black mb-8">$250.00</p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
          <div className="flex items-center gap-10  sm:mb-0">
            <button className="">
              <img src={minus} onClick={decrementFunc} alt="" />
            </button>
            <span>{count}</span>
            <button onClick={incrementFunc}>
              <img src={plus} alt="" />
            </button>
          </div>
          <button
            onClick={(e) => handleSubmit(e)}
            className="flex items-center btn w-full sm:w-56 bg-orange-400"
          >
            <img src="./public/icon-cart.svg" alt="" />
            <span className="text-white flex items-center gap-3"><BsCart3 className="w-5 h-5"/>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;