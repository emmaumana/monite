import { Box } from 'components/ui/Box'
import { Button } from 'components/ui/Button'
import { useEffect, useState } from 'react'
import { Table } from 'components/ui/Table'
import { NewProductModal } from 'components/NewProductModal'
import { useProducts } from 'hooks/useProducts'
import { FallbackState } from 'components/FallbackState'

export const ProductsList = () => {
  const { products, fetchProducts, error } = useProducts()
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const tableColumns = [
    { field: 'name', header: 'Name' },
    { field: 'type', header: 'Type' },
    { field: 'units', header: 'Units' },
    { field: 'price', header: 'Price', suffix: ' €' },
    { field: 'vat', header: 'VAT', suffix: '%' },
  ]

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <Box className="products" maxWidth="s800">
      <Box
        display="flex"
        width="full"
        className="products__heading"
        alignItems="center"
        justifyContent="space-between"
        paddingBottom="s40"
      >
        <Box display="flex" alignItems="center" gap="s24">
          <h2>Products</h2>
          <Button theme="inverted">Guide me!</Button>
        </Box>
        <Button onClick={() => setIsModalOpen(true)}>Add New</Button>
      </Box>

      {error ? (
        <FallbackState
          image="src/assets/images/error.png"
          message="There was an error trying to connect to the server..."
        />
      ) : !!products.length ? (
        <Table selectable rows={products} columns={tableColumns} />
      ) : (
        <FallbackState image="src/assets/images/empty-box.png" message="No products added yet..." />
      )}
      {isModalOpen && <NewProductModal onClose={() => setIsModalOpen(false)} />}
    </Box>
  )
}
