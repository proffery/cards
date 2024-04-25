import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Trash } from '@/assets/icons'
import { ROUTES } from '@/common/consts/routes'
import { Button, Input, Pagination, TabGroup, TabItem, TabList, Typography } from '@/components'
import { AddDeckFormFields, DeckDialog, DeleteDeck } from '@/components/dialogs'
import { Page } from '@/components/layouts'
import { SortDirection, TableDecks } from '@/components/tables'
import { decksMock } from '@/components/tables/table-decks/table-decks.stories'
import { Slider } from '@/components/ui/slider'
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
  const navigate = useNavigate()
  const [cardsValues, setCardsValues] = useState<number[]>([0, 50])
  const [orderDirection, setOrderDirection] = useState<SortDirection>('asc')
  const [orderField, setOrderField] = useState('name')
  const [tabValue, setTabValue] = useState('all')
  const [search, setSearch] = useState('')
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

  const onTabChange = (value: string) => {
    setTabValue(value)
    alert(value)
  }
  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value)
  }
  const onSearchClean = () => {
    setSearch('')
  }
  const onDeleteOpen = (deckId: string, deckName: string) => {
    setDeleteOpen(true)
    setDeckName(deckName)
    setDeckId(deckId)
  }
  const onDeleteConfirm = () => {
    alert('Delete deck by id: ' + deckId)
  }
  const onEditOpen = (deckId: string, cover: string, name: string, isPrivate: boolean) => {
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
  }
  const onValueChange = (value: number[]) => {
    setCardsValues(value)
    alert(`Cards values will be changed: ${JSON.stringify(value)}`)
  }

  const resetFilters = () => {
    setSearch('')
    setCardsValues([0, 50])
    setOrderDirection('asc')
    setOrderField('name')
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
          value={search}
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
          max={50}
          min={0}
          onValueChange={setCardsValues}
          onValueCommit={onValueChange}
          value={cardsValues}
        />
        <Button onClick={resetFilters} variant={'secondary'}>
          <Trash size={16} />
          Clear Filter
        </Button>
      </div>
      <TableDecks
        decks={decksMock}
        onDeckDelete={onDeleteOpen}
        onDeckEdit={onEditOpen}
        onDeckPlay={onDeckPlay}
        onDecksSort={onDecksSort}
        orderDirection={orderDirection}
        orderField={orderField}
      />
      <Pagination
        currentPage={1}
        itemsPerPage={10}
        onItemsPerPageChange={() => {}}
        onPageChange={() => {}}
        totalItems={100}
        totalPages={10}
      />
    </Page>
  )
}
