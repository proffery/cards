import { useEffect, useState } from 'react'

import { ArrowBack, ArrowForward } from '@/assets/icons'
import { Select, SelectItem, Typography } from '@/components/ui'
import clsx from 'clsx'

import s from './pagination.module.scss'

type Props = {
  className?: string
  currentPage?: number
  disabled?: boolean
  itemsPerPage?: number
  onItemsPerPageChange: (itemsNumber: number) => void
  onPageChange: (pageNumber: number) => void
  paginationOptions?: number[]
  totalItems?: number
  totalPages?: number
}

const START_END_PAGES_NUMBER = 5
const MIDDLE_PAGES_NUMBER = 3

export const Pagination = ({
  className,
  currentPage = 1,
  disabled = false,
  itemsPerPage = 5,
  onItemsPerPageChange,
  onPageChange,
  paginationOptions = [5, 10, 15, 20],
  totalItems = 1,
  totalPages = 1,
}: Props) => {
  const isPageActive = (page: number) => currentPage === page
  const isBackArrowDisabled = currentPage === 1
  const isForwardArrowDisabled = currentPage === totalPages

  const [startEndPagesNumber, setStartEndPagesNumber] = useState(START_END_PAGES_NUMBER)
  const [middlePagesNumber, setMiddlePagesNumber] = useState(MIDDLE_PAGES_NUMBER)

  const startRangeCondition = currentPage <= startEndPagesNumber
  const middleRangeCondition =
    currentPage > startEndPagesNumber && currentPage <= totalPages - startEndPagesNumber
  const endRangeCondition = !startRangeCondition && !middleRangeCondition

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
      onPageChange(1)
    }
  }, [itemsPerPage, totalItems])

  const onForwardArrowClick = () => {
    onPageChange(currentPage + 1)
  }
  const onBackArrowClick = () => {
    onPageChange(currentPage - 1)
  }

  const pageButton = (page: number) => (
    <button
      className={`${s.page} ${isPageActive(page) ? s.active : ''}`}
      disabled={isPageActive(page) || disabled}
      key={page}
      onClick={() => onPageChange(page)}
    >
      {page}
    </button>
  )

  const startRangeFilter = (
    <>
      {pagesArray.map(page => page <= startEndPagesNumber && pageButton(page))}
      {totalPages > START_END_PAGES_NUMBER && (
        <>
          <span>...</span>
        </>
      )}
      {totalPages > START_END_PAGES_NUMBER && pageButton(pagesArray[pagesArray.length - 1])}
    </>
  )

  const middleRangeFilter = (
    <>
      {totalPages > START_END_PAGES_NUMBER && (
        <>
          {pageButton(pagesArray[0])}
          <span>...</span>
        </>
      )}
      {pagesArray.map(page => page > minPageIndex && page <= maxPageIndex && pageButton(page))}
      {totalPages > START_END_PAGES_NUMBER && (
        <>
          <span>...</span> {pageButton(pagesArray[pagesArray.length - 1])}
        </>
      )}
    </>
  )

  const endRangeFilter = (
    <>
      {pageButton(pagesArray[0])}
      {(totalPages > START_END_PAGES_NUMBER || totalPages > startEndPagesNumber) && (
        <>
          <span>...</span>
        </>
      )}
      {pagesArray.map(page => page > totalPages - startEndPagesNumber && pageButton(page))}
    </>
  )

  return (
    <Typography.Body2 as={'div'} className={clsx(s.container, className)}>
      <button
        className={s.arrow}
        disabled={isBackArrowDisabled ?? disabled}
        onClick={onBackArrowClick}
      >
        <ArrowBack size={16} />
      </button>
      {startRangeCondition && startRangeFilter}
      {middleRangeCondition && middleRangeFilter}
      {endRangeCondition && endRangeFilter}
      <button
        className={s.arrow}
        disabled={isForwardArrowDisabled ?? disabled}
        onClick={onForwardArrowClick}
      >
        <ArrowForward size={16} />
      </button>
      <div className={s.selectContainer}>
        Show
        <Select
          disabled={disabled}
          onValueChange={value => onItemsPerPageChange(+value)}
          value={itemsPerPage.toString()}
          variant={'small'}
        >
          <Typography.Body2 as={'div'}>
            {paginationOptions.map(i => (
              <SelectItem key={i} value={i.toString()} variant={'small'}>
                {i}
              </SelectItem>
            ))}
          </Typography.Body2>
        </Select>
        on the page
      </div>
    </Typography.Body2>
  )
}
