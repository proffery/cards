import { ArrowDropDown, ArrowDropUp } from '@/assets/icons'

import s from './sort-direction-icons.module.scss'

import { CardsTableSortField, DecksTableSortField, SortDirection } from '../../index'

type SortIconProps<T = CardsTableSortField | DecksTableSortField> = {
  fieldName: T
  orderDirection: SortDirection
  orderField: T
}

export const SortDirectionIcons = ({ fieldName, orderDirection, orderField }: SortIconProps) => {
  if (fieldName === orderField) {
    return orderDirection === 'asc' ? (
      <button className={s.button}>
        <ArrowDropDown />
      </button>
    ) : (
      <button className={s.button}>
        <ArrowDropUp />
      </button>
    )
  } else {
    return <button className={s.button} />
  }
}
