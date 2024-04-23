import { Layout, Page } from '@/components/layouts'
import { ForgotPasswordPage } from '@/components/pages/forgot-password-page/forgot-password-page'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: ForgotPasswordPage,
  tags: ['autodocs'],
  title: 'Pages/ForgotPassword',
} satisfies Meta<typeof ForgotPasswordPage>

export default meta
type Story = StoryObj<typeof meta>

export const ForgotPasswordDefault: Story = {
  render: () => (
    <Layout>
      <Page>
        <ForgotPasswordPage />
      </Page>
    </Layout>
  ),
}
