import { Trash } from '@/assets/icons'
import { Button, Input, Pagination, TabGroup, TabItem, TabList, Typography } from '@/components'
import { Page } from '@/components/layouts'
import { TableDecks } from '@/components/tables'
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

  return (
    <Page className={classNames.root}>
      <div className={classNames.topContainer}>
        <Typography.H1>Decks list</Typography.H1>
        <Button>Add New Deck</Button>
      </div>
      <div className={classNames.filters}>
        <Input variant={'search'} />
        <TabGroup className={classNames.tabSwitcher} defaultIndex={1} label={'Show decks cards'}>
          <TabList>
            <TabItem>My Cards</TabItem>
            <TabItem>All Cards</TabItem>
          </TabList>
        </TabGroup>
        <Slider
          className={classNames.slider}
          max={90}
          min={0}
          onValueChange={() => {}}
          value={[5, 80]}
        />
        <Button variant={'secondary'}>
          <Trash size={16} />
          Clear Filter
        </Button>
      </div>
      <TableDecks
        decks={decksMock}
        isOwner
        onDeckDelete={() => {}}
        onDeckEdit={() => {}}
        onDeckPlay={() => {}}
        onDecksSort={() => {}}
        orderDirection={'asc'}
        orderField={'name'}
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
