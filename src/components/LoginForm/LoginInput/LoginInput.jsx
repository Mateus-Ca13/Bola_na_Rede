import React, { useEffect, useState } from 'react'
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

export default function LoginInput({ label, placeholder, type, password, infoSetter, value, alert}) {
    const [passwordVisible, setPasswordVisible] = useState(false)
    function handlePasswordVisible (){
        passwordVisible ? setPasswordVisible(false) : setPasswordVisible(true);
    }
    return (
        <div className='pb-1 flex flex-col items-start w-full relative my-1'>
            <label htmlFor={label}
            className='text-cyan font-semibold mb-1'>{label}</label>
            <input value={value} type={passwordVisible ? 'text' : type} 
            id={label} 
            placeholder={placeholder} 
            onChange={(event)=>infoSetter(event.target.value)}
            className='bg-gray1 px-3 py-1 rounded-md w-full'/>
            {password && 
            <span onClick={()=>{handlePasswordVisible()}}
            className='absolute right-2 top-9 opacity-60'>{passwordVisible ? <IoMdEye className='text-xl '/>:<IoMdEyeOff className='text-xl opacity-80'/>}</span>}
            <ul className=' text-alert text-xs text-start ms-2'>{alert.map((message, index) => {return <li key={index}>{message}</li>})}</ul>
        </div>
    )
}
