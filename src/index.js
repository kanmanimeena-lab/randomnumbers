import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Random from "./randomnumber"
import { Dices } from "lucide-react"
import rays from "./assests/image/rays.png"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
<div className = "bg-[#302477] w-[full] h-[220px]">

<div className = "relative">
    <img src={rays} className="w-10 h-10 top-10 left-[173px] absolute lg:hidden" alt="rays" />

<div className = "flex flex-col items-center justify-between">
   <Dices size={85} color="white" strokeWidth={2.5} className = "mt-5" />

  <h1 className = "text-white font-bold text-3xl mt-3">Random Number Generator</h1>
  <p className = "text-gray-50 text-sm">Generate a random number within your range</p>
  </div>
</div>
</div>
  
  <div className = "flex gap-8 mt-10 justify-center items-center">

    
    <div>
    <label className = "block bg-pink-200 rounded-md font-semibold text-center py-2 w-36 lg:w-52">From</label>

    <input className = "border border-[#C5C9D8] rounded-lg p-2 w-36 lg:w-52 mt-3" type = "number" placeholder = {1}/>
</div>
  
   <div>
    <label className = "block bg-pink-200 rounded-md font-semibold text-center py-2 w-36 lg:w-52">To</label>
    <input className = "border border-[#C5C9D8] rounded-lg p-2 w-36 lg:w-52 mt-3" type = "number" placeholder = {100}/>
</div>

</div>


  <Random/>
  
</>
);



