import { Layout } from '@/components/layouts'
import { CheckEmailPage } from '@/components/pages'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: CheckEmailPage,
  tags: ['autodocs'],
  title: 'Pages/CheckEmailPage',
} satisfies Meta<typeof CheckEmailPage>

export default meta
type Story = StoryObj<typeof meta>

export const CheckEmailPageDefault: Story = {
  render: () => (
    <Layout>
      <CheckEmailPage />
    </Layout>
  ),
}
