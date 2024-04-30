import { useState } from 'react'

import { SortDirection } from '@/components/tables'
import { useDebounce } from '@/utils'

export const useDecksFilters = () => {
  const [requestedCardsRange, setRequestedCardsRange] = useState<number[]>([0, 99])
  const [currentCardsRange, setCurrentCardsRange] = useState<number[]>([0, 99])

  const DEFAULT_SORT_DIRECTION: SortDirection = 'desc'
  const DEFAULT_SORT_FIELD = 'updated'
  const [orderDirection, setOrderDirection] = useState<SortDirection>(DEFAULT_SORT_DIRECTION)
  const [orderField, setOrderField] = useState(DEFAULT_SORT_FIELD)

  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(5)

  const [searchValue, setSearchValue] = useState('')
  const debouncedSearch = useDebounce(searchValue, 1000)

  const [tabValue, setTabValue] = useState('all')

  return {
    DEFAULT_SORT_DIRECTION,
    DEFAULT_SORT_FIELD,
    currentCardsRange,
    currentPage,
    debouncedSearch,
    itemsPerPage,
    orderDirection,
    orderField,
    requestedCardsRange,
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
