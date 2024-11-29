import React, { useEffect, useState } from 'react'

export default function SelectionFilterBar({ name, values, filterSetter, filterState }) {
    const [index, setIndex] = useState(0)

    useEffect(()=>{
      for (let i = 0; i < values.length; i++) {
        if(filterState == values[i]){
          setIndex(i)
        }
        
      };
    },[])

 
  return (
    <span className='my-2 border-gray1 border p-2 rounded-lg'>
      <span className=''>{name}</span>
    <input 

    type='range' 
    className='w-full filterBar' 
    value={index} min={0} max={values.length-1}
    onChange={(e)=>{
      filterSetter(values[e.target.value])
      setIndex(e.target.value)
    }
      } />

    <span className='flex justify-between text-xs text-cyan'>
      {values.map((value)=>{
        return <p className=''>{value}</p>
      })}
    </span>
    </span>
  )
}
