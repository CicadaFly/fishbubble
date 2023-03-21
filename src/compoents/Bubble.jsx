// 顯示日期用的
// 有個let content = {date}, 點擊後會變成一個小小的<form>，然後改日期
import DataLine from "./DataLine"
import classes from "./Bubble.module.css"
import DateBubble from "./DateBubble"
import EventBubble from "./EventBubble"
const Bubble=({b1,seta1,a1})=>{
  return (
    <>
      {b1.map((event,index)=> {
        const even = index % 2 === 0
        return (
          <div key={event.uniId} className={classes.BubbleColumn}>
            <DateBubble date={event.date} event={event}/>
            <DataLine even={even}/>
            <EventBubble event={event} even={even} seta1={seta1} a1={a1}/>
          </div>
        )
      })}
    </>
  )
}

export default Bubble