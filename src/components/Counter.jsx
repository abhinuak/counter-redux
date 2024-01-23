import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementbyAmount, reset } from '../redux/counterSlice'

function Counter() {
  const[amount,setAmount]=useState("")
  const disp = useDispatch()
const valuee =useSelector((state)=>state.counter.count)

const handleIncrement= ()=>{
if(amount==""){
  alert("please provide value")
}
else{
  disp(incrementbyAmount(Number(amount)))
}


}

  return (
    <div className=' d-flex justify-content-center align-items-center mt-5'>
        <div className='border rounded d-flex justify-content-center align-items-center p-5 flex-column'>
        <h1><b  className='text-warning'>{valuee}</b></h1>
        <div className='w-100 d-flex   mt-5'>
            <button className='btn btn-success me-2' onClick={()=>disp(increment())}>increment</button>
            <button className='btn btn-warning me-2' onClick={()=>disp(decrement())}>Decrement</button>
            <button className='btn btn-danger' onClick={()=>disp(reset())}>Reset</button>
        </div>
        <div className='d-flex mt-5'>
          <input type="text" placeholder='enter count' className='form-control me-2'
          onChange={(e)=>setAmount(e.target.value)} />
          <button className='btn btn-outline-success me-2' onClick={handleIncrement}>increment</button>
        </div>
        </div>
    </div>
  )
}

export default Counter