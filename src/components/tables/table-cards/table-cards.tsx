import { Edit, Trash } from '@/assets/icons'
import {
  Columns,
  GradeIcons,
  Table,
  TableBody,
  TableBodyCell,
  TableHead,
  TableHeadCell,
  TableRow,
  TableSortButton,
} from '@/components'
import { SortDirection } from '@/components/tables'
import { localDate } from '@/utils'

import s from '../tables.module.scss'

const columns: Columns[] = [
  {
    isClickable: true,
    key: 'question',
    title: 'Question',
  },
  {
    isClickable: true,
    key: 'answer',
    title: 'Answer',
  },
  {
    isClickable: true,
    key: 'updated',
    title: 'Last Updated',
  },
  {
    isClickable: true,
    key: 'grade',
    title: 'Grade',
  },
  {
    isClickable: false,
    key: '',
    title: '',
  },
]

type CardsTableProps = {
  cards: CardType[]
  isOwner: boolean
  onCardDelete: (itemId: string) => void
  onCardEdit: (itemId: string) => void
  onCardsSort: (orderDirection: SortDirection, orderField: string) => void
  orderDirection: SortDirection
  orderField: string
}

export type CardType = {
  answer: string
  answerImg: string
  answerVideo: string
  created: string
  deckId: string
  grade: number
  id: string
  question: string
  questionImg: string
  questionVideo: string
  shots: number
  updated: string
  userId: string
}

export const TableCards = ({
  cards,
  isOwner,
  onCardDelete,
  onCardEdit,
  onCardsSort,
  orderDirection,
  orderField,
}: CardsTableProps) => {
  const toggleDirection = orderDirection === 'asc' ? 'desc' : 'asc'

  const onSortHandler = (columnField: string) => {
    if (orderField === columnField) {
      onCardsSort(toggleDirection, orderField)
    } else {
      onCardsSort('asc', columnField)
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
        {cards?.map(item => (
          <TableRow key={item.id}>
            <TableBodyCell>
              <div className={s.contentContainer}>
                {item.questionImg && <img className={s.cover} src={item.questionImg} />}
                {item.question}
              </div>
            </TableBodyCell>
            <TableBodyCell>
              <div className={s.contentContainer}>
                {item.answerImg && <img className={s.cover} src={item.answerImg} />}
                {item.answer}
              </div>
            </TableBodyCell>
            <TableBodyCell>{localDate(item.updated)}</TableBodyCell>
            <TableBodyCell>
              <GradeIcons from={5} grade={item.grade} />
            </TableBodyCell>
            {isOwner && (
              <TableBodyCell>
                <div className={s.buttonsContainer}>
                  <button className={s.actionButton} onClick={() => onCardEdit(item.id)}>
                    <Edit size={16} />
                  </button>

                  <button className={s.actionButton} onClick={() => onCardDelete(item.id)}>
                    <Trash size={16} />
                  </button>
                </div>
              </TableBodyCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
