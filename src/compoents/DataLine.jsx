import classes from './DataLine.module.css'

const DataLine = ({even})=>
{

  return (
		<div className={`${classes.DataLineStyle} ${!even ? classes.EvenLineStyle : classes.OddLineStyle} `}></div>
	)
}

export default DataLine
