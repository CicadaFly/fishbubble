import classes from './EventBubble.module.css'
import { useState } from 'react'
import { BsTrashFill , BsPencilFill} from "react-icons/bs"
import EditBubble from './EditBubble'

const EventBubble = ({event,even,seta1,a1}) =>{
  const [side, setSide] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const mouseIn = () =>{ setSide(true)}
  const mouseOut = () =>{ setSide(false)}

  const removeHandler = (id) =>{
    const newArray = a1.filter((e)=>{return e.uniId !== id})
    seta1(newArray)
  }

  const editHandler = () =>{
    setShowEdit(true)
  }
  return(
  <div className={`${classes.EventBubble} ${!even ? classes.Even: classes.Odd} ${event.personal? classes.Personal : ''}`} onMouseEnter={mouseIn} onMouseLeave={mouseOut}>
    { side && <div className={classes.Edit}>
                <BsPencilFill onClick={editHandler} style={{cursor:'pointer'}}/>
                <BsTrashFill onClick={() => removeHandler(event.uniId)} style={{cursor:'pointer'}}/>
              </div>}
    {event.official} {event.personal}
    {showEdit && <EditBubble a1={a1} seta1={seta1} setShowEdit={setShowEdit} event={event}/>}
  </div>
  )
}

export default EventBubble