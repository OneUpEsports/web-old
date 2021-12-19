import React from "react";

const InputField=({value,type})=>{
    //Styles
    const containerStyle="w-96 m-auto py-2"
    const labelStyle="text-white text-sm text-left font-bold"
    const inputStyle="appearance-none bg-transparent border-none w-full text-white  py-1 px-2 leading-tight focus:outline-none text-sm font-bold"
    const hrStyle="border-green border"
   
    return (
        <div className={containerStyle}>
            <h5 className={labelStyle}>{value}</h5>
            <input className={inputStyle} type={type} placeholder={value} required/>
            <hr  className={hrStyle}/>
        </div>
    );
}

export default InputField;