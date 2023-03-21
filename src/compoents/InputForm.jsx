import { useState } from 'react'
import DUMMY_DATA from './DUMMY_DATA'
import classes from './InputForm.module.css'

const InputForm = ({seta1,setOpen})=>{
  const [officialInput, setOfficialInput] = useState(true)
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

    if (formValues.official.length + formValues.personal.length !== 0){
    seta1(prevData => [...prevData, newFormData]);
    event.target.reset()}
    else{
      alert('行程不可為空');
      return;
    }
  }
  const fastInput = ()=>{
    seta1(DUMMY_DATA)
    setOpen()
  }
  const cleanInput = ()=>{
    seta1([])
  }
  const field = 
  <>
  <label>{`${officialInput?'官方行程':'個人行程'}`}</label>
  <input type={`${officialInput? 'text' : 'hidden'}`} className="text input" name="official" />
  <input type={`${!officialInput? 'text' : 'hidden'}`} className="text input" name="personal"/>
  </>
  return(
    <div className={classes.risingForm}>
    <form onSubmit={submitHandler} >
      <div className="field">
        <label>日期</label>
        <input type='date' className="input" name="date" defaultValue={new Date().toISOString().substring(0, 10)}/>
      </div>
      <div className="field">
        {field}
      </div>
      <div className="field">
        <input id="switchExample" type="checkbox" name="switchExample" className="switch" checked={!officialInput} onChange={officialSwitch}/>
        <label htmlFor="switchExample">個人行程</label>
      </div>
      <div className="field is-grouped">
      <button type='button' className='button is-danger is-small mt-2 mr-1' onClick={cleanInput}>清除全部</button>
      <button type='button' className='button is-info is-outlined is-small mt-2 mr-4' onClick={fastInput}>一鍵高普</button>
      <button type="submit" className="button is-success">新增</button>
      <button type='button' className='button is-light mx-2' onClick={setOpen}>關閉</button>
      </div>
    </form>
    </div>
  )
}

export default InputForm