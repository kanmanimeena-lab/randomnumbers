import {useState} from "react"
import rays from "./assests/image/rays.png"
import { Shuffle } from "lucide-react"
import History from "./history.js"

const Random = () => {

const [num , setnum] = useState("")

const [history , sethistory] = useState([])

const buttonhandling = () =>
  {
 const random = (Math.floor(Math.random() * 100 + 1))
setnum(random);
sethistory([...history, random]);



  }; 

  const clearbutton = () =>{

    sethistory([]);
  }

  return(
    <>
    <div className = "flex flex-col justify-between items-center">

<div className = "flex flex-row justify-center items-center">
<img src={rays} className= "w-16 h-16 self-center lg:w-25 lg:h-25" alt="rays" />

<h1 className = "text-[#58118A] mt-10 font-bold text-4xl border-2 border-[#FFB800] rounded-xl px-10 py-2 lg:px-20 lg:py-8 lg:text-6xl bg-[#FFF0C2]"

>{num}</h1>

 <img src={rays} className="w-16 h-16 top-10 self-center scale-x-[-1] lg:h-25 lg:w-25" alt="rays" />
</div>

<div className = "relative">
  <Shuffle size = {22} className = "absolute top-12 text-white left-4" />

<button onClick = {buttonhandling} 

className = "bg-[#6B21A8] mt-10 px-12 py-2 rounded-full text-white font-semibold text-xl"
>Generate Number</button>
</div>

<History history = 
            {history}
             clearbutton = {clearbutton}
            />


</div>
    </>
  )
}
export default Random