import { IProductContext, ProductContext } from 'components/Products/ProductsProvider'
import { useContext } from 'react'

export const useProducts = (): IProductContext => {
  const context = useContext(ProductContext)
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider')
  }
  return context
}
