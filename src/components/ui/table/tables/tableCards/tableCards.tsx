import { Edit, Trash } from '@/assets/icons'
import { Table, TableBody, TableBodyCell, TableHead, TableHeadCell, TableRow } from '@/components'
import { GradeIcons, SortDirection, SortDirectionIcons } from '@/components/ui/table'
import { localDate } from '@/utils'

import s from '../tables.module.scss'

type CardsTableProps = {
  isPrivate: boolean
  items: Cards[]
  onCardDelete: (itemId: string) => void
  onCardEdit: (itemId: string) => void
  onCardsSort: (orderDirection: SortDirection, orderField: CardsTableSortField) => void
  orderDirection: SortDirection
  orderField: CardsTableSortField
}

export type CardsTableSortField = 'answer' | 'grade' | 'question' | 'updated'

export type Cards = {
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
  isPrivate,
  items,
  onCardDelete,
  onCardEdit,
  onCardsSort,
  orderDirection,
  orderField,
}: CardsTableProps) => {
  const onSort = (orderField: CardsTableSortField) => {
    onCardsSort(orderDirection === 'asc' ? 'desc' : 'asc', orderField)
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell className={s.columnButton} onClick={() => onSort('question')}>
            Question
            <SortDirectionIcons
              fieldName={'question'}
              orderDirection={orderDirection}
              orderField={orderField}
            />
          </TableHeadCell>
          <TableHeadCell className={s.columnButton} onClick={() => onSort('answer')}>
            Answer
            <SortDirectionIcons
              fieldName={'answer'}
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
          <TableHeadCell className={s.columnButton} onClick={() => onSort('grade')}>
            Grade
            <SortDirectionIcons
              fieldName={'grade'}
              orderDirection={orderDirection}
              orderField={orderField}
            />
          </TableHeadCell>
          <TableHeadCell className={s.columnButton} onClick={() => onSort('grade')} />
        </TableRow>
      </TableHead>
      <TableBody>
        {items?.map(item => (
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
            <TableBodyCell>
              <div className={s.buttonsContainer}>
                {isPrivate && (
                  <button className={s.actionButton} onClick={() => onCardEdit(item.id)}>
                    <Edit />
                  </button>
                )}
                {isPrivate && (
                  <button className={s.actionButton} onClick={() => onCardDelete(item.id)}>
                    <Trash />
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
