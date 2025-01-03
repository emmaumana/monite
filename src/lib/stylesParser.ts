import {
  TBoxBorderRadius,
  TBoxColor,
  TBoxGap,
  TBoxPadding,
  TBoxSize,
  TGridAutoColumns,
  TGridColumns,
} from './themeConfig'

import { brandColors } from './themeConfig'

const parseNumber = (attribute: string) => {
  return parseInt((attribute.match(/[0-9]/g) || []).join(''))
}

export const getColorAttribute = (color: TBoxColor) => {
  return brandColors[color]
}

export const getGridAutoColumsAttribute = (columns: TGridAutoColumns) => {
  const cols = parseNumber(columns)
  return `repeat(auto-fit, minmax(${cols}00px, 320px))`
}

export const getGridColumsAttribute = (columns: TGridColumns) => {
  const cols = parseNumber(columns)
  return `repeat(${cols}, minmax(0, 1fr))`
}

export const getAttributeInPixels = (spacing: TBoxPadding | TBoxGap | TBoxBorderRadius) => {
  return `${parseNumber(spacing)}px`
}

export const getBoxSizeAttribute = (width: TBoxSize) => {
  switch (width) {
    case 'full':
      return '100%'
    case 'half':
      return '50%'
    case 'one-third':
      return '33%'

    default:
      return parseNumber(width)
  }
}
