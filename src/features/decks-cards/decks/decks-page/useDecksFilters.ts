import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { SortDirection } from '@/features/decks-cards'
import { useDebounce, useQueryParam } from '@/utils'

export const useDecksFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const [requestedCardsRange, setRequestedCardsRange] = useState<number[]>([0, 99])
  const [minCardsCount, setMinCardsCount] = useQueryParam<number>(
    searchParams,
    setSearchParams,
    'minCards',
    0
  )
  const [maxCardsCount, setMaxCardsCount] = useQueryParam<number>(
    searchParams,
    setSearchParams,
    'maxCards'
  )

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

  const [itemsPerPage, setItemsPerPage] = useState(5)

  const [searchValue, setSearchValue] = useQueryParam<string>(
    searchParams,
    setSearchParams,
    'search'
  )
  const debouncedSearch = useDebounce(searchValue, 1000)

  const [tabValue, setTabValue] = useQueryParam<string>(
    searchParams,
    setSearchParams,
    'currentTab',
    'all'
  )

  return {
    currentPage,
    debouncedSearch,
    itemsPerPage,
    maxCardsCount,
    minCardsCount,
    orderDirection,
    orderField,
    requestedCardsRange,
    searchValue,
    setCurrentPage,
    setItemsPerPage,
    setMaxCardsCount,
    setMinCardsCount,
    setOrderDirection,
    setOrderField,
    setRequestedCardsRange,
    setSearchValue,
    setTabValue,
    tabValue,
  }
}
