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
  DeleteCard,
  DeleteDeck,
  EditCardDefaultValues,
  SortDirection,
  TableCards,
} from '@/features/decks-cards'
import { useCardsFilters } from '@/features/decks-cards/decks/dialogs/useCardsFilters'
import {
  useCreateCardMutation,
  useDeleteCardMutation,
  useGetCardsQuery,
  useUpdateCardMutation,
} from '@/services/cards/cards.service'
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
    emptyDeck: clsx(s.emptyDeck),
    pagination: clsx(s.pagination),
    root: clsx(s.root),
    topContainer: clsx(s.topContainer),
  }

  const [openedCardId, setOpenedCardId] = useState('')
  const [openedCardName, setOpenedCardName] = useState('')
  const [openedCardDefaultValues, setOpenedCardDefaultValues] =
    useState<EditCardDefaultValues | null>(null)

  const [deleteDeckIsOpen, setDeleteDeckIsOpen] = useState(false)
  const [editDeckIsOpen, setEditDeckIsOpen] = useState(false)

  const [deleteCardIsOpen, setDeleteCardIsOpen] = useState(false)
  const [editCardIsOpen, setEditCardIsOpen] = useState(false)
  const [newCardIsOpen, setNewCardIsOpen] = useState(false)

  const params = useParams<{ deckId: string }>()
  const deckId = params.deckId

  const {
    currentData: deckData,
    isFetching: isDeckFetching,
    isLoading: isDeckLoading,
  } = useGetDeckQuery({ deckId })

  const AUTH_ID = 'f2be95b9-4d07-4751-a775-bd612fc9553a'
  const isDeckOwner = (deckData && AUTH_ID === deckData?.userId) ?? false

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
  const [deleteCard, { isLoading: isCardBeingDeleted }] = useDeleteCardMutation()
  const [updateCard, { isLoading: isCardBeingUpdated }] = useUpdateCardMutation()

  const isDataGetting =
    isDeckFetching ||
    isDeckLoading ||
    isDeckBeingUpdated ||
    isDeckBeingDeleted ||
    isCardsFetching ||
    isCardsLoading ||
    isCardBeingCreated ||
    isCardBeingDeleted ||
    isCardBeingUpdated

  const onDeleteDeckConfirm = () => {
    deleteDeck({ deckId: deckData?.id ?? '' })
  }
  const onEditDeckConfirm = (data: AddDeckFormFields) => {
    updateDeck({ ...data, deckId: deckData?.id ?? '' })
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
  const onDeleteCardOpen = (cardId: string, cardName: string) => {
    setOpenedCardId(cardId)
    setOpenedCardName(cardName)
    setDeleteCardIsOpen(true)
  }
  const onDeleteCardConfirm = () => {
    deleteCard({ cardId: openedCardId })
    clearOpenedValues()
  }
  const onEditCardOpen = (cardId: string, defaultValues: EditCardDefaultValues) => {
    setOpenedCardId(cardId)
    setOpenedCardDefaultValues({ ...defaultValues })
    setEditCardIsOpen(true)
  }
  const onEditCardConfirm = (data: AddCardFormFields) => {
    updateCard({ ...data, cardId: openedCardId })
    clearOpenedValues()
  }
  const onCardsSort = (orderDirection: SortDirection, orderField: string) => {
    setOrderDirection(orderDirection)
    setOrderField(orderField)
    setCurrentPage(1)
  }
  const clearOpenedValues = () => {
    setOpenedCardId('')
    setOpenedCardName('')
    setOpenedCardDefaultValues(null)
  }

  return (
    <Page className={classNames.root} marginTop={24}>
      {isDataGetting && <Loader />}
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
      <CardDialog
        confirmText={'Update Card'}
        defaultValues={openedCardDefaultValues ?? undefined}
        key={openedCardId + 'updateCard'}
        onCancel={() => setEditCardIsOpen(false)}
        onConfirm={onEditCardConfirm}
        onOpenChange={setEditCardIsOpen}
        open={editCardIsOpen}
        title={`Edit Card "${openedCardDefaultValues?.question}"`}
      />
      <DeleteCard
        cardName={openedCardName}
        key={openedCardId + 'deleteCard'}
        onCancel={() => setDeleteCardIsOpen(false)}
        onConfirm={onDeleteCardConfirm}
        onOpenChange={setDeleteCardIsOpen}
        open={deleteCardIsOpen}
      />
      <BackLink className={classNames.backButton} text={'Back to Decks List'} />
      <div className={classNames.topContainer}>
        <Typography.H1 className={classNames.deckName}>
          {deckData?.name}
          {cards && cards.items.length > 0 && (
            <MenuDeck
              deckId={deckId}
              isOwner={isDeckOwner}
              onDelete={() => setDeleteDeckIsOpen(true)}
              onEdit={() => setEditDeckIsOpen(true)}
            />
          )}
        </Typography.H1>
        {isDeckOwner && (
          <Button disabled={isCardBeingCreated} onClick={() => setNewCardIsOpen(true)}>
            Add New Card
          </Button>
        )}
      </div>
      {deckData?.cover && (
        <img alt={'Deck cover'} className={classNames.deckCover} src={deckData?.cover} />
      )}
      {cards && cards.items.length > 0 ? (
        <>
          <Input
            cleanSearch={onSearchClean}
            disabled={isDataGetting}
            fullWidth
            onChange={onSearchChange}
            value={searchValue ?? ''}
            variant={'search'}
          />
          <TableCards
            cards={cards.items}
            disabled={isDataGetting}
            isOwner={isDeckOwner}
            onCardDelete={onDeleteCardOpen}
            onCardEdit={onEditCardOpen}
            onCardsSort={onCardsSort}
            orderDirection={orderDirection}
            orderField={orderField}
          />
          <Pagination
            className={classNames.pagination}
            currentPage={cards?.pagination.currentPage}
            disabled={isDataGetting}
            itemsPerPage={cards?.pagination.itemsPerPage}
            onItemsPerPageChange={setItemsPerPage}
            onPageChange={setCurrentPage}
            totalItems={cards?.pagination.totalItems}
            totalPages={cards?.pagination.totalPages}
          />
        </>
      ) : (
        <>
          <Typography.Body1 className={classNames.emptyDeck}>
            This deck is empty.
            {isDeckOwner ? ' Click add new card to fill this pack' : ''}
          </Typography.Body1>
          {isDeckOwner && (
            <Button disabled={isDataGetting} onClick={() => setNewCardIsOpen(true)}>
              Add New Card
            </Button>
          )}
        </>
      )}
    </Page>
  )
}