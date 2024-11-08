import React, { useState } from 'react'
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

export default function LoginInput({ label, placeholder, type, password, infoSetter}) {
    const [passwordVisible, setPasswordVisible] = useState(false)

    function handlePasswordVisible (){
        passwordVisible ? setPasswordVisible(false) : setPasswordVisible(true);
    }

    return (
        <div className='flex flex-col items-start w-full relative my-1'>
            <label htmlFor={label}
            className='text-cyan font-semibold'>{label}</label>
            <input type={passwordVisible ? 'text' : type} 
            id={label} 
            placeholder={placeholder} 
            onChange={(event)=>infoSetter(event.target.value)}
            required={true} 
            className='bg-gray1 px-3 py-1 rounded-md w-full'/>
            {password && 
            <span onClick={()=>{handlePasswordVisible()}}
            className='absolute right-2 bottom-1 opacity-60'>{passwordVisible ? <IoMdEye className='text-xl '/>:<IoMdEyeOff className='text-xl opacity-80'/>}</span>}
        </div>
    )
}
