import classes from './DateBubble.module.css'

const DateBubble = ({date})=>{
  const monthDate = new Date(date);
  const month = monthDate.getMonth()+1;
  const nDate = monthDate.getDate();
  const bubbleDate = `${month}/${nDate}`

  return (
  <div className={`${classes.dateBubble} mx-5`}>
    {bubbleDate}
  </div>

  )
  
}

export default DateBubble