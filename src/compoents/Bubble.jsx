// 顯示日期用的
// 有個let content = {date}, 點擊後會變成一個小小的<form>，然後改日期
import DataLine from "./DataLine"
const Bubble=({b1})=>{
    b1.map((event,index)=> {
    const even = index % 2 === 0
    return (
        <div key={event.uniId} className="column is-2 mx-3">
         <DataLine/>
        <p className="has-text-weight-bold">{event.date}</p>
        <p>{event.official}</p>
        <p>{event.personal}</p>
        </div>
    )
  })
}

export default Bubble