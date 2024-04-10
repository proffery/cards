import { Edit, Play, Trash } from '@/assets/icons'
import { Table, TableBody, TableBodyCell, TableHead, TableHeadCell, TableRow } from '@/components'
import { SortDirectionIcons } from '@/components/ui/table'
import { localDate } from '@/utils'

import s from '../tables.module.scss'

type DecksTableProps = {
  items: Deck[]
  onDeckDelete: (itemId: string) => void
  onDeckEdit: (itemId: string) => void
  onDeckPlay: (itemId: string) => void
  onDecksSort: (orderDirection: SortDirection, orderField: DecksTableSortField) => void
  orderDirection: SortDirection
  orderField: DecksTableSortField
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
  onDeckDelete,
  onDeckEdit,
  onDeckPlay,
  onDecksSort,
  orderDirection = 'asc',
  orderField = 'name',
}: DecksTableProps) => {
  const onSort = (orderField: DecksTableSortField) => {
    onDecksSort(orderDirection === 'asc' ? 'desc' : 'asc', orderField)
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell className={s.columnButton} onClick={() => onSort('name')}>
            Name
            <SortDirectionIcons
              fieldName={'name'}
              orderDirection={orderDirection}
              orderField={orderField}
            />
          </TableHeadCell>
          <TableHeadCell className={s.columnButton} onClick={() => onSort('cardsCount')}>
            Cards
            <SortDirectionIcons
              fieldName={'cardsCount'}
              orderDirection={orderDirection}
              orderField={orderField}
            />
          </TableHeadCell>
          <TableHeadCell className={s.columnButton} onClick={() => onSort('updated')}>
            Last Updated
            <SortDirectionIcons
              fieldName={'updated'}
              orderDirection={orderDirection}
              orderField={orderField}
            />
          </TableHeadCell>
          <TableHeadCell className={s.columnButton} onClick={() => onSort('author.name')}>
            Created by
            <SortDirectionIcons
              fieldName={'author.name'}
              orderDirection={orderDirection}
              orderField={orderField}
            />
          </TableHeadCell>
          <TableHeadCell className={s.columnButton} onClick={() => onSort('author.name')} />
        </TableRow>
      </TableHead>
      <TableBody>
        {items?.map(item => (
          <TableRow key={item.id}>
            <TableBodyCell className={s.contentContainer}>
              {item.cover && <img className={s.cover} src={item.cover} />}
              {item.name}
            </TableBodyCell>
            <TableBodyCell>{item.cardsCount}</TableBodyCell>
            <TableBodyCell>{localDate(item.updated)}</TableBodyCell>
            <TableBodyCell>{item.author.name}</TableBodyCell>
            <TableBodyCell>
              <div className={s.buttonsContainer}>
                <button
                  className={s.actionButton}
                  disabled={item.cardsCount === 0}
                  onClick={() => onDeckPlay(item.id)}
                >
                  <Play size={16} />
                </button>
                {item.isPrivate && (
                  <button
                    className={s.actionButton}
                    disabled={item.cardsCount === 0}
                    onClick={() => onDeckEdit(item.id)}
                  >
                    <Edit size={16} />
                  </button>
                )}
                {item.isPrivate && (
                  <button
                    className={s.actionButton}
                    disabled={item.cardsCount === 0}
                    onClick={() => onDeckDelete(item.id)}
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
