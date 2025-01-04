import { createContext, useState, ReactNode } from 'react'
import nextId from 'react-id-generator'

export type TNotificationType = 'success' | 'error' | 'info'

export interface INotification {
  id: string
  message: string
  type: TNotificationType
}

export interface INotificationContext {
  notifications: INotification[]
  notify: (notification: Omit<INotification, 'id'>) => void
  removeNotification: (id: string) => void
}

export const NotificationContext = createContext<INotificationContext | undefined>(undefined)

export const NotificationsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<INotification[]>([])

  const notify = (notification: Omit<INotification, 'id'>) => {
    const id = nextId()
    setNotifications((prev) => [...prev, { ...notification, id }])
    setTimeout(() => removeNotification(id), 4000)
  }

  const removeNotification = (id: string) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id))
  }

  return (
    <NotificationContext.Provider value={{ notifications, notify, removeNotification }}>
      {children}
    </NotificationContext.Provider>
  )
}
