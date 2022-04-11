import React from 'react'


const Dice = (props) => {
  
  
  return (
    
        <div className={props.state? 'stop' : 'number'} onClick={()=>props.change(props.id)}>
            {props.value}
        </div>
    
  )
}

export default Dice;
