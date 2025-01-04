import { capitalize } from 'lodash'
import { Checkbox } from '../Checkbox'
import './index.scss'

interface ITableColumn {
  field: string
  header: string
  suffix?: string
}

interface ITableRow {
  [key: string]: any
}

interface Props {
  rows: ITableRow[]
  columns: ITableColumn[]
  selectable: boolean
}

export const Table = ({ rows, columns, selectable }: Props) => {
  if (rows.length === 0) return null

  const tableClasses = selectable ? 'table selectable' : 'table'

  return (
    <table className={tableClasses}>
      <thead>
        <tr>
          {selectable && (
            <th className="table__selector">
              <Checkbox name="table-selector" id="table-selector" />
            </th>
          )}
          {columns.map((column) => (
            <th key={`head-${column.field}`}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, idx) => (
          <tr key={`item-row-${idx}`}>
            {selectable && (
              <td className="table__row--selector">
                <Checkbox id={`row-selector-${idx}`} name={`row-selector-${idx}`} />
              </td>
            )}
            {columns.map((key) => (
              <td key={`item-cell-${row[key.field]}`}>
                {capitalize(row[key.field])}
                {key.suffix || ''}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
