import React from 'react'

const Home = () => {
  return (
    <div>
      <div className=" w-full flex justify-center ">
    
    <img src="https://www.v3events.in/images/slider/v3_f1.jpg"
     className="relative"
    />
    <p className="absolute flex text-center font-semibold text-3xl text-white py-12">Best Event Planner in India</p>
    
   </div>
   {/* helo  */}
   <div className="text-center text-2xl py-2">
     <p className="uppercase "> welcome to events-
     <span className="text-pink-200"> best wedding & event mangement company in delhi ncr</span></p>
    </div>
    <div className=" flex justify-center">
      <img src="https://www.v3events.in/images/title-icon.png"

      />
    </div>
     {/* number section  */}
     <div className="mt-[40px]">
      <ul className="flex  justify-evenly items-center">
      <div className="bg-pink-200 py-8 px-[80px] text-center opacity-70 rounded-md">
      <p className="text-white font-semibold text-xl">Experinces</p>
      <li className="text-white font-semibold text-xl"> 20+</li>
      </div>
      <div className="bg-pink-200 py-8 px-[80px] text-center opacity-70 rounded-md">
      <p className="text-white font-semibold text-xl">Corporate Events</p>
      <li className="text-white font-semibold text-xl"> 300+</li>
      </div>
      <div className="bg-pink-200 py-8 px-[80px] text-center opacity-70 rounded-md">
      <p className="text-white font-semibold text-xl">Wedding</p>
      <li className="text-white font-semibold text-xl"> 400+</li>
      </div>
      <div className="bg-pink-200 py-8 px-[80px] text-center opacity-70 rounded-md">
      <p className="text-white font-semibold text-xl">Musical Concerts</p>
      <li className="text-white font-semibold text-xl"> 200+</li>
      </div>
       


      </ul>
     </div>
    


    </div>
    
  )
}

export default Home
