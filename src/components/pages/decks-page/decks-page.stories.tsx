import { Layout } from '@/components/layouts'
import { DecksPage } from '@/components/pages/decks-page/decks-page'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: DecksPage,
  tags: ['autodocs'],
  title: 'Pages/DecksPage',
} satisfies Meta<typeof DecksPage>

export default meta
type Story = StoryObj<typeof meta>

export const DecksPageDefault: Story = {
  render: () => (
    <Layout>
      <DecksPage />
    </Layout>
  ),
}
