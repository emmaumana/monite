import { NotificationsProvider } from 'components/NotificationsProvider'

import { ProductsList } from './ProductsList'
import { ProductsProvider } from './ProductsProvider'
import { Notifications } from 'components/NotificationsProvider/Notifications'

export const Products = () => {
  return (
    <NotificationsProvider>
      <ProductsProvider>
        <ProductsList />
        <Notifications />
      </ProductsProvider>
    </NotificationsProvider>
  )
}
