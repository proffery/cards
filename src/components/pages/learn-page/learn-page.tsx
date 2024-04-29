import { useState } from 'react'

import { RateCardRadioGroup } from '@/components/pages/learn-page/rate-card/rate-card-radio-group'
import { BackLink, Button, Card, Typography } from '@/components/ui'

import s from './learn-page.module.scss'

type CardType = {
  answerImg?: string | undefined
  questionImg?: string | undefined
}
type LearnPageType = {
  card?: CardType
}
export const LearnPage = ({ card }: LearnPageType) => {
  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <div className={s.root}>
      <BackLink text={'Back to Decks List'} />
      <div className={s.cardWrapper}>
        <Card className={s.content}>
          <Typography.H1>Learn “Deck Name”</Typography.H1>

          <Typography.Body1>Question: How "This" works in JavaScript?</Typography.Body1>

          {card?.questionImg && (
            <div className={s.image}>
              <img alt={'Question Image'} className={s.cover} src={card.questionImg} />
            </div>
          )}

          <Typography.Body2 className={s.caption}>
            Количество попыток ответов на вопрос: 10
          </Typography.Body2>

          {showAnswer ? (
            <>
              <div className={s.answer}>
                <Typography.Body1>Answer: This is how "This" works in JavaScript</Typography.Body1>
              </div>

              {card?.answerImg && (
                <div className={s.image}>
                  <img
                    alt={'Answer Image'}
                    className={s.cover}
                    height={'120px'}
                    src={card.answerImg}
                    width={'350px'}
                  />{' '}
                </div>
              )}

              <RateCardRadioGroup onSubmit={() => {}} />
            </>
          ) : (
            <Button className={s.buttons} fullWidth onClick={() => setShowAnswer(true)}>
              Show Answer
            </Button>
          )}
        </Card>
      </div>
    </div>
  )
}
