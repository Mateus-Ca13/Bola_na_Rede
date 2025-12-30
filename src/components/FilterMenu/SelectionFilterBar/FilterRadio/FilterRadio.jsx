import React from 'react'

export default function FilterRadio({value, name, checked, filterSetter, indexSetter, radioIndex}) {
  return (
    <div className='flex flex-col justify-center items-center text-sm'>
        <input 
        type='radio'
        value={value}
        group={name}
        checked={checked}
        onClick={()=>{filterSetter(value); indexSetter(radioIndex)}}></input>
        <label>{name}</label>
    </div>
  )
}
