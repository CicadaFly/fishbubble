import classes from './EventBubble.module.css'
import { useState } from 'react'
import { AiFillEdit } from "react-icons/ai";

const EventBubble = ({event,even}) =>{
  const [side, setSide] = useState(false)
  const mouseHander = () =>{ setSide(!side)}
  return(
  <div className={`${classes.EventBubble} ${even ? classes.Even: classes.Odd} ${event.personal? classes.Personal : ''}`} onMouseEnter={mouseHander} onMouseLeave={mouseHander}>
    { side && <div className={classes.Edit}><AiFillEdit className='mb-4'/><AiFillEdit className='mt-4'/></div>}
    {event.official} {event.personal}
  </div>
  )
}

export default EventBubble