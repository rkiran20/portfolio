import React from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const ScroolTop = () => {
    const location = useLocation();
    useEffect(()=>{
        window.scroll({
            top:0,
            left:0,     
        });
    },[location.pathname])
  return null;
}

export default ScroolTop