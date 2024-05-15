import hero1 from '../assets/images/image-product-1.jpg'
import hero1min from '../assets/images/image-product-1-thumbnail.jpg'
import hero2min from '../assets/images/image-product-2-thumbnail.jpg'
import hero3min from '../assets/images/image-product-3-thumbnail.jpg'
import hero4min from '../assets/images/image-product-4-thumbnail.jpg'
import cart from '../assets/images/icon-cart.svg'

import React, { useState } from 'react';


function Home() {
    const [count, setCount] = useState(0);
    const [submittedCount, setSubmittedCount] = useState(null);
  
    const increment = () => {
      setCount(count + 1);
    };
  
    const decrement = () => {
      setCount(count - 1);
    };
  
    const handleSubmit = () => {
      setSubmittedCount(count);
    };
  return (
    <div className='pt-8 font-custom-font'>
        <div className='flex justify-center items-center gap-32'>
            <div className='w-[445px] h-[565px]'>
               <div>
                
                {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="" onClick={()=>document.getElementById('my_modal_2').showModal()}><img src={hero1} alt="snacers" className='w-[445px] h-[445px] rounded-2xl'/></button>
<dialog id="my_modal_2" className="modal">
  <div className="modal-box">
  <img src={hero1} alt="snacers" className='w-[445px] h-[445px] rounded-2xl'/>
  </div>
 
</dialog>
               </div>
               <div>
                <ul className='flex gap-8 mt-8'>
                    <li>
                        <img className=' w-[88px] h-[88px] rounded-xl hover:opacity-15 active:opacity-30' src={hero1min} alt="" />
                    </li>
                    <li>
                    <img className=' w-[88px] h-[88px] rounded-xl hover:opacity-15 active:opacity-30' src={hero2min} alt="" />

                    </li>
                    <li>
                    <img className=' w-[88px] h-[88px] rounded-xl hover:opacity-15 active:opacity-30' src={hero3min} alt="" />

                    </li>
                    <li>
                    <img className=' w-[88px] h-[88px] rounded-xl hover:opacity-15 active:opacity-30' src={hero4min} alt="" />

                    </li>
                </ul>
               </div>
            </div>
            <div className='w-[445px] h-[426px]'>
                 {/*content */}
                 <div>
                    <h4 className='font-bold tracking-[4px]  text-xl text-orange-500 leading-5 mb-7'>Sneaker Company</h4>
                    <h1 className='font-bold text-4xl leading-10 text-neutral-950 mb-8'>Fall Limited Edition Sneakers</h1>
                    <p className='text-base leading-6 mb-6'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                </div>
                {/*price */}
                <div className='mb-8'>
                    <span className='font-bold text-xl leading-8 text-neutral-950 mr-4'>$125.00</span> <span className=' bg-orange-100 text-orange-500 p-1 rounded px-3 '>50%</span>
                    <br />
                    <span className='line-through opacity-35 text-xl'>$250.00</span>
                </div>
                {/*buttons */}
                <div className='flex gap-2'>
                    <div className='mr-5'>
                        <button className='btn text-orange-500' onClick={decrement}>-</button>
                        <span className='mx-4'>{count}</span>
                        <button className='btn text-orange-500' onClick={increment}>+</button>
                    </div>
                    <button className='btn bg-orange-500 text-white px-20' onSubmit={handleSubmit}><img src={cart} alt="" />add to cart</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home