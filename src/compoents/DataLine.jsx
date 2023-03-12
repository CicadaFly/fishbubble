import { DataLineStyle, EvenLineStyle, OddLineStyle } from './DataLine.module.css'

export default function DataLine(props)
{
	// return (
	// 	<div className={DataLineStyle +" "+
	// 		(props.isEven ? EvenLineStyle : OddLineStyle)}>
	// 	</div>
	// )

  return (
		<div className={DataLineStyle +" "+ EvenLineStyle }></div>
	)
}
