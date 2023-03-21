import classes from './EditBubble.module.css'


const EditBubble = ({a1,seta1,event,setShowEdit}) =>{
  const divId = event.uniId
  const editEventHandler=(event)=>{
    event.preventDefault()
    const editEvent = event.target.edit.value
    const editDate = event.target.editDate.value
    console.log(editEvent.trim())
    if (editEvent.trim() !== ""){
    const update = a1.map((time)=>{
      if (time.uniId === divId){
        return {...time, date: editDate, official: editEvent}
      } return time
    })
    seta1(update)
    setShowEdit(false)} else {
      alert('別鬧了，你怎麼會覺得這裡可以空白');
      return;
    }
  }
  return(
    <div className={classes.EditBubble}>
      <form onSubmit={editEventHandler}>
        <div className='field'>
          <label>更改事項</label>
          <input className='input' type="text" name="edit" 
          defaultValue={(event.official ? event.official : "") + (event.personal ? event.personal:"")}/>
        </div>
        <div className='field'>
          <label>更改日期</label>
          <input className='text input' type="date" name="editDate" defaultValue={event.date}/>
        </div>
        <div className="field is-grouped is-pulled-right mb-1">
          <button className='button is-small is-3 is-success mr-1' type='submit'>確認更改</button>
          <button className='button is-small is-3 is-gray' type='button' onClick={()=>{setShowEdit(false)}}>放棄更改</button>
        </div>
      </form>
    </div>
  )
}

export default EditBubble