import { IUnit } from 'interfaces/index'
import { useState } from 'react'
import { useNotifications } from './useNotifications'

const PATH = `${import.meta.env.VITE_BASE_API_URL}/units`

export const useUnits = () => {
  const [units, setUnits] = useState<IUnit[]>([])
  const { notify } = useNotifications()

  const addNewUnit = async (unit: string) => {
    const response = await fetch(PATH, {
      method: 'POST',
      body: JSON.stringify({ name: unit }),
    })

    if (response.status === 201) {
      notify({
        type: 'success',
        message: `The '${unit}' was added as a new measuring unit`,
      })
      const newUnit = await response.json()
      setUnits([...units, newUnit])

      return newUnit
    }
  }

  const fetchUnits = async () => {
    const response = await fetch(PATH)
    const data = await response.json()
    setUnits(data)
  }

  return {
    units,
    fetchUnits,
    addNewUnit,
  }
}
