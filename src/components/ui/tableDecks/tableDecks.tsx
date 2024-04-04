import { Edit, Play, Trash } from '@/assets/icons'
import { Typography } from '@/components'

import s from './tableDecks.module.scss'

type Props = {
  items?: Deck[]
}
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
  rating: number
  shots: number
  updated: string
  userId: string
}
export const TableDecks = ({ items }: Props) => {
  return (
    <table className={s.table}>
      <tr className={s.row}>
        <Typography.Subtitle2 as={'th'}>Name</Typography.Subtitle2>
        <Typography.Subtitle2 as={'th'}>Cards</Typography.Subtitle2>
        <Typography.Subtitle2 as={'th'}>Last Updated</Typography.Subtitle2>
        <Typography.Subtitle2 as={'th'}>Created by</Typography.Subtitle2>
      </tr>
      {items?.map(item => (
        <tr className={s.row} key={item.id}>
          <Typography.Body2 as={'td'}>{item.name}</Typography.Body2>
          <Typography.Body2 as={'td'}>{item.cardsCount}</Typography.Body2>
          <Typography.Body2 as={'td'}>{item.updated}</Typography.Body2>
          <Typography.Body2 as={'td'} className={s.withButtons}>
            <Typography.Body2 as={'span'}>{item.author.name}</Typography.Body2>
            <div className={s.buttonsContainer}>
              <button>
                <Play size={16} />
              </button>
              <button>
                <Edit size={16} />
              </button>
              <button>
                <Trash size={16} />
              </button>
            </div>
          </Typography.Body2>
        </tr>
      ))}
    </table>
  )
}
