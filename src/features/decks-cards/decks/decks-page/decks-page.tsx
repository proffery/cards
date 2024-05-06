import { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Trash } from '@/assets/icons'
import { ROUTES } from '@/common/consts/routes'
import { Page } from '@/components/layouts'
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
import {
  AddDeckFormFields,
  DeckDialog,
  DeleteDeck,
  SortDirection,
  TableDecks,
} from '@/features/decks-cards/'
import { useGetMeQuery } from '@/services/auth/auth.service'
import {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDecksQuery,
  useGetMinMaxQuery,
  useUpdateDeckMutation,
} from '@/services/decks/decks.service'
import clsx from 'clsx'

import s from './decks-page.module.scss'

import { useDecksFilters } from './useDecksFilters'

export const DecksPage = () => {
  const classNames = {
    emptySearch: clsx(s.emptySearch),
    filters: clsx(s.filters),
    pagination: clsx(s.pagination),
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

  const [minMaxCardsCount, setMinMaxCardsCount] = useState<number[]>([0, 99])

  const {
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
  } = useDecksFilters()

  const { data: minMaxData } = useGetMinMaxQuery()

  useEffect(() => {
    if (minMaxData) {
      setMinMaxCardsCount([minMaxData.min, minMaxData.max])
      setMaxCardsCount(minMaxData.max)
      setMinCardsCount(minMaxData.min)
      setRequestedCardsRange([minMaxData.min, minMaxData.max])
    }
  }, [minMaxData?.max])

  const { data: me } = useGetMeQuery()
  const authId = me?.id
  const authorId = tabValue === 'all' ? undefined : authId

  const {
    currentData: currentDecksData,
    data: decksData,
    isFetching: isDecksFetching,
    isLoading: isDecksLoading,
  } = useGetDecksQuery({
    authorId: authorId,
    currentPage: currentPage ?? undefined,
    itemsPerPage: +itemsPerPage,
    maxCardsCount: maxCardsCount ?? undefined,
    minCardsCount: minCardsCount ?? undefined,
    name: debouncedSearch ?? '',
    orderBy: `${orderField}-${orderDirection}`,
  })

  const decks = currentDecksData ?? decksData

  const [createDeck, { isLoading: isDeckBeingCreated }] = useCreateDeckMutation()
  const [deleteDeck, { isLoading: isDeckBeingDeleted }] = useDeleteDeckMutation()
  const [updateDeck, { isLoading: isDeckBeingUpdated }] = useUpdateDeckMutation()

  const isDataGetting =
    isDeckBeingCreated ||
    isDecksLoading ||
    isDecksFetching ||
    isDeckBeingDeleted ||
    isDeckBeingUpdated

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
    setOpenedId(deckId)
  }
  const onDeleteConfirm = () => {
    deleteDeck({ deckId: openedId })
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
    updateDeck({ ...data, deckId: openedId })
    clearOpenedValues()
  }
  const onNewConfirm = (data: AddDeckFormFields) => {
    createDeck(data)
  }
  const onDeckPlay = (deckId: string) => {
    navigate(`${ROUTES.decks}/${deckId}${ROUTES.learn}`)
  }
  const onDecksSort = (orderDirection: SortDirection, orderField: string) => {
    setOrderDirection(orderDirection)
    setOrderField(orderField)
    setCurrentPage(1)
  }
  const onRangeChange = (value: number[]) => {
    setMaxCardsCount(value[1])
    setMinCardsCount(value[0])
  }
  const clearOpenedValues = () => {
    setOpenedName('')
    setOpenedCover(null)
    setOpenedIsPrivate(false)
  }
  const resetFilters = () => {
    setSearchValue('')
    setRequestedCardsRange(minMaxCardsCount)
    setMaxCardsCount(minMaxCardsCount[1])
    setMinCardsCount(minMaxCardsCount[0])
    setOrderDirection(null)
    setOrderField(null)
  }

  return (
    <Page className={classNames.root}>
      {isDataGetting && <Loader />}
      <DeleteDeck
        deckName={openedName}
        key={openedId + 'delete'}
        onCancel={() => setDeleteIsOpen(false)}
        onConfirm={onDeleteConfirm}
        onOpenChange={setDeleteIsOpen}
        open={deleteIsOpen}
      />
      <DeckDialog
        confirmText={'Update deck'}
        defaultValues={{ cover: openedCover, isPrivate: openedIsPrivate, name: openedName }}
        key={openedId + 'editDeck'}
        onCancel={() => setEditIsOpen(false)}
        onConfirm={onEditConfirm}
        onOpenChange={setEditIsOpen}
        open={editIsOpen}
        title={`Edit deck ${openedName}`}
      />
      <DeckDialog
        key={openedId + 'createNewDeck'}
        onCancel={() => setNewIsOpen(false)}
        onConfirm={onNewConfirm}
        onOpenChange={setNewIsOpen}
        open={newIsOpen}
      />
      <div className={classNames.topContainer}>
        <Typography.H1>Decks list</Typography.H1>
        <Button disabled={isDataGetting} onClick={() => setNewIsOpen(true)}>
          Add New Deck
        </Button>
      </div>
      <div className={classNames.filters}>
        <Input
          cleanSearch={onSearchClean}
          disabled={isDataGetting}
          onChange={onSearchChange}
          value={searchValue ?? ''}
          variant={'search'}
        />
        <TabGroup
          className={classNames.tabSwitcher}
          label={'Show decks cards'}
          onValueChange={onTabChange}
        >
          <TabList>
            <TabItem disabled={isDataGetting} selected={tabValue === 'my'} value={'my'}>
              My Decks
            </TabItem>
            <TabItem disabled={isDataGetting} selected={tabValue === 'all'} value={'all'}>
              All Decks
            </TabItem>
          </TabList>
        </TabGroup>
        <Slider
          className={classNames.slider}
          disabled={isDataGetting}
          max={minMaxCardsCount[1]}
          min={minMaxCardsCount[0]}
          onValueChange={setRequestedCardsRange}
          onValueCommit={onRangeChange}
          value={requestedCardsRange}
        />
        <Button disabled={isDataGetting} onClick={resetFilters} variant={'secondary'}>
          <Trash size={16} />
          Clear Filter
        </Button>
      </div>
      {decks && decks?.items.length > 0 ? (
        <>
          <TableDecks
            authId={authId}
            decks={decks?.items}
            disabled={isDataGetting}
            onDeckDelete={onDeleteOpen}
            onDeckEdit={onEditOpen}
            onDeckPlay={onDeckPlay}
            onDecksSort={onDecksSort}
            orderDirection={orderDirection}
            orderField={orderField}
          />
          <Pagination
            className={classNames.pagination}
            currentPage={decks?.pagination.currentPage}
            disabled={isDataGetting}
            itemsPerPage={decks?.pagination.itemsPerPage}
            onItemsPerPageChange={setItemsPerPage}
            onPageChange={setCurrentPage}
            totalItems={decks?.pagination.totalItems}
            totalPages={decks?.pagination.totalPages}
          />
        </>
      ) : (
        <Typography.Body1 className={classNames.emptySearch}>
          No results found with these parameters
        </Typography.Body1>
      )}
    </Page>
  )
}
