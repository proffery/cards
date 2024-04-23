import { Layout } from '@/components/layouts'
import { CreatePasswordPage } from '@/components/pages/create-password-page/create-password-page'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: CreatePasswordPage,
  tags: ['autodocs'],
  title: 'Pages/CreatePasswordPage',
} satisfies Meta<typeof CreatePasswordPage>

export default meta
type Story = StoryObj<typeof meta>

export const ForgotPasswordDefault: Story = {
  render: () => (
    <Layout>
      <CreatePasswordPage />
    </Layout>
  ),
}
