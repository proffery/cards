import { useState } from 'react'

import { SortDirection } from '@/components/tables'
import { useDebounce } from '@/utils'

export const useDecksFilters = () => {
  const MIN_RANGE = 0
  const MAX_RANGE = 99
  const [requestedCardsRange, setRequestedCardsRange] = useState<number[]>([MIN_RANGE, MAX_RANGE])
  const [currentCardsRange, setCurrentCardsRange] = useState<number[]>([MIN_RANGE, MAX_RANGE])

  const DEFAULT_SORT_DIRECTION: SortDirection = 'asc'
  const DEFAULT_SORT_FIELD = 'name'
  const [orderDirection, setOrderDirection] = useState<SortDirection>(DEFAULT_SORT_DIRECTION)
  const [orderField, setOrderField] = useState(DEFAULT_SORT_FIELD)

  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(5)

  const [searchValue, setSearchValue] = useState('')
  const debouncedSearch = useDebounce(searchValue, 1000)

  const [tabValue, setTabValue] = useState('all')

  const resetFilters = () => {
    setSearchValue('')
    setRequestedCardsRange([MIN_RANGE, MAX_RANGE])
    setCurrentCardsRange([MIN_RANGE, MAX_RANGE])
    setOrderDirection(DEFAULT_SORT_DIRECTION)
    setOrderField(DEFAULT_SORT_FIELD)
  }

  return {
    DEFAULT_SORT_DIRECTION,
    DEFAULT_SORT_FIELD,
    MAX_RANGE,
    MIN_RANGE,
    currentCardsRange,
    currentPage,
    debouncedSearch,
    itemsPerPage,
    orderDirection,
    orderField,
    requestedCardsRange,
    resetFilters,
    searchValue,
    setCurrentCardsRange,
    setCurrentPage,
    setItemsPerPage,
    setOrderDirection,
    setOrderField,
    setRequestedCardsRange,
    setSearchValue,
    setTabValue,
    tabValue,
  }
}
