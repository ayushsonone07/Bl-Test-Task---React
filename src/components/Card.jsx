import '../App.css'
import React from 'react'

const Card = ({label, value, color}) => {
  return (
    <div className="card">
        <div className='card-label'>{label}</div>
        <div className='card-value' style={{ color: color }}><strong>{value}</strong></div>
    </div>
  )
}

export default Card