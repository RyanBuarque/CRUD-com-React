import React from 'react'

function Input({ type, placeholder, value, onChange, className }) {
  return (
    <input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      className={className}
    />
  )
}

export default Input
