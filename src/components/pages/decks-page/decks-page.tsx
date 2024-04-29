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

export const DecksPage = () => {
  const classNames = {
    filters: clsx(s.filters),
    root: clsx(s.root),
    slider: clsx(s.slider),
    tabSwitcher: clsx(s.tabSwitcher),
    topContainer: clsx(s.topContainer),
  }
  const MIN_RANGE = 0
  const MAX_RANGE = 99
  const DEFAULT_SORT_DIRECTION: SortDirection = 'asc'
  const DEFAULT_SORT_FIELD = 'name'

  const navigate = useNavigate()

  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(5)

  const [requestedCardsRange, setRequestedCardsRange] = useState<number[]>([MIN_RANGE, MAX_RANGE])
  const [currentCardsRange, setCurrentCardsRange] = useState<number[]>([MIN_RANGE, MAX_RANGE])

  const [orderDirection, setOrderDirection] = useState<SortDirection>(DEFAULT_SORT_DIRECTION)
  const [orderField, setOrderField] = useState(DEFAULT_SORT_FIELD)

  const [tabValue, setTabValue] = useState('all')
  const [searchValue, setSearchValue] = useState('')

  const [deckName, setDeckName] = useState('')
  const [deckId, setDeckId] = useState('')

  const [deleteOpen, setDeleteOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)
  const [newOpen, setNewOpen] = useState(false)
  const [defaultValues, setDefaultValues] = useState<AddDeckFormFields>({
    cover: '',
    isPrivate: false,
    name: '',
  })

  const authorId = tabValue === 'all' ? undefined : '45cb2738-63fc-4fba-a6ff-1a9c84aa6015'

  const { currentData, data } = useGetDecksQuery({
    authorId: authorId,
    currentPage: +currentPage,
    itemsPerPage: +itemsPerPage,
    maxCardsCount: requestedCardsRange[1],
    minCardsCount: requestedCardsRange[0],
    name: searchValue,
    orderBy: `${orderField}-${orderDirection}`,
  })

  const decks = currentData ?? data

  const onTabChange = (value: string) => {
    setTabValue(value)
  }

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value)
  }

  const onSearchClean = () => {
    setSearchValue('')
  }

  const onDeleteOpen = (deckId: string, deckName: string) => {
    setDeleteOpen(true)
    setDeckName(deckName)
    setDeckId(deckId)
  }
  const onDeleteConfirm = () => {
    alert('Delete deck by id: ' + deckId)
  }

  const onEditOpen = (deckId: string, cover: null | string, name: string, isPrivate: boolean) => {
    setDefaultValues({ cover, isPrivate, name })
    setEditOpen(true)
    setDeckId(deckId)
  }
  const onEditConfirm = (data: AddDeckFormFields) => {
    alert(`Edit deck with id:${deckId}, data:${JSON.stringify(data)}`)
  }

  const onNewOpen = () => {
    setNewOpen(true)
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

  const resetFilters = () => {
    setSearchValue('')
    setRequestedCardsRange([MIN_RANGE, MAX_RANGE])
    setCurrentCardsRange([MIN_RANGE, MAX_RANGE])
    setOrderDirection(DEFAULT_SORT_DIRECTION)
    setOrderField(DEFAULT_SORT_FIELD)
  }

  return (
    <Page className={classNames.root}>
      <DeleteDeck
        deckName={deckName}
        onCancel={() => setDeleteOpen(false)}
        onConfirm={onDeleteConfirm}
        onOpenChange={setDeleteOpen}
        open={deleteOpen}
      />
      <DeckDialog
        defaultValues={defaultValues}
        onCancel={() => setEditOpen(false)}
        onConfirm={onEditConfirm}
        onOpenChange={setEditOpen}
        open={editOpen}
        title={`Edit deck ${defaultValues.name}`}
      />
      <DeckDialog
        onCancel={() => setNewOpen(false)}
        onConfirm={onNewConfirm}
        onOpenChange={setNewOpen}
        open={newOpen}
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
