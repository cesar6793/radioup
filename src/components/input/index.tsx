import React from 'react'

interface InputProps {
  label?: string
  type: string
  // value: string
  error?: string
  name?: string
  required?: boolean
  // onChange: (value: string) => void
}

const Input: React.FC<InputProps> = props => {
  const { label, required, type, name, ...restProps } = props
  console.log('restProps', restProps)

  return (
    <div>
      <label>{label}</label>
      <input
        className=''
        type={type ?? 'text'}
        required={required}
        name={name}
        {...restProps}
      />
    </div>
  )
}

export default Input
