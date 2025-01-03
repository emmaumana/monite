import { Box } from 'components/ui/Box'
import { Button } from 'components/ui/Button'
import { useEffect, useState } from 'react'
import { Table } from 'components/ui/Table'
import { NewProductModal } from 'components/NewProductModal'
import { Notifications } from 'components/ui/Notifications'
import { useProducts } from 'hooks/useProducts'

export const ProductsList = () => {
  const { products, fetchProducts } = useProducts()
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const tableColumns = [
    { field: 'name', header: 'Name' },
    { field: 'type', header: 'Type' },
    { field: 'units', header: 'Units' },
    { field: 'price', header: 'Price' },
    { field: 'vat', header: 'VAT' },
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

      {!!products.length && <Table selectable rows={products} columns={tableColumns} />}
      {isModalOpen && <NewProductModal onClose={() => setIsModalOpen(false)} />}
      <Notifications />
    </Box>
  )
}
