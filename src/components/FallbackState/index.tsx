import { Box } from 'components/ui/Box'
import './index.scss'

interface Props {
  image: string
  message: string
}

export const FallbackState = ({ image, message }: Props) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      className="fallback-state"
      gap="s24"
      width="full"
      minHeight="s300"
    >
      <Box>
        <img src={image} alt="fallback-state-image" />
      </Box>
      <h5>{message}</h5>
    </Box>
  )
}
