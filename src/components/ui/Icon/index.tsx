import { IoIcons, HiIcons, TIconNames } from 'lib/icons'
import { TBoxColor, brandColors } from 'lib/themeConfig'

import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<SVGElement> {
  icon: TIconNames
  size?: number
  color?: TBoxColor
}

export const Icon = ({ icon, size, color, ...props }: Props) => {
  const IconComponent = icon.startsWith('Io')
    ? IoIcons[icon as keyof typeof IoIcons]
    : HiIcons[icon as keyof typeof HiIcons]

  return <IconComponent size={size} color={color ? brandColors[color] : ''} {...props} />
}
