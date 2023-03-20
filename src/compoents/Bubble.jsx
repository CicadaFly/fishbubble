// 顯示日期用的
// 有個let content = {date}, 點擊後會變成一個小小的<form>，然後改日期
import DataLine from "./DataLine"
import {BubbleColumn} from "./Bubble.module.css"
import DateBubble from "./DateBubble"
import EventBubble from "./EventBubble"
const Bubble=({b1})=>{
  return (
    <>
      {b1.map((event,index)=> {
        const even = index % 2 === 0
        return (
          <div key={event.uniId} className={BubbleColumn}>
            <DateBubble date={event.date} event={event}/>
            <DataLine even={even}/>
            <EventBubble event={event} even={even}/>
            {/* eventbubble with edit */}
            {/* <p className="has-text-weight-bold">{event.date}</p> */}
            {/* <div>{event.official}</div>
            <p>{event.personal}</p> */}
          </div>
        )
      })}
    </>
  )
}

export default Bubble