import { useState } from 'react'
import DUMMY_DATA from './DUMMY_DATA'
import {risingForm} from './InputForm.module.css'

// 引入官方考情
// 簡單的表格
// 先有個人事件跟官方事件的欄位，之後再想辦法整合
// 存在官方考情快捷鈕
const InputForm = ({seta1,setOpen})=>{
  const [officialInput, setOfficialInput] = useState(false)
  const officialSwitch = () =>{
    setOfficialInput(!officialInput)
  }
  function nextId() { return new Date().getTime() }

  const submitHandler = (event) =>{
    event.preventDefault()
    const formData = new FormData(event.target);
    // 因應switch的切換，personal跟official會有擇一undefined的狀況，所以用fromEntries把資料全取再分類，而非一開始就分類去找
    const formValues = Object.fromEntries(formData.entries());
    const newFormData = {
      uniId: nextId(),
      date: formValues.date,
      official: formValues.official,
      personal: formValues.personal
    };
    seta1(prevData => [...prevData, newFormData]);
    event.target.reset()
  }
  const fastInput = ()=>{
    seta1(DUMMY_DATA)
  }
  let field;
  if (!officialInput) {
    field = <><label>官方行程</label><input type='text' className="text input" name="official"/></>
  } else {
    field = <><label>個人行程</label><input type='text' className="input" name="personal"/></>
  }
  return(
    <div className={risingForm}>
    <form onSubmit={submitHandler} >
      <div className="field">
        <label>日期</label>
        <input type='date' className="input" name="date" defaultValue={new Date().toISOString().substring(0, 10)}/>
      </div>
      <div className="field">
        {field}
      </div>
      <div className="field">
        <input id="switchExample" type="checkbox" name="switchExample" className="switch" checked={officialInput} onChange={officialSwitch}/>
        <label htmlFor="switchExample">個人行程</label>
      </div>
      <div className="field is-grouped">
      <button type="submit" className="button is-success">新增</button>
      <button type='button' className='button is-light mx-2' onClick={setOpen}>關閉</button>
      <button type='button' className='button is-info is-outlined is-small mt-2 ml-4' onClick={fastInput}>一鍵高普</button>
      </div>
    </form>
    </div>
  )
}

export default InputForm