// 要有水平線跟泡泡元件，還要有幾個按鈕管控元件的新增/刪除，
// 下面的泡泡或許可以有距離的概念?
import { useState } from "react"
import DataLine from "../compoents/DataLine";
import HorizontalLine from "../compoents/HorizonLine";
import NavBar from "./NavBar";
import { fullContainer,firstLayer } from './Fishbubble.module.css'
import InputForm from "../compoents/InputForm";
import { AiFillPlusCircle } from "react-icons/ai";
import Bubble from "../compoents/bubble";

const Fishbubble = () =>{

  const [a1, seta1]=useState([])
  const [open, setOpen] = useState(false)
  const showFormHandler = () =>{
    setOpen(!open)
  }

  const b1 = a1.slice().sort((a, b) => new Date(a.date) - new Date(b.date));

  
  // const c1 = b1.map((event,index)=> {
  //   const even = index % 2 === 0
  //   return (
  //       <div key={event.uniId} className="column is-2 mx-3">
  //        <DataLine/>
  //       <p className="has-text-weight-bold">{event.date}</p>
  //       <p>{event.official}</p>
  //       <p>{event.personal}</p>
  //       </div>
  //   )
  // })
return(
  <>
  <main className={fullContainer}>
    <NavBar/>
    {open && <InputForm seta1={seta1} setOpen={showFormHandler}/>}
    <div className={firstLayer}>
      <Bubble b1={b1}/>
      <HorizontalLine/>
      {/* {c1} */}

      <div style={{position: 'absolute',
                  bottom: '3vh',
                  left: '50%',
                  marginLeft: '-50px',
                  zIndex: '0'}}>
      <AiFillPlusCircle size="5vh" onClick={showFormHandler} style={{cursor:'pointer'}}/>
      </div>
    </div>                                  
  </main>
  </>
)
}

export default Fishbubble