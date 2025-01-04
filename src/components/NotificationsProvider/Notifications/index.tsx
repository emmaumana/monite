import { TBoxColor } from 'lib/themeConfig'
import { Box } from '../../ui/Box'
import { Icon } from '../../ui/Icon'
import './index.scss'
import { Button } from '../../ui/Button'
import { useNotifications } from 'hooks/useNotifications'
import { TNotificationType } from 'components/NotificationsProvider'

export const Notifications = () => {
  const { notifications, removeNotification } = useNotifications()
  const getTypeColor = (type: TNotificationType): TBoxColor =>
    type === 'success' ? 'green' : 'red'

  if (notifications.length === 0) return null

  return (
    <Box className="notifications" zIndex="50">
      <Box display="flex" flexDirection="column" className="notifications_listing" gap="s24">
        {notifications.map((notification) => (
          <Box
            key={notification.id}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            className="notifications__item"
            padding="s24"
            gap="s24"
            borderRadius="s10"
            backgroundColor={getTypeColor(notification.type)}
          >
            <p className="notifications__message">{notification.message}</p>
            <Button theme="icon" onClick={() => removeNotification(notification.id)}>
              <Icon icon="IoMdClose" size={25} color="white" />
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
