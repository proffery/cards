import { Link } from 'react-router-dom'

import { Edit, Play, Trash } from '@/assets/icons'
import { ROUTES } from '@/common/consts/routes'
import {
  Columns,
  Table,
  TableBody,
  TableBodyCell,
  TableHead,
  TableHeadCell,
  TableRow,
  TableSortButton,
  Typography,
} from '@/components/ui'
import { Deck } from '@/services/decks/decks.types'
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
  decks?: Deck[]
  onDeckDelete: (deckId: string, deckName: string) => void
  onDeckEdit: (deckId: string, cover: null | string, name: string, isPrivate: boolean) => void
  onDeckPlay: (deckId: string) => void
  onDecksSort: (orderDirection: SortDirection, orderField: string) => void
  orderDirection: SortDirection
  orderField: string
}
export type SortDirection = 'asc' | 'desc'

export const TableDecks = ({
  decks,
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

  return !decks || decks.length === 0 ? (
    <Typography.Body1>No results found with these parameters.</Typography.Body1>
  ) : (
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
        {decks?.map(deck => (
          <TableRow key={deck.id}>
            <TableBodyCell className={s.contentContainer}>
              {deck.cover && <img alt={deck.name} className={s.cover} src={deck.cover} />}
              <Typography.Body2 as={Link} to={`${ROUTES.decks}/${deck.id}`}>
                {deck.name}
              </Typography.Body2>
            </TableBodyCell>
            <TableBodyCell>{deck.cardsCount}</TableBodyCell>
            <TableBodyCell>{localDate(deck.updated)}</TableBodyCell>
            <TableBodyCell>{deck.author.name}</TableBodyCell>
            <TableBodyCell>
              <div className={s.buttonsContainer}>
                <button
                  className={s.actionButton}
                  disabled={deck.cardsCount === 0}
                  onClick={() => onDeckPlay(deck.id)}
                >
                  <Play size={16} />
                </button>
                {deck.isPrivate && (
                  <button
                    className={s.actionButton}
                    disabled={deck.cardsCount === 0}
                    onClick={() => onDeckEdit(deck.id, deck.cover, deck.name, deck.isPrivate)}
                  >
                    <Edit size={16} />
                  </button>
                )}
                {deck.isPrivate && (
                  <button
                    className={s.actionButton}
                    disabled={deck.cardsCount === 0}
                    onClick={() => onDeckDelete(deck.id, deck.name)}
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
