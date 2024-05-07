import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { SortDirection } from '@/features/decks-cards'
import { useDebounce, useQueryParam } from '@/utils'

export const useCardsFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const [orderDirection, setOrderDirection] = useQueryParam<SortDirection>(
    searchParams,
    setSearchParams,
    'sortDirection',
    'desc'
  )
  const [orderField, setOrderField] = useQueryParam<string>(
    searchParams,
    setSearchParams,
    'sortKey',
    'updated'
  )

  const [currentPage, setCurrentPage] = useQueryParam<number>(
    searchParams,
    setSearchParams,
    'page',
    1
  )

  const [itemsPerPage, setItemsPerPage] = useState(10)

  const [searchValue, setSearchValue] = useQueryParam<string>(
    searchParams,
    setSearchParams,
    'question'
  )
  const debouncedSearch = useDebounce(searchValue, 1000)

  return {
    currentPage,
    debouncedSearch,
    itemsPerPage,
    orderDirection,
    orderField,
    searchValue,
    setCurrentPage,
    setItemsPerPage,
    setOrderDirection,
    setOrderField,
    setSearchValue,
  }
}
