import { useEffect, useState } from 'react'

import { ArrowBack, ArrowForward } from '@/assets/icons'
import { Select, SelectItem, Typography } from '@/components'

import s from './pagination.module.scss'

type Props = {
  className?: string
  currentPage: number
  itemsPerPage: number
  onItemsPerPageChange: (itemsNumber: string) => void
  onPageChange: (pageNumber: string) => void
  totalItems: number
  totalPages: number
}

const START_END_PAGES_NUMBER = 5
const MIDDLE_PAGES_NUMBER = 3
const PAGE_SELECT_OPTIONS = [
  { label: '10', value: 10 },
  { label: '20', value: 20 },
  { label: '30', value: 30 },
  { label: '50', value: 50 },
  { label: '100', value: 100 },
]

export const Pagination = ({
  className,
  currentPage,
  itemsPerPage,
  onItemsPerPageChange,
  onPageChange,
  totalItems,
  totalPages,
}: Props) => {
  const isPageActive = (page: number) => currentPage === page
  const isBackArrowDisabled = currentPage === 1
  const isForwardArrowDisabled = currentPage === totalPages

  const [startEndPagesNumber, setStartEndPagesNumber] = useState(START_END_PAGES_NUMBER)
  const [middlePagesNumber, setMiddlePagesNumber] = useState(MIDDLE_PAGES_NUMBER)

  const startRangeCondition = currentPage <= startEndPagesNumber
  const middleRangeCondition =
    currentPage > startEndPagesNumber && currentPage <= totalPages - startEndPagesNumber
  const endRangeCondition = currentPage > totalPages - startEndPagesNumber

  // Generate Array of number for pages
  const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1)

  // Calculate MIN index for range of pages in middle
  const [minPageIndex, setMinPageIndex] = useState(
    Math.ceil(currentPage / middlePagesNumber) * middlePagesNumber - middlePagesNumber
  )
  // Calculate MAX index for range of pages in middle
  const [maxPageIndex, setMaxPageIndex] = useState(
    Math.ceil(currentPage / middlePagesNumber) * middlePagesNumber
  )

  // Re-calculate indexes if page change
  useEffect(() => {
    setMinPageIndex(
      Math.ceil(currentPage / middlePagesNumber) * middlePagesNumber - middlePagesNumber
    )
    setMaxPageIndex(Math.ceil(currentPage / middlePagesNumber) * middlePagesNumber)
  }, [currentPage])

  // Move range forward or back if current page is final
  useEffect(() => {
    if (currentPage === minPageIndex + 1) {
      setMinPageIndex(minPageIndex - 1)
      setMaxPageIndex(maxPageIndex - 1)
    }
    if (currentPage === maxPageIndex) {
      setMinPageIndex(minPageIndex + 1)
      setMaxPageIndex(maxPageIndex + 1)
    }
  }, [currentPage])

  // -->Narrow down<-- start/end range if current page last
  // <--Expand--> if not
  useEffect(() => {
    if (
      currentPage === START_END_PAGES_NUMBER ||
      currentPage === totalPages - START_END_PAGES_NUMBER + 1
    ) {
      setStartEndPagesNumber(START_END_PAGES_NUMBER - 1)
      setMiddlePagesNumber(MIDDLE_PAGES_NUMBER)
    } else {
      setStartEndPagesNumber(START_END_PAGES_NUMBER)
      setMiddlePagesNumber(MIDDLE_PAGES_NUMBER)
    }
  }, [currentPage])

  // Set current page to 1 if props change
  useEffect(() => {
    if (currentPage !== 1) {
      onPageChange('1')
    }
  }, [itemsPerPage, totalItems])

  const onForwardArrowClick = () => {
    onPageChange((currentPage + 1).toString())
  }
  const onBackArrowClick = () => {
    onPageChange((currentPage - 1).toString())
  }

  const pageButton = (page: number) => (
    <button
      className={`${s.page} ${isPageActive(page) ? s.active : ''}`}
      disabled={isPageActive(page)}
      key={page}
      onClick={() => onPageChange(page.toString())}
    >
      {page}
    </button>
  )

  const startRangeFilter = (
    <>
      {pagesArray.map(page => page <= startEndPagesNumber && pageButton(page))}
      <span>...</span> {pageButton(pagesArray[pagesArray.length - 1])}
    </>
  )
  const middleRangeFilter = (
    <>
      {pageButton(pagesArray[0])}
      <span>...</span>
      {pagesArray.map(page => page > minPageIndex && page <= maxPageIndex && pageButton(page))}
      <span>...</span> {pageButton(pagesArray[pagesArray.length - 1])}
    </>
  )
  const endRangeFilter = (
    <>
      {pageButton(pagesArray[0])}
      <span>...</span>
      {pagesArray.map(page => page > totalPages - startEndPagesNumber && pageButton(page))}
    </>
  )

  return (
    <Typography.Body2 as={'div'} className={`${className || ''} ${s.container}`}>
      <button className={s.arrow} disabled={isBackArrowDisabled} onClick={onBackArrowClick}>
        <ArrowBack />
      </button>
      {startRangeCondition && startRangeFilter}
      {middleRangeCondition && middleRangeFilter}
      {endRangeCondition && endRangeFilter}
      <button className={s.arrow} disabled={isForwardArrowDisabled} onClick={onForwardArrowClick}>
        <ArrowForward />
      </button>
      <div className={s.selectContainer}>
        Show
        <Select onValueChange={onItemsPerPageChange} placeholder={PAGE_SELECT_OPTIONS[0].label}>
          {PAGE_SELECT_OPTIONS.map(option => (
            <Typography.Body2 as={'div'} key={option.value}>
              <SelectItem value={option.value.toString()}>{option.label}</SelectItem>
            </Typography.Body2>
          ))}
        </Select>
        on the page
      </div>
    </Typography.Body2>
  )
}
