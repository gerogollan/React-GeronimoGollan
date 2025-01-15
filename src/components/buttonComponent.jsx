import React from 'react';
import '../components/buttonComponent.css'

export default function ButtonComponent({ className, text }){

    return(
        <>
        <button className={className}>{text}</button>
        </>
    )

};