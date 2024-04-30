import { Layout, Page } from '@/components/layouts'
import { Meta, StoryObj } from '@storybook/react'

import { LearnPage } from '../learn-page/learn-page'

const meta = {
  component: LearnPage,
  tags: ['autodocs'],
  title: 'Pages/LearnPage',
} satisfies Meta<typeof LearnPage>

export default meta
type Story = StoryObj<typeof meta>

export const LearnPageDefault: Story = {
  render: () => (
    <Layout>
      <Page>
        <LearnPage />
      </Page>
    </Layout>
  ),
}
const imgForCard = {
  answerImg: 'https://img.goodfon.ru/wallpaper/big/6/b8/verbena-tsvetochki-fioletovye.webp',
  questionImg:
    'https://img.goodfon.ru/wallpaper/big/f/99/tsvetok-seredinka-kolombina-lepestki.webp',
}

export const LearnPageWithPicturesDefault: Story = {
  args: { card: imgForCard },
  render: () => (
    <Layout>
      <Page>
        <LearnPage card={imgForCard} />
      </Page>
    </Layout>
  ),
}
