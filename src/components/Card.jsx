import React from 'react'

const Card = ({label, value, style}) => {
  return (
    <div className={style}>
        <div className='card-label'>{label}</div>
        <div className='card-value'>{value}</div>
    </div>
  )
}

export default Card