// 要有水平線跟泡泡元件，還要有幾個按鈕管控元件的新增/刪除，
// 下面的泡泡或許可以有距離的概念?
import { useState } from "react"

import HorizontalLine from "../compoents/HorizonLine";
import NavBar from "./NavBar";
import { fullContainer,firstLayer } from './Fishbubble.module.css'
import InputForm from "../compoents/InputForm";
import { AiFillPlusCircle } from "react-icons/ai";
import Bubble from "../compoents/bubble";

const Fishbubble = () =>{
  const defaultA1 = {uniId: 1, date: new Date().toISOString().substring(0, 10), official: "今天是個好日子"}
  const [a1, seta1]=useState([defaultA1])
  const [open, setOpen] = useState(false)
  const showFormHandler = () =>{
    setOpen(!open)
  }

  const b1 = a1.slice().sort((a, b) => new Date(a.date) - new Date(b.date));


return(
  <>
  <main className={fullContainer}>
    <NavBar/>
    {open && <InputForm seta1={seta1} setOpen={showFormHandler}/>}
    <div className={firstLayer}>
      <Bubble b1={b1} seta1={seta1} a1={a1}/>
      <HorizontalLine/>
      <div style={{position: 'absolute',
                  bottom: '3vh',
                  left: '50%',
                  marginLeft: '-50px',
                  zIndex: '0'}}>
      <AiFillPlusCircle onClick={showFormHandler} style={{cursor:'pointer',width: '5vh', height: '5vh'}}/>
      </div>
    </div>                                  
  </main>
  </>
)
}

export default Fishbubble