export const brandColors = {
  primary: ' #464751',
  primaryLight: ' #babcbe',
  secondary: ' #efefef',
  accent: ' #286df3',
  accentLight: ' #e9f0ff',
  white: ' #fff',
  green: ' #2cca8c',
  red: ' #fd7d7d',
  blackRgba: 'rgba(0,0,0,.1)',
}

// Layout
export type TBoxDisplay = 'flex' | 'grid' | 'inline-block' | 'block'
export type TBoxOverflow = 'hidden' | 'auto' | 'scroll' | 'visible'
export type TBoxZIndex = '0' | '10' | '20' | '30' | '40' | '50'
export type TBoxPadding =
  | 's0'
  | 's2'
  | 's4'
  | 's6'
  | 's8'
  | 's12'
  | 's16'
  | 's24'
  | 's32'
  | 's40'
  | 's60'
  | 's80'
  | 's120'

export type TBoxBorderRadius = 's0' | 's4' | 's8' | 's10' | 's16' | 's20' | 's25' | 's30' | 's100'
export type TBoxSize =
  | 'full'
  | 'half'
  | 'one-third'
  | 's60'
  | 's80'
  | 's90'
  | 's100'
  | 's120'
  | 's220'
  | 's240'
  | 's280'
  | 's300'
  | 's340'
  | 's500'
  | 's600'
  | 's700'
  | 's800'

// Color
export type TBoxColor = keyof typeof brandColors

// Flexbox
export type TFlexDirection = 'column' | 'row' | 'column-reverse' | 'row-reverse'
export type TFlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse'

// Grid
export type TGridColumns = 'grid-cols-1' | 'grid-cols-2' | 'grid-cols-3' | 'grid-cols-4'
export type TGridAutoColumns = 'grid-auto-1' | 'grid-auto-2' | 'grid-auto-3' | 'grid-auto-4'

// Grid & Flexbox
export type TBoxGap =
  | 's0'
  | 's4'
  | 's6'
  | 's8'
  | 's12'
  | 's24'
  | 's32'
  | 's40'
  | 's50'
  | 's60'
  | 's80'
export type TAlignItems = 'flex-start' | 'center' | 'flex-end' | 'stretch'
export type TJustifyContent = 'flex-start' | 'center' | 'space-between'
export type TAlignContent = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'stretch'
export type TJustifyItems = 'start' | 'center' | 'end' | 'stretch'
