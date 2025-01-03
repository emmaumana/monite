import './index.scss'
import { InputHTMLAttributes } from 'react'
import { Box } from '../Box'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  htmlFor?: string
}

export const Input = ({ label, htmlFor, ...props }: Props) => {
  return (
    <Box display="flex" flexDirection="column" gap="s12" className="input" width="full">
      <label className="input__label" htmlFor={htmlFor}>
        {label}
      </label>
      <input {...props} type={props.type || 'text'} className="input__input" />
    </Box>
  )
}
