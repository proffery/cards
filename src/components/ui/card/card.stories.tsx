import type { Meta, StoryObj } from '@storybook/react'

import cover from '@/assets/images/cover.png'
import { Button, Card, Typography } from '@/components/ui'

const meta = {
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
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

export const WithCover: Story = {
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
