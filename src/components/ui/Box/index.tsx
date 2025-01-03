import { HTMLAttributes, PropsWithChildren, RefObject } from 'react'
import {
  TAlignContent,
  TAlignItems,
  TBoxBorderRadius,
  TBoxColor,
  TBoxDisplay,
  TBoxGap,
  TBoxOverflow,
  TBoxPadding,
  TBoxSize,
  TBoxZIndex,
  TFlexDirection,
  TFlexWrap,
  TGridAutoColumns,
  TGridColumns,
  TJustifyContent,
  TJustifyItems,
} from 'lib/themeConfig'
import {
  getAttributeInPixels,
  getBoxSizeAttribute,
  getColorAttribute,
  getGridAutoColumsAttribute,
  getGridColumsAttribute,
} from 'lib/stylesParser'

interface Props extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {
  gap?: TBoxGap
  width?: TBoxSize
  maxWidth?: TBoxSize
  height?: TBoxSize
  minWidth?: TBoxSize
  minHeight?: TBoxSize
  color?: TBoxColor
  zIndex?: TBoxZIndex
  display?: TBoxDisplay
  overflow?: TBoxOverflow
  padding?: TBoxPadding
  paddingY?: TBoxPadding
  paddingX?: TBoxPadding
  paddingBottom?: TBoxPadding
  paddingTop?: TBoxPadding
  gridColumns?: TGridColumns
  gridAutoColumns?: TGridAutoColumns
  flexWrap?: TFlexWrap
  alignItems?: TAlignItems
  alignContent?: TAlignContent
  flexDirection?: TFlexDirection
  justifyContent?: TJustifyContent
  justifyItems?: TJustifyItems
  alignSelf?: TAlignContent
  justifySelf?: TAlignContent
  backgroundColor?: TBoxColor
  borderRadius?: TBoxBorderRadius
  ref?: RefObject<HTMLDivElement>
}

export const Box = ({
  children,
  gap,
  color,
  width,
  height,
  maxWidth,
  minWidth,
  minHeight,
  display,
  overflow,
  zIndex,
  padding,
  paddingY,
  paddingX,
  paddingTop,
  paddingBottom,
  gridColumns,
  gridAutoColumns,
  flexWrap,
  alignItems,
  alignContent,
  flexDirection,
  justifyContent,
  justifyItems,
  alignSelf,
  justifySelf,
  backgroundColor,
  borderRadius,
  ref,
  ...props
}: Props) => {
  return (
    <div
      ref={ref}
      className={props.className}
      {...props}
      style={{
        ...props.style,
        ...(display ? { display } : { display: 'block' }),
        ...(overflow ? { overflow } : {}),
        ...(zIndex ? { zIndex } : {}),
        ...(flexDirection ? { flexDirection } : {}),
        ...(flexWrap ? { flexWrap } : {}),
        ...(alignItems ? { alignItems } : {}),
        ...(alignContent ? { alignContent } : {}),
        ...(justifyContent ? { justifyContent } : {}),
        ...(justifyItems ? { justifyItems } : {}),
        ...(justifySelf ? { justifySelf } : {}),
        ...(alignSelf ? { alignSelf } : {}),
        ...(gap ? { gap: getAttributeInPixels(gap) } : {}),
        ...(color ? { color: getColorAttribute(color) } : {}),
        ...(width ? { width: getBoxSizeAttribute(width) } : {}),
        ...(height ? { height: getBoxSizeAttribute(height) } : {}),
        ...(maxWidth ? { maxWidth: getBoxSizeAttribute(maxWidth) } : {}),
        ...(minWidth ? { minWidth: getBoxSizeAttribute(minWidth) } : {}),
        ...(minHeight ? { minHeight: getBoxSizeAttribute(minHeight) } : {}),
        ...(padding ? { padding: getAttributeInPixels(padding) } : {}),
        ...(backgroundColor ? { backgroundColor: getColorAttribute(backgroundColor) } : {}),
        ...(borderRadius ? { borderRadius: getAttributeInPixels(borderRadius) } : {}),
        ...(gridColumns && !gridAutoColumns
          ? { gridTemplateColumns: getGridColumsAttribute(gridColumns) }
          : {}),
        ...(gridAutoColumns && !gridColumns
          ? { gridTemplateColumns: getGridAutoColumsAttribute(gridAutoColumns) }
          : {}),
        ...(paddingY
          ? {
              paddingTop: getAttributeInPixels(paddingY),
              paddingBottom: getAttributeInPixels(paddingY),
            }
          : {}),
        ...(paddingX
          ? {
              paddingLeft: getAttributeInPixels(paddingX),
              paddingRight: getAttributeInPixels(paddingX),
            }
          : {}),
        ...(paddingTop
          ? {
              paddingTop: getAttributeInPixels(paddingTop),
            }
          : {}),
        ...(paddingBottom
          ? {
              paddingBottom: getAttributeInPixels(paddingBottom),
            }
          : {}),
      }}
    >
      {children}
    </div>
  )
}
