import React from 'react';
import '../components/ButtonComponent.css'

export default function ButtonComponent({ className, text }){

    return(
        <>
        <button className={className}>{text}</button>
        </>
    )

};