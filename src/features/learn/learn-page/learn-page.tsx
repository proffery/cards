import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { Page } from '@/components/layouts'
import { BackLink, Button, Card, Loader, Modal, ModalTrigger, Typography } from '@/components/ui'
import { useGetRandomCardQuery, useSaveCardGradeMutation } from '@/services/cards/cards.service'
import { useGetDeckQuery } from '@/services/decks/decks.service'
import clsx from 'clsx'

import s from './learn-page.module.scss'

import { RateCardRadioGroup, RateType } from '../learn-page/rate-card/rate-card-radio-group'

export const LearnPage = () => {
  const [showAnswer, setShowAnswer] = useState(false)
  const [questionIsOpen, setQuestionIsOpen] = useState(false)
  const [answerIsOpen, setAnswerIsOpen] = useState(false)

  const classNames = {
    backButton: clsx(s.backButton),
    caption: clsx(s.caption),
    card: clsx(s.card, showAnswer ? s.flipForward : s.flipBack),
    image: clsx(s.image),
    imageContainer: clsx(s.imageContainer),
    submitButton: clsx(s.submitButton),
  }

  const params = useParams<{ deckId: string }>()
  const deckId = params.deckId

  const [saveGrade, { data: prevCardData, isLoading: isGradeBeingSaved }] =
    useSaveCardGradeMutation()

  const {
    currentData: cardData,
    isFetching: isCardFetching,
    isLoading: isCardLoading,
  } = useGetRandomCardQuery({ deckId, previousCardId: prevCardData?.id })

  const {
    currentData: deckData,
    isFetching: isDeckFetching,
    isLoading: isDeckLoading,
  } = useGetDeckQuery({ deckId })

  const handleRateSubmit = (data: RateType) => {
    if (data && cardData) {
      saveGrade({ cardId: cardData.id, grade: +data.grade })
    }
    setShowAnswer(false)
  }
  const isDataGetting =
    isCardFetching || isCardLoading || isDeckFetching || isDeckLoading || isGradeBeingSaved

  return (
    <Page marginTop={24}>
      <BackLink className={classNames.backButton} text={'Go back'} />
      {isDataGetting && <Loader />}
      <Card className={classNames.card}>
        <Typography.H1>{`Learn "${deckData?.name ?? ''}"`}</Typography.H1>
        <div>
          <Typography.Body1>
            <Typography.Subtitle1 as={'span'}>Question:</Typography.Subtitle1>
            {` ${cardData?.question ?? ''}`}
          </Typography.Body1>
          <Typography.Body2 className={classNames.caption}>
            Count of attempts: {cardData?.shots}
          </Typography.Body2>
        </div>
        {cardData?.questionImg && (
          <Modal
            onOpenChange={setQuestionIsOpen}
            open={questionIsOpen}
            title={'Question image'}
            trigger={
              <ModalTrigger>
                <div className={classNames.imageContainer}>
                  <img
                    alt={'Question Image'}
                    className={classNames.image}
                    src={cardData?.questionImg}
                  />
                </div>
              </ModalTrigger>
            }
          >
            <img alt={'Question Image'} className={classNames.image} src={cardData?.questionImg} />
          </Modal>
        )}
        {showAnswer ? (
          <>
            <Typography.Body1>
              <Typography.Subtitle1 as={'span'}>Answer:</Typography.Subtitle1>
              {` ${cardData?.answer ?? ''} `}
            </Typography.Body1>
            {cardData?.answerImg && (
              <Modal
                onOpenChange={setAnswerIsOpen}
                open={answerIsOpen}
                title={'Answer image'}
                trigger={
                  <ModalTrigger>
                    <div className={classNames.imageContainer}>
                      <img
                        alt={'Answer Image'}
                        className={classNames.image}
                        src={cardData.answerImg}
                      />
                    </div>
                  </ModalTrigger>
                }
              >
                <img alt={'Answer Image'} className={classNames.image} src={cardData?.answerImg} />
              </Modal>
            )}
            <RateCardRadioGroup disabled={isDataGetting} onSubmit={handleRateSubmit} />
          </>
        ) : (
          <Button className={classNames.submitButton} fullWidth onClick={() => setShowAnswer(true)}>
            Show Answer
          </Button>
        )}
      </Card>
    </Page>
  )
}
