import { INotificationContext, NotificationContext } from 'components/NotificationContext'
import { useContext } from 'react'

export const useNotifications = (): INotificationContext => {
  const context = useContext(NotificationContext)
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider')
  }
  return context
}
