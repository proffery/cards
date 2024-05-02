import { ComponentPropsWithoutRef } from 'react'

import { ArrowDropDown, ArrowDropUp } from '@/assets/icons'
import { SortDirection } from '@/features/decks/'

import s from './table-sort-button.module.scss'

type Props = {
  disabled: boolean
  fieldKey: string
  orderDirection: SortDirection | null
  orderField: null | string
} & ComponentPropsWithoutRef<'button'>
export type Columns = {
  isClickable: boolean
  key: string
  title: string
}
export const TableSortButton = ({
  children,
  fieldKey,
  orderDirection,
  orderField,
  ...rest
}: Props) => {
  if (fieldKey === orderField) {
    return orderDirection === 'asc' ? (
      <button className={s.button} {...rest}>
        {children}
        <ArrowDropUp size={16} />
      </button>
    ) : (
      <button className={s.button} {...rest}>
        {children}
        <ArrowDropDown size={16} />
      </button>
    )
  } else {
    return (
      <button className={s.button} {...rest}>
        {children}
      </button>
    )
  }
}
