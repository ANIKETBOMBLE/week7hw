
import './App.css'
import { useState } from 'react'
import React from 'react';
import  Componuts  from './Componuts.jsx';



function App() {
 const [count, setCount] = useState(0);




return (
  <>
      
      <nav className="flex justify-around items-center bg-gray-900 p-4 fixed w-full top-0  left-0 z-50 space-x-8"><div className="logo-div flex items-center gap-2"><span className="">
        </span><h2 className="text-2xl font-semibold cursor-pointer text-white">GeekFoods</h2></div><ul className="flex gap-15 text-white font-medium  "><li className="hover:text-blue-500"><a href="/Home" data-discover="true">Home</a></li><li className="hover:text-blue-500"><a href="/Quote" data-discover="true">Quote</a></li><li className="hover:text-blue-500 text-blue-800"  ><a href="/Foods" data-discover="true">Foods</a></li><li className="hover:text-blue-500"><a href="/R" data-discover="true">Restaurent</a></li><li className="hover:text-blue-500"><a href="/Contact" data-discover="true">Contact</a></li></ul><div className="nav-btn"><button className="btn w-32 p-2 rounded text-white bg-blue-700 font-medium hover:bg-blue-800 ">Get Started</button></div>
        </nav> 
      <main className='mt-20'>
      
      <section className=''>
        <Componuts  />
        
        </section> 
      
      </main>
      </>
)
}

export default App

