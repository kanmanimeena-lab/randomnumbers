
import { RotateCcwClock } from "lucide-react"
import { Trash } from "lucide-react"



const History = (props) =>
{

  return(
    <>
<div className="border border-[#6B21A8] w-full mt-10 rounded-xl p-4">

<div className="flex items-center justify-between max-w-[640px] mx-auto">

    <div className="flex items-center gap-2">
      <RotateCcwClock size={22} className="text-[#302477]" />
      <p className="text-[#302477] font-bold text-xl">
        History
      </p>

          </div>

    <button onClick = {props.clearbutton} className="flex items-center gap-2 bg-[#C026D3] text-white px-4 py-2 rounded-lg">
      <Trash size={18} />
      Clear
    </button>

  </div>

  {props.history.length === 0 && (
    <p className="text-center text-[#6B21A8] font-bold text-xl mt-5">Ready to roll? Generate your first number!</p>
  )}

{props.history.map((item, index) => (
  <div key={index}>
    <p className="text-[#302477] font-bold border border-[#E9DDFC] bg-[#FAF7FF] mt-5 w-[40%] mx-auto p-3 rounded-lg">
      {index + 1}.{item}
    </p>
  </div>
))}

{props.history.length >= 5 && (
  <p className="text-center text-[#6B21A8] font-bold text-xl mt-5 relative">
    Five rolls completed! Keep rolling!
</p>

)}

</div>
</>
)
}
  


export default History