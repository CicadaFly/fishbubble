// 要有水平線跟泡泡元件，還要有幾個按鈕管控元件的新增/刪除，
// 下面的泡泡或許可以有距離的概念?
// 目標模組：有個form去生成泡泡位置，包含類別是考試日期或是班內日期

import { useState } from "react"
import DataLine from "../compoents/DataLine";
import HorizontalLine from "../compoents/HorizonLine";
import NavBar from "./NavBar";

const Fishbubble = () =>{

  const [a1, seta1]=useState([])
  const InputForm = ()=>{
    function nextId() { return new Date().getTime() }
    const submitHandler = (event) =>{
      event.preventDefault()
      const formData = {
        "uniId":nextId(),
        "date":event.target.date.value,
        "official":event.target.official.value,
        "personal":event.target.personal.value};

      seta1(preva1 => [...preva1, formData])
      
    }
    return(
      <form onSubmit={submitHandler}>
        <div className="field">
          <label>日期</label>
          <input type='date' className="input" name="date" defaultValue={new Date().toISOString().substring(0, 10)}/>
        </div>
        <div className="field">
          <label>官方內容</label>
          <input type='text' className="text" name="official"/>
        </div>
        <div className="field">
          <label>個人內容</label>
          <input type='text' name="personal"/>
        </div>
        <button type="submit">OK</button>
      </form>
    )
  }

  const b1 = a1.slice().sort((a, b) => new Date(a.date) - new Date(b.date));

  const c1 = b1.map((event,index)=> {
    const even = index % 2 === 0
    return (
        <div key={event.uniId} className="column is-one-fifth mx-3">
         <DataLine/>
        <p className="has-text-weight-bold">{event.date}</p>
        <p>{event.official}</p>
        <p>{event.personal}</p>
        </div>
    )
  })
return(
  <>
  <NavBar/>
  <HorizontalLine/>

  <InputForm/>
  <div className="columns has-text-centered is-centered">
  {a1.length > 0 && c1}
  </div>

  </>
)
}

export default Fishbubble