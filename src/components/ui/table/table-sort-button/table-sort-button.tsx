import { ComponentPropsWithoutRef } from 'react'

import { ArrowDropDown, ArrowDropUp } from '@/assets/icons'

import s from './table-sort-button.module.scss'

import { SortDirection } from '../index'

type Props = {
  disabled: boolean
  fieldKey: string
  orderDirection: SortDirection
  orderField: string
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
        <ArrowDropDown />
      </button>
    ) : (
      <button className={s.button} {...rest}>
        {children}
        <ArrowDropUp />
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
