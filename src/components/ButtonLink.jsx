import React from 'react'

const ButtonLink = ({url, label}) => {
    const mouseClick = ()=>{
        window.open(url, '_blank');
    };

  return (
    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={mouseClick}>{label}</button>
  )
}

export default ButtonLink;