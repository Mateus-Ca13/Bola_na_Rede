import React, { useRef } from 'react'

export default function EmailVerificationInputs({ code, codeSetter}) {

    const inputsRef = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)]

    function proceedToNextField(index, newValue){
        
        const numberRegex = /^\d+$/;
        
        if(numberRegex.test(newValue) && newValue.length < 2){
            inputsRef[index].current.value = newValue;
            if( inputsRef[index+1]){inputsRef[index+1].current.focus()}
            code[index] = newValue
            codeSetter(code)
            console.log(code)
        }else{
            inputsRef[index].current.value = "";
            code[index] = null
            console.log(code)
        } 
    }
    function handleReturnField(index, key){
        if(key == 'Backspace' && inputsRef[index-1] && inputsRef[index].current.value == ""){
            inputsRef[index-1].current.focus()
        }
    }

    function handlePasteToken(pasteToken){

        for (let index = 0; index < pasteToken.length; index++) {
            const num = pasteToken[index];
            proceedToNextField(index, num)
        }
        
    }

    return (
        <div className='mb-4'>
            <div className='flexbox gap-1 mx-4 '>
                {inputsRef.map((ref, index) => {
                    return <input 
                    ref={ref}
                    key={index}
                    onChange={(e)=>{proceedToNextField(index, e.nativeEvent.data? e.nativeEvent.data.slice(-1): '')}} 
                    onPaste={(e)=>{handlePasteToken(e.clipboardData.getData("text"))}}
                    onKeyDown={(e)=> {handleReturnField(index, e.key)}}
                    className='bg-gray1 px-3 py-1 rounded-md w-full text-lg max-w-10' 
                    type="text" 
                     />
                })}

                </div>
        </div>
    )
}
