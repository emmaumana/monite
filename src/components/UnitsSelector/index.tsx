import { ChangeEvent, useEffect, useState } from 'react'
import './index.scss'
import { Input } from 'components/ui/Input'
import { Box } from 'components/ui/Box'
import { useUnits } from 'hooks/useUnits'
import { IUnit } from 'interfaces/index'

interface Props {
  onSelected: (unit: IUnit | null) => void
}

export const UnitsSelector = ({ onSelected }: Props) => {
  const { units, addNewUnit, fetchUnits } = useUnits()
  const [query, setQuery] = useState<string>('')
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedOption, setSelectedOption] = useState<string>('')

  const options = units.map((u) => u.name)

  const filteredOptions = query
    ? options.filter((option) => option.toLowerCase().includes(query.toLowerCase()))
    : options
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
    setSelectedOption('')
    onSelected(null)
  }
  const handleOnClick = (option: string) => {
    setSelectedOption(option)
    setQuery('')
    setIsOpen(false)
    onSelected(units.filter((u) => u.name === option)[0])
  }

  const handleAddUnit = async (name: string) => {
    const newUnit = await addNewUnit(name)
    onSelected(newUnit)
  }

  useEffect(() => {
    fetchUnits()
  }, [])

  return (
    <Box
      className="selector"
      tabIndex={-1}
      onFocus={() => setIsOpen(true)}
      onBlur={(e) => {
        // preventing closing the options when selecting one
        if (e.currentTarget.contains(e.relatedTarget)) return
        setIsOpen(false)
      }}
    >
      <Input label="Units" value={query || selectedOption} onChange={handleOnChange} />
      {isOpen && (
        <Box className="selector__options" borderRadius="s10" width="full" zIndex="10">
          <ul className="selector__list">
            {query && filteredOptions.length === 0 ? (
              <li className="selector__option plus" onClick={() => handleAddUnit(query)}>
                Create '{query}' as the new unit
              </li>
            ) : (
              <li className="selector__option placeholder">
                Select a unit or start typing to create new one
              </li>
            )}
            {filteredOptions.map((option) => (
              <li key={option} className="selector__option" onClick={() => handleOnClick(option)}>
                {option}
              </li>
            ))}
          </ul>
        </Box>
      )}
    </Box>
  )
}
