import { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import './index.scss'
import { Box } from '../Box'

type TButtonTypes = 'primary' | 'inverted' | 'secondary' | 'icon'

interface Props extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: TButtonTypes
}

export const Button = ({ theme = 'primary', children, ...props }: Props) => {
  const buttonClass = `button ${theme}`

  return (
    <Box display="block">
      <button className={buttonClass} type="button" {...props}>
        {children}
      </button>
    </Box>
  )
}
