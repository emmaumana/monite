import { Box } from 'components/ui/Box'
import { Button } from 'components/ui/Button'
import { Checkbox } from 'components/ui/Checkbox'
import { Input } from 'components/ui/Input'
import { Modal } from 'components/ui/Modal'
import { UnitsSelector } from 'components/UnitsSelector'
import { useProducts } from 'hooks/useProducts'
import { IProduct } from 'interfaces/index'
import { ChangeEvent, useMemo, useState } from 'react'

interface Props {
  onClose: () => void
}

export const NewProductModal = ({ onClose }: Props) => {
  const { addNewProduct } = useProducts()
  const [formValues, setFormValues] = useState<Omit<IProduct, 'id'>>({
    type: '',
    name: '',
    description: '',
    vat: 0,
    price: 0,
    units: '',
  })

  const isFormValid = useMemo(() => {
    let invalid = false

    if (formValues.type === '') return invalid
    if (formValues.name === '') return invalid
    if (formValues.price <= 0) return invalid
    if (formValues.vat <= 0) return invalid
    if (Object.values(formValues.units).length === 0) return invalid

    return true
  }, [formValues])
  const handleTypeSelection = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, type: e.currentTarget.getAttribute('datatype') || '' })
    e.target.checked = true
  }

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)

    if (isNaN(value)) return // should handle form errors

    setFormValues({ ...formValues, price: value })
  }

  const handleVatChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)

    if (isNaN(value)) return // should handle form errors

    setFormValues({ ...formValues, vat: value })
  }

  const handleSubmit = async () => {
    if (!isFormValid) return

    const response = await addNewProduct(formValues)

    if (response?.id) {
      onClose()
    }
  }

  const priceToDisplay = formValues.price > 0 ? formValues.price : undefined
  const vatToDisplay = formValues.vat > 0 ? formValues.vat : undefined

  return (
    <Modal
      heading={
        <Box display="flex" width="full" alignItems="center" justifyContent="center">
          <h5>Add new product</h5>
        </Box>
      }
      body={
        <Box width="s500">
          <Box display="grid" width="full" gap="s32">
            {/* type */}
            <Box display="flex" gap="s32">
              {/* // ? should this be radio inputs instead? */}
              <Checkbox
                id="new-product-type-product"
                label="Product"
                htmlFor="new-product-type-product"
                datatype="product"
                onChange={handleTypeSelection}
                checked={formValues.type === 'product'}
              />
              <Checkbox
                id="new-product-type-service"
                label="Service"
                htmlFor="new-product-type-service"
                datatype="service"
                onChange={handleTypeSelection}
                checked={formValues.type === 'service'}
              />
            </Box>
            {/* name */}
            <Input
              label="Product name"
              onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
            />
            {/* description */}
            <Input
              label="Description"
              onChange={(e) => setFormValues({ ...formValues, description: e.target.value })}
            />
            {/* units selector */}
            <UnitsSelector
              onSelected={(unit) => !!unit && setFormValues({ ...formValues, units: unit.name })}
            />
            {/* unit price */}
            <Input
              type="number"
              label="Unit price(net)"
              placeholder="100"
              value={priceToDisplay}
              onChange={handlePriceChange}
            />
            {/* VAT */}
            <Input label="VAT" placeholder="16%" value={vatToDisplay} onChange={handleVatChange} />
          </Box>
        </Box>
      }
      footer={
        <Box display="flex" justifyContent="space-between" paddingTop="s32">
          <Button theme="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button disabled={!isFormValid} onClick={handleSubmit}>
            Add
          </Button>
        </Box>
      }
      onClose={onClose}
    />
  )
}
