import './index.scss'
import { Box } from '../Box'
import { ReactElement } from 'react'
import { Icon } from '../Icon'
import { Button } from '../Button'

interface Props {
  heading: ReactElement
  body: ReactElement
  footer: ReactElement
  onClose: () => void
}

export const Modal = ({ heading, body, footer, onClose }: Props) => {
  return (
    <Box
      display="flex"
      width="full"
      height="full"
      justifyContent="center"
      zIndex="50"
      padding="s60"
      className="modal"
      backgroundColor="blackRgba"
    >
      <Box
        display="grid"
        className="modal__wrapper"
        gap="s60"
        alignContent="flex-start"
        backgroundColor="white"
        borderRadius="s10"
        padding="s24"
        minWidth="s300"
      >
        <Box display="flex" className="modal__heading" justifyContent="space-between">
          {heading}
          <Button theme="icon" onClick={onClose}>
            <Icon icon="IoMdClose" size={25} color="primaryLight" />
          </Button>
        </Box>
        <Box className="modal__body">{body}</Box>
        <Box className="modal__footer">{footer}</Box>
      </Box>
    </Box>
  )
}
