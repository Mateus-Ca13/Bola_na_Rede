import React, { useEffect, useState } from 'react'
import FilterRadio from './FilterRadio/FilterRadio'

export default function SelectionFilterBar({ name, values, filterSetter, filterState }) {
    const [index, setIndex] = useState(0)

    useEffect(()=>{
      for (let i = 0; i < values.length; i++) {
        if(filterState == values[i].value){
          setIndex(i)
        }
        
      };
    },[])

 
  return (
    <span className='my-2 border-gray1 border p-2 rounded-lg'>
      <span className=''>{name}</span>
      <div className='flex justify-between gap-2 m-2'>
      {values.map((value, i) => {
        return <FilterRadio key={value.value} name={value.name} value={value.value} checked={i == index } filterSetter={filterSetter} indexSetter={setIndex} radioIndex={i}/>
      })}
      </div>
    </span>
  )
}
