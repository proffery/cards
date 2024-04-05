import { ArrowDropDown, ArrowDropUp, Edit, Play, Trash } from '@/assets/icons'
import { Typography } from '@/components'

import s from './tableDecks.module.scss'

type DecksTableProps = {
  items?: Deck[]
  onDelete: (itemId: string) => void
  onEdit: (itemId: string) => void
  onPlay: (itemId: string) => void
  onSort: (orderDirection: OrderDirection, orderField: OrderField) => void
  orderDirection?: OrderDirection
  orderField?: OrderField
}
export type OrderDirection = 'asc' | 'desc'
export type OrderField = 'author.name' | 'cardsCount' | 'name' | 'updated'

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
  const sortIconsSwitcher = (fieldName: OrderField) => {
    if (fieldName === orderField) {
      return orderDirection === 'asc' ? <ArrowDropDown /> : <ArrowDropUp />
    }
  }
  const playButtonHandler = (itemId: string) => {
    onPlay(itemId)
  }
  const editButtonHandler = (itemId: string) => {
    onEdit(itemId)
  }
  const deleteButtonHandler = (itemId: string) => {
    onDelete(itemId)
  }
  const sortButtonHandler = (orderField: OrderField) => {
    onSort(orderDirection === 'asc' ? 'desc' : 'asc', orderField)
  }

  return (
    <table className={s.table}>
      <thead>
        <tr className={s.row}>
          <Typography.Subtitle2 as={'th'} className={s.headCell}>
            <button className={s.columnButton} onClick={() => sortButtonHandler('name')}>
              Name{sortIconsSwitcher('name')}
            </button>
          </Typography.Subtitle2>
          <Typography.Subtitle2 as={'th'} className={s.headCell}>
            <button className={s.columnButton} onClick={() => sortButtonHandler('cardsCount')}>
              Cards{sortIconsSwitcher('cardsCount')}
            </button>
          </Typography.Subtitle2>
          <Typography.Subtitle2 as={'th'} className={s.headCell}>
            <button className={s.columnButton} onClick={() => sortButtonHandler('updated')}>
              Last Updated{sortIconsSwitcher('updated')}
            </button>
          </Typography.Subtitle2>
          <Typography.Subtitle2 as={'th'} className={s.headCell}>
            <button className={s.columnButton} onClick={() => sortButtonHandler('author.name')}>
              Created by{sortIconsSwitcher('author.name')}
            </button>
          </Typography.Subtitle2>
        </tr>
      </thead>
      <tbody>
        {items?.map(item => (
          <tr className={s.row} key={item.id}>
            <Typography.Body2 as={'td'} className={s.bodyCell}>
              {item.name}
            </Typography.Body2>
            <Typography.Body2 as={'td'} className={s.bodyCell}>
              {item.cardsCount}
            </Typography.Body2>
            <Typography.Body2 as={'td'} className={s.bodyCell}>
              {item.updated}
            </Typography.Body2>
            <Typography.Body2 as={'td'} className={`${s.bodyCell} ${s.cellWithButtons}`}>
              <Typography.Body2 as={'span'}>{item.author.name}</Typography.Body2>
              <div className={s.buttonsContainer}>
                <button
                  className={s.actionButton}
                  disabled={item.cardsCount === 0}
                  onClick={() => playButtonHandler(item.id)}
                >
                  <Play size={16} />
                </button>
                {item.isPrivate && (
                  <button
                    className={s.actionButton}
                    disabled={item.cardsCount === 0}
                    onClick={() => editButtonHandler(item.id)}
                  >
                    <Edit size={16} />
                  </button>
                )}
                {item.isPrivate && (
                  <button
                    className={s.actionButton}
                    disabled={item.cardsCount === 0}
                    onClick={() => deleteButtonHandler(item.id)}
                  >
                    <Trash size={16} />
                  </button>
                )}
              </div>
            </Typography.Body2>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
