import React, { createContext, useState, ReactNode } from 'react'
import { IProduct } from 'interfaces/index'
import { useNotifications } from 'hooks/useNotifications'

const PATH = `${import.meta.env.VITE_BASE_API_URL}/products`

export interface IProductContext {
  products: IProduct[]
  error: boolean
  fetchProducts: () => Promise<void>
  addNewProduct: (product: Omit<IProduct, 'id'>) => Promise<IProduct | undefined>
}

// Create the context
export const ProductContext = createContext<IProductContext | undefined>(undefined)

export const ProductsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { notify } = useNotifications()
  const [products, setProducts] = useState<IProduct[]>([])
  const [error, setError] = useState<boolean>(false)

  const fetchProducts = async () => {
    try {
      const response = await fetch(PATH)

      if (!response.ok) {
        throw new Error('Failed to fetch products')
      }
      const data = (await response.json()) as IProduct[]
      setProducts(data)
    } catch (error) {
      setError(true)
      notify({ type: 'error', message: 'Failed to fetch products' })
    }
  }

  const addNewProduct = async (product: Omit<IProduct, 'id'>): Promise<IProduct | undefined> => {
    try {
      const response = await fetch(PATH, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      })

      if (response.status === 201) {
        const newProduct = await response.json()
        setProducts((prev) => [...prev, newProduct])
        notify({
          type: 'success',
          message: `'${product.name}' was added successfully`,
        })

        return newProduct
      } else {
        notify({ type: 'error', message: 'Failed to add the product' })
      }
    } catch (error) {
      notify({ type: 'error', message: 'Error adding the product' })
    }
  }

  return (
    <ProductContext.Provider value={{ products, error, fetchProducts, addNewProduct }}>
      {children}
    </ProductContext.Provider>
  )
}
