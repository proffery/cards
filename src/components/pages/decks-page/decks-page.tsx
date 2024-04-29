import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Trash } from '@/assets/icons'
import { ROUTES } from '@/common/consts/routes'
import { AddDeckFormFields, DeckDialog, DeleteDeck } from '@/components/dialogs'
import { Page } from '@/components/layouts'
import { SortDirection, TableDecks } from '@/components/tables'
import {
  Button,
  Input,
  Loader,
  Pagination,
  Slider,
  TabGroup,
  TabItem,
  TabList,
  Typography,
} from '@/components/ui'
import { useGetDecksQuery } from '@/services/decks/decks.service'
import clsx from 'clsx'

import s from './decks-page.module.scss'

import { useDecksFilters } from './useDecksFilters'

export const DecksPage = () => {
  const classNames = {
    filters: clsx(s.filters),
    root: clsx(s.root),
    slider: clsx(s.slider),
    tabSwitcher: clsx(s.tabSwitcher),
    topContainer: clsx(s.topContainer),
  }

  const navigate = useNavigate()

  const [openedName, setOpenedName] = useState('')
  const [openedId, setOpenedId] = useState('')
  const [openedCover, setOpenedCover] = useState<null | string>(null)
  const [openedIsPrivate, setOpenedIsPrivate] = useState<boolean>(false)

  const [deleteIsOpen, setDeleteIsOpen] = useState(false)
  const [editIsOpen, setEditIsOpen] = useState(false)
  const [newIsOpen, setNewIsOpen] = useState(false)

  const {
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
  } = useDecksFilters()

  const authorId = tabValue === 'all' ? undefined : '45cb2738-63fc-4fba-a6ff-1a9c84aa6015'

  const {
    currentData,
    data,
    isFetching: isDecksFetching,
    isLoading: isDecksLoading,
  } = useGetDecksQuery({
    authorId: authorId,
    currentPage: +currentPage,
    itemsPerPage: +itemsPerPage,
    maxCardsCount: requestedCardsRange[1],
    minCardsCount: requestedCardsRange[0],
    name: debouncedSearch,
    orderBy: `${orderField}-${orderDirection}`,
  })

  const decks = currentData ?? data

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value)
  }

  const onSearchClean = () => {
    setSearchValue('')
  }

  const onTabChange = (value: string) => {
    setTabValue(value)
  }

  const onDeleteOpen = (deckId: string, deckName: string) => {
    setDeleteIsOpen(true)
    setOpenedName(deckName)
    setOpenedCover(deckId)
  }

  const onDeleteConfirm = () => {
    alert('Delete deck by id: ' + openedId)
    clearOpenedValues()
  }

  const onEditOpen = (deckId: string, cover: null | string, name: string, isPrivate: boolean) => {
    setOpenedName(name)
    setOpenedCover(cover)
    setOpenedIsPrivate(isPrivate)
    setOpenedId(deckId)
    setEditIsOpen(true)
  }

  const onEditConfirm = (data: AddDeckFormFields) => {
    alert(`Edit deck with id:${openedId}, data:${JSON.stringify(data)}`)
    clearOpenedValues()
  }

  const onNewOpen = () => {
    setNewIsOpen(true)
  }

  const onNewConfirm = (data: AddDeckFormFields) => {
    alert(`Create new deck ${JSON.stringify(data)}`)
  }

  const onDeckPlay = (deckId: string) => {
    navigate(`${ROUTES.decks}/${deckId}/learn`)
  }

  const onDecksSort = (orderDirection: SortDirection, orderField: string) => {
    setOrderDirection(orderDirection)
    setOrderField(orderField)
    setCurrentPage(1)
  }

  const onRangeChange = (value: number[]) => {
    setRequestedCardsRange(value)
  }

  const clearOpenedValues = () => {
    setOpenedName('')
    setOpenedCover(null)
    setOpenedIsPrivate(false)
  }

  return (
    <Page className={classNames.root}>
      {(isDecksFetching || isDecksLoading) && <Loader />}
      <DeleteDeck
        deckName={openedName}
        onCancel={() => setDeleteIsOpen(false)}
        onConfirm={onDeleteConfirm}
        onOpenChange={setDeleteIsOpen}
        open={deleteIsOpen}
      />
      <DeckDialog
        defaultValues={{ cover: openedCover, isPrivate: openedIsPrivate, name: openedName }}
        onCancel={() => setEditIsOpen(false)}
        onConfirm={onEditConfirm}
        onOpenChange={setEditIsOpen}
        open={editIsOpen}
        title={`Edit deck ${openedName}`}
      />
      <DeckDialog
        onCancel={() => setNewIsOpen(false)}
        onConfirm={onNewConfirm}
        onOpenChange={setNewIsOpen}
        open={newIsOpen}
      />
      <div className={classNames.topContainer}>
        <Typography.H1>Decks list</Typography.H1>
        <Button onClick={onNewOpen}>Add New Deck</Button>
      </div>
      <div className={classNames.filters}>
        <Input
          cleanSearch={onSearchClean}
          onChange={onSearchChange}
          value={searchValue}
          variant={'search'}
        />
        <TabGroup
          className={classNames.tabSwitcher}
          label={'Show decks cards'}
          onValueChange={onTabChange}
        >
          <TabList>
            <TabItem selected={tabValue === 'my'} value={'my'}>
              My Decks
            </TabItem>
            <TabItem selected={tabValue === 'all'} value={'all'}>
              All Decks
            </TabItem>
          </TabList>
        </TabGroup>
        <Slider
          className={classNames.slider}
          max={MAX_RANGE}
          min={MIN_RANGE}
          onValueChange={setCurrentCardsRange}
          onValueCommit={onRangeChange}
          value={currentCardsRange}
        />
        <Button onClick={resetFilters} variant={'secondary'}>
          <Trash size={16} />
          Clear Filter
        </Button>
      </div>
      <TableDecks
        decks={decks?.items}
        onDeckDelete={onDeleteOpen}
        onDeckEdit={onEditOpen}
        onDeckPlay={onDeckPlay}
        onDecksSort={onDecksSort}
        orderDirection={orderDirection}
        orderField={orderField}
      />
      {decks && decks.pagination?.totalPages > 1 && (
        <Pagination
          currentPage={decks?.pagination.currentPage}
          itemsPerPage={decks?.pagination.itemsPerPage}
          onItemsPerPageChange={setItemsPerPage}
          onPageChange={setCurrentPage}
          totalItems={decks?.pagination.totalItems}
          totalPages={decks?.pagination.totalPages}
        />
      )}
    </Page>
  )
}
