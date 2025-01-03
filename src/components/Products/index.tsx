import { NotificationProvider } from 'components/NotificationContext'

import { ProductsList } from './ProductsList'
import { ProductsProvider } from './ProductsProvider'

export const Products = () => {
  return (
    <NotificationProvider>
      <ProductsProvider>
        <ProductsList />
      </ProductsProvider>
    </NotificationProvider>
  )
}
