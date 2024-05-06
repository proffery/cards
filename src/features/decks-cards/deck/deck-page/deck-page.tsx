import { ChangeEvent, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Page } from '@/components/layouts'
import { MenuDeck } from '@/components/menus'
import { BackLink, Button, Input, Loader, Pagination, Typography } from '@/components/ui'
import {
  AddCardFormFields,
  AddDeckFormFields,
  CardDialog,
  DeckDialog,
  DeleteDeck,
} from '@/features/decks-cards'
import { useCardsFilters } from '@/features/decks-cards/decks/dialogs/useCardsFilters'
import { useCreateCardMutation, useGetCardsQuery } from '@/services/cards/cards.service'
import {
  useDeleteDeckMutation,
  useGetDeckQuery,
  useUpdateDeckMutation,
} from '@/services/decks/decks.service'
import clsx from 'clsx'

import s from './deck-page.module.scss'

export const DeckPage = () => {
  const classNames = {
    backButton: clsx(s.backButton),
    deckCover: clsx(s.deckCover),
    deckName: clsx(s.deckName),
    pagination: clsx(s.pagination),
    root: clsx(s.root),
    topContainer: clsx(s.topContainer),
  }

  const [openedCardId, setOpenedCardId] = useState('')

  const [deleteDeckIsOpen, setDeleteDeckIsOpen] = useState(false)
  const [editDeckIsOpen, setEditDeckIsOpen] = useState(false)

  const [deleteCardIsOpen, setDeleteCardIsOpen] = useState(false)
  const [editCardIsOpen, setEditCardIsOpen] = useState(false)
  const [newCardIsOpen, setNewCardIsOpen] = useState(false)

  const params = useParams<{ deckId: string }>()
  const deckId = params.deckId

  const AUTH_ID = 'f2be95b9-4d07-4751-a775-bd612fc9553a'

  const {
    currentData: deckData,
    isFetching: isDeckFetching,
    isLoading: isDeckLoading,
  } = useGetDeckQuery({ deckId })

  const {
    currentPage,
    debouncedSearch,
    itemsPerPage,
    orderDirection,
    orderField,
    searchValue,
    setCurrentPage,
    setItemsPerPage,
    setOrderDirection,
    setOrderField,
    setSearchValue,
  } = useCardsFilters()

  const {
    currentData: currentCardsData,
    data: cardsData,
    isFetching: isCardsFetching,
    isLoading: isCardsLoading,
  } = useGetCardsQuery({
    currentPage: currentPage ?? undefined,
    deckId,
    itemsPerPage: itemsPerPage,
    orderBy: `${orderField}-${orderDirection}`,
    question: debouncedSearch ?? '',
  })

  const cards = currentCardsData ?? cardsData

  const [deleteDeck, { isLoading: isDeckBeingDeleted }] = useDeleteDeckMutation()
  const [updateDeck, { isLoading: isDeckBeingUpdated }] = useUpdateDeckMutation()

  const [createCard, { isLoading: isCardBeingCreated }] = useCreateCardMutation()

  const onDeleteDeckConfirm = () => {
    deleteDeck({ deckId: deckData?.id ?? '' })
    clearOpenedValues()
  }

  const onEditDeckConfirm = (data: AddDeckFormFields) => {
    updateDeck({ ...data, deckId: deckData?.id ?? '' })
    clearOpenedValues()
  }

  const onNewCardConfirm = (data: AddCardFormFields) => {
    createCard({ ...data, deckId: deckData?.id ?? '' })
  }

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value)
  }

  const onSearchClean = () => {
    setSearchValue('')
  }

  const clearOpenedValues = () => {}

  return (
    <Page className={classNames.root} marginTop={24}>
      {(isDeckFetching ||
        isDeckLoading ||
        isDeckBeingUpdated ||
        isDeckBeingDeleted ||
        isCardBeingCreated) && <Loader />}
      <DeleteDeck
        deckName={deckData?.name ?? ''}
        key={deckData?.id + 'deleteDeck'}
        onCancel={() => setDeleteDeckIsOpen(false)}
        onConfirm={onDeleteDeckConfirm}
        onOpenChange={setDeleteDeckIsOpen}
        open={deleteDeckIsOpen}
      />
      <DeckDialog
        confirmText={'Update deck'}
        defaultValues={{
          cover: deckData?.cover ?? '',
          isPrivate: deckData?.isPrivate ?? false,
          name: deckData?.name ?? '',
        }}
        key={deckData?.id + 'editDeck'}
        onCancel={() => setEditDeckIsOpen(false)}
        onConfirm={onEditDeckConfirm}
        onOpenChange={setEditDeckIsOpen}
        open={editDeckIsOpen}
        title={`Edit deck ${deckData?.name ?? ''}`}
      />
      <CardDialog
        key={openedCardId + 'createNewCard'}
        onCancel={() => setNewCardIsOpen(false)}
        onConfirm={onNewCardConfirm}
        onOpenChange={setNewCardIsOpen}
        open={newCardIsOpen}
      />
      <BackLink className={classNames.backButton} text={'Back to Decks List'} />
      <div className={classNames.topContainer}>
        <Typography.H1 className={classNames.deckName}>
          {deckData?.name}

          {AUTH_ID === deckData?.userId && (
            <MenuDeck
              deckId={deckId}
              onDelete={() => setDeleteDeckIsOpen(true)}
              onEdit={() => setEditDeckIsOpen(true)}
            />
          )}
        </Typography.H1>
        {AUTH_ID === deckData?.userId && (
          <Button disabled={isCardBeingCreated} onClick={() => setNewCardIsOpen(true)}>
            Add New Card
          </Button>
        )}
      </div>
      {deckData?.cover && (
        <img alt={'Deck cover'} className={classNames.deckCover} src={deckData?.cover} />
      )}
      <Input
        cleanSearch={onSearchClean}
        fullWidth
        onChange={onSearchChange}
        value={searchValue ?? ''}
        variant={'search'}
      />
      <Pagination
        className={classNames.pagination}
        currentPage={cards?.pagination.currentPage}
        disabled={
          isCardBeingCreated ||
          isCardsFetching ||
          isCardsLoading ||
          isDeckBeingDeleted ||
          isDeckBeingUpdated
        }
        itemsPerPage={cards?.pagination.itemsPerPage}
        onItemsPerPageChange={setItemsPerPage}
        onPageChange={setCurrentPage}
        totalItems={cards?.pagination.totalItems}
        totalPages={cards?.pagination.totalPages}
      />
    </Page>
  )
}
