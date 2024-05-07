import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { Page } from '@/components/layouts'
import { BackLink, Button, Card, Loader, Typography } from '@/components/ui'
import { useGetRandomCardQuery } from '@/services/cards/cards.service'
import { useGetDeckQuery, useSaveCardGradeMutation } from '@/services/decks/decks.service'
import clsx from 'clsx'

import s from './learn-page.module.scss'

import { RateCardRadioGroup, RateType } from '../learn-page/rate-card/rate-card-radio-group'

export const LearnPage = () => {
  const [showAnswer, setShowAnswer] = useState(false)

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

  const {
    currentData: cardData,
    isFetching: isCardFetching,
    isLoading: isCardLoading,
  } = useGetRandomCardQuery({ deckId })

  const {
    currentData: deckData,
    isFetching: isDeckFetching,
    isLoading: isDeckLoading,
  } = useGetDeckQuery({ deckId })

  const [saveGrade, { isLoading: isGradeBeingSaved }] = useSaveCardGradeMutation()

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
      <BackLink className={classNames.backButton} text={`Back to "${deckData?.name}" deck`} />
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
          <div className={classNames.imageContainer}>
            <img alt={'Question Image'} className={classNames.image} src={cardData?.questionImg} />
          </div>
        )}
        {showAnswer ? (
          <>
            <Typography.Body1>
              <Typography.Subtitle1 as={'span'}>Answer:</Typography.Subtitle1>
              {` ${cardData?.answer ?? ''} `}
            </Typography.Body1>
            {cardData?.answerImg && (
              <div className={classNames.imageContainer}>
                <img alt={'Answer Image'} className={classNames.image} src={cardData.answerImg} />
              </div>
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
