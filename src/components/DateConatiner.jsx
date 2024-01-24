import React from 'react'
import { useState } from 'react'
import moment from 'moment'
import Calender from './Calender'

const DateContainer=()=>{

    const [visible,setVisible]=useState(true)
    const [date,setDate]=useState(moment())
    const [selectedDate,setSelectedDate]=useState('')
    
    const decreaseDate=()=>{
        setDate(prevDate=>moment(prevDate).subtract(1,'month'))
    }

    const increaseDate=()=>{
        setDate(prevDate=>moment(prevDate).add(1,'month'))
    }
    const selDate=(data)=>{
        setSelectedDate(data)
    }
    return(
        
        <div className='container'>
                <button onClick={decreaseDate}> -</button>
                <input type="text" onClick={()=>{setVisible(!visible)}} value={selectedDate} readOnly></input>
                <button onClick={increaseDate}>+</button>
                {visible && <Calender getDate={selDate} date={date}/>}
               
        </div>
    )
}

export default DateContainer