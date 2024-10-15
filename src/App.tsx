import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { incrementByValue, StateType } from "./redux"
function App() {
  const [val, setVal] = useState<number>(0)
  const  dispatch = useDispatch()
  const count = useSelector((state:StateType)=>state.count)

 const incrementByValueHandler = () =>{
  dispatch(incrementByValue(val))
 }

  return (
    <>
      <div>
        <h1>Toolkit</h1>
        <h1>{count}</h1>
        <button>+</button>
        <button>-</button>
        <input type="number" value={val} onChange={(e)=>setVal(Number(e.target.value))} />
        <button disabled={val<0} onClick={incrementByValueHandler}>Add</button>
      </div>
    </>
  )
}

export default App
