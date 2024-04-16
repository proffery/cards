import { Edit, Play, Trash } from '@/assets/icons'
import {
  Columns,
  Table,
  TableBody,
  TableBodyCell,
  TableHead,
  TableHeadCell,
  TableRow,
  TableSortButton,
} from '@/components'
import { localDate } from '@/utils'

import s from '../tables.module.scss'

const columns: Columns[] = [
  {
    isClickable: true,
    key: 'name',
    title: 'Name',
  },
  {
    isClickable: true,
    key: 'cardsCount',
    title: 'Cards',
  },
  {
    isClickable: true,
    key: 'updated',
    title: 'Last Updated',
  },
  {
    isClickable: true,
    key: 'author.name',
    title: 'Created by',
  },
  {
    isClickable: false,
    key: '',
    title: '',
  },
]

type DecksTableProps = {
  decks: Deck[]
  isOwner: boolean
  onDeckDelete: (itemId: string) => void
  onDeckEdit: (itemId: string) => void
  onDeckPlay: (itemId: string) => void
  onDecksSort: (orderDirection: SortDirection, orderField: string) => void
  orderDirection: SortDirection
  orderField: string
}
export type SortDirection = 'asc' | 'desc'

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
  decks,
  isOwner,
  onDeckDelete,
  onDeckEdit,
  onDeckPlay,
  onDecksSort,
  orderDirection = 'asc',
  orderField = 'name',
}: DecksTableProps) => {
  const toggleDirection = orderDirection === 'asc' ? 'desc' : 'asc'

  const onSortHandler = (columnField: string) => {
    if (orderField === columnField) {
      onDecksSort(toggleDirection, orderField)
    } else {
      onDecksSort('asc', columnField)
    }
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          {columns.map(column => (
            <TableHeadCell className={s.columnButton} key={column.key}>
              <TableSortButton
                disabled={!column.isClickable}
                fieldKey={column.key}
                onClick={() => onSortHandler(column.key)}
                orderDirection={orderDirection}
                orderField={orderField}
              >
                {column.title}
              </TableSortButton>
            </TableHeadCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {decks?.map(item => (
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
                {isOwner && (
                  <button
                    className={s.actionButton}
                    disabled={item.cardsCount === 0}
                    onClick={() => onDeckEdit(item.id)}
                  >
                    <Edit size={16} />
                  </button>
                )}
                {isOwner && (
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
