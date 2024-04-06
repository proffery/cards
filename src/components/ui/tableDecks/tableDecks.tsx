import { ArrowDropDown, ArrowDropUp, Edit, Play, Trash } from '@/assets/icons'
import { Table, TableBody, TableBodyCell, TableHead, TableHeadCell, TableRow } from '@/components'

import s from './tableDecks.module.scss'

type DecksTableProps = {
  items?: Deck[]
  onDelete: (itemId: string) => void
  onEdit: (itemId: string) => void
  onPlay: (itemId: string) => void
  onSort: (orderDirection: SortDirection, orderField: DecksTableSortField) => void
  orderDirection?: SortDirection
  orderField?: DecksTableSortField
}
export type SortDirection = 'asc' | 'desc'
export type DecksTableSortField = 'author.name' | 'cardsCount' | 'name' | 'updated'

export type Author = {
  id: string
  name: string
}
export type Deck = {
  author: Author
  cardsCount: number
  cover: string
  created: string
  id: string
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}
export const TableDecks = ({
  items,
  onDelete,
  onEdit,
  onPlay,
  onSort,
  orderDirection = 'asc',
  orderField = 'name',
}: DecksTableProps) => {
  const sortIconsSwitcher = (fieldName: DecksTableSortField) => {
    if (fieldName === orderField) {
      return orderDirection === 'asc' ? (
        <button className={s.actionButton}>
          <ArrowDropDown />
        </button>
      ) : (
        <button className={s.actionButton}>
          <ArrowDropUp />
        </button>
      )
    } else {
      return <button className={s.actionButton} />
    }
  }

  const sortButtonHandler = (orderField: DecksTableSortField) => {
    onSort(orderDirection === 'asc' ? 'desc' : 'asc', orderField)
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell className={s.columnButton} onClick={() => sortButtonHandler('name')}>
            Name{sortIconsSwitcher('name')}
          </TableHeadCell>
          <TableHeadCell className={s.columnButton} onClick={() => sortButtonHandler('cardsCount')}>
            Cards{sortIconsSwitcher('cardsCount')}
          </TableHeadCell>
          <TableHeadCell className={s.columnButton} onClick={() => sortButtonHandler('updated')}>
            Last Updated{sortIconsSwitcher('updated')}
          </TableHeadCell>
          <TableHeadCell
            className={s.columnButton}
            onClick={() => sortButtonHandler('author.name')}
          >
            Created by{sortIconsSwitcher('author.name')}
          </TableHeadCell>
          <TableHeadCell
            className={s.columnButton}
            onClick={() => sortButtonHandler('author.name')}
          />
        </TableRow>
      </TableHead>
      <TableBody>
        {items?.map(item => (
          <TableRow key={item.id}>
            <TableBodyCell className={s.cellWithImage}>
              {item.cover && <img className={s.cover} src={item.cover} />}
              {item.name}
            </TableBodyCell>
            <TableBodyCell>{item.cardsCount}</TableBodyCell>
            <TableBodyCell>{item.updated}</TableBodyCell>
            <TableBodyCell>{item.author.name}</TableBodyCell>
            <TableBodyCell>
              <div className={s.buttonsContainer}>
                <button
                  className={s.actionButton}
                  disabled={item.cardsCount === 0}
                  onClick={() => onPlay(item.id)}
                >
                  <Play size={16} />
                </button>
                {item.isPrivate && (
                  <button
                    className={s.actionButton}
                    disabled={item.cardsCount === 0}
                    onClick={() => onEdit(item.id)}
                  >
                    <Edit size={16} />
                  </button>
                )}
                {item.isPrivate && (
                  <button
                    className={s.actionButton}
                    disabled={item.cardsCount === 0}
                    onClick={() => onDelete(item.id)}
                  >
                    <Trash size={16} />
                  </button>
                )}
              </div>
            </TableBodyCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
