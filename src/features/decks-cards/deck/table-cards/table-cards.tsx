import { Edit, Trash } from '@/assets/icons'
import { localDate } from '@/common/utils'
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
} from '@/components/ui'
import { SortDirection } from '@/features/decks-cards'

import s from './table-cards.module.scss'

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
    key: 'icons',
    title: '',
  },
]

export type EditCardDefaultValues = {
  answer: string
  answerImg: string
  question: string
  questionImg: string
}

type CardsTableProps = {
  cards: CardType[]
  disabled?: boolean
  isOwner: boolean
  onCardDelete: (cardId: string, cardName: string) => void
  onCardEdit: (cardId: string, defaultValues: EditCardDefaultValues) => void
  onCardsSort: (orderDirection: SortDirection, orderField: string) => void
  orderDirection: SortDirection | null
  orderField: null | string
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
  disabled = false,
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
                disabled={!column.isClickable || disabled}
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
        {cards?.map(card => (
          <TableRow key={card.id}>
            <TableBodyCell>
              <div className={s.contentContainer}>
                {card.questionImg && (
                  <img alt={'Question image'} className={s.cover} src={card.questionImg} />
                )}
                {card.question}
              </div>
            </TableBodyCell>
            <TableBodyCell>
              <div className={s.contentContainer}>
                {card.answerImg && (
                  <img alt={'Answer image'} className={s.cover} src={card.answerImg} />
                )}
                {card.answer}
              </div>
            </TableBodyCell>
            <TableBodyCell>{localDate(card.updated)}</TableBodyCell>
            <TableBodyCell>
              <GradeIcons from={5} grade={card.grade} />
            </TableBodyCell>
            {isOwner && (
              <TableBodyCell>
                <div className={s.buttonsContainer}>
                  <button
                    className={s.actionButton}
                    disabled={disabled}
                    onClick={() =>
                      onCardEdit(card.id, {
                        answer: card.answer,
                        answerImg: card.answerImg,
                        question: card.question,
                        questionImg: card.questionImg,
                      })
                    }
                  >
                    <Edit size={18} />
                  </button>

                  <button
                    className={s.actionButton}
                    disabled={disabled}
                    onClick={() => onCardDelete(card.id, card.question)}
                  >
                    <Trash size={18} />
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
