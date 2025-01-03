import './index.scss'
import { InputHTMLAttributes } from 'react'
import { Box } from '../Box'
import { TAlignItems, TBoxDisplay, TBoxGap } from 'lib/themeConfig'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  htmlFor?: string
}

export const Checkbox = ({ label, htmlFor, ...props }: Props) => {
  const styles = label && {
    display: 'flex' as TBoxDisplay,
    alignItems: 'center' as TAlignItems,
    gap: 's12' as TBoxGap,
  }
  const input = <input className="checkbox__input" type="checkbox" {...props} />

  return (
    <Box {...styles} className="checkbox">
      {label ? (
        <>
          <input className="checkbox__input" type="checkbox" {...props} />
          <label className="checkbox__label" htmlFor={htmlFor}>
            {label}
          </label>
        </>
      ) : (
        input
      )}
    </Box>
  )
}
