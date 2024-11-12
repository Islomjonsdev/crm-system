import React from 'react'

const Button = ({title, ...props}) => {
  return (
    <div {...props}>
        <button>{title}</button>
    </div>
  )
}

export default Button