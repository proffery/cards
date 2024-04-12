import type { Meta, StoryObj } from '@storybook/react'

import cover from '@/assets/images/cover.png'
import { Button, Card, RadioGroup, RadioGroupItem, Typography } from '@/components'

const answerOptions = [
  { label: 'Did not know', value: '1' },
  { label: 'Forgot', value: '2' },
  { label: 'A lot of thought', value: '3' },
  { label: 'Сonfused', value: '4' },
  { label: 'Knew the answer', value: '5' },
]
const meta = {
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultQuestion: Story = {
  args: {
    children: (
      <>
        <Typography.H1 style={{ textAlign: 'center' }}>Learn &quot;Deck name&quot;</Typography.H1>
        <Typography.Body1 as={'div'}>
          <Typography.Subtitle1 as={'span'}>Question:</Typography.Subtitle1> How &quot;This&quot;
          works in JavaScript?
          <Typography.Body2 style={{ color: 'var(--color-dark-100)' }}>
            Number of attempts to answer a question: 10
          </Typography.Body2>
        </Typography.Body1>
        <Button fullWidth>Show Answer</Button>
      </>
    ),
  },
}

export const WithCoverQuestion: Story = {
  args: {
    children: (
      <>
        <Typography.H1 style={{ textAlign: 'center' }}>Learn &quot;Deck name&quot;</Typography.H1>
        <Typography.Body1 as={'div'}>
          <Typography.Subtitle1 as={'span'}>Question:</Typography.Subtitle1> How &quot;This&quot;
          works in JavaScript?
          <Typography.Body2 style={{ color: 'var(--color-dark-100)' }}>
            Number of attempts to answer a question: 10
          </Typography.Body2>
        </Typography.Body1>
        <img alt={'Cover'} src={cover} style={{ width: '100%' }} />
        <Button fullWidth>Show Answer</Button>
      </>
    ),
  },
}

export const DefaultAnswer: Story = {
  args: {
    children: (
      <>
        <Typography.H1 style={{ textAlign: 'center' }}>Learn &quot;Deck name&quot;</Typography.H1>
        <Typography.Body1 as={'div'}>
          <Typography.Subtitle1 as={'span'}>Question:</Typography.Subtitle1> How &quot;This&quot;
          works in JavaScript?
          <Typography.Body2 style={{ color: 'var(--color-dark-100)' }}>
            Number of attempts to answer a question: 10
          </Typography.Body2>
        </Typography.Body1>
        <Typography.Body1>
          <Typography.Subtitle1 as={'span'}>Answer:</Typography.Subtitle1> This is how
          &quot;This&quot; works in JavaScript
        </Typography.Body1>
        <Typography.Subtitle1 as={'span'}>Rate yourself:</Typography.Subtitle1>
        <Typography.Body2 as={'div'}>
          <RadioGroup>
            {answerOptions.map(option => (
              <RadioGroupItem key={option.value} value={option.value}>
                {option.label}
              </RadioGroupItem>
            ))}
          </RadioGroup>
        </Typography.Body2>
        <Button fullWidth>Show Answer</Button>
      </>
    ),
  },
}

export const WithCoverAnswer: Story = {
  args: {
    children: (
      <>
        <Typography.H1 style={{ textAlign: 'center' }}>Learn &quot;Deck name&quot;</Typography.H1>
        <Typography.Body1 as={'div'}>
          <Typography.Subtitle1 as={'span'}>Question:</Typography.Subtitle1> How &quot;This&quot;
          works in JavaScript?
          <Typography.Body2 style={{ color: 'var(--color-dark-100)' }}>
            Number of attempts to answer a question: 10
          </Typography.Body2>
        </Typography.Body1>
        <Typography.Body1>
          <Typography.Subtitle1 as={'span'}>Answer:</Typography.Subtitle1> This is how
          &quot;This&quot; works in JavaScript
        </Typography.Body1>
        <Typography.Subtitle1 as={'span'}>Rate yourself:</Typography.Subtitle1>
        <img alt={'Cover'} src={cover} style={{ width: '100%' }} />
        <Typography.Body2 as={'div'}>
          <RadioGroup>
            {answerOptions.map(option => (
              <RadioGroupItem key={option.value} value={option.value}>
                {option.label}
              </RadioGroupItem>
            ))}
          </RadioGroup>
        </Typography.Body2>
        <Button fullWidth>Show Answer</Button>
      </>
    ),
  },
}
