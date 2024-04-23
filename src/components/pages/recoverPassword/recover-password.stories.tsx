import { Layout, Page } from '@/components/layouts'
import { RecoverPassword } from '@/components/pages/recoverPassword/recover-password'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: RecoverPassword,
  tags: ['autodocs'],
  title: 'Pages/RecoverPassword',
} satisfies Meta<typeof RecoverPassword>

export default meta
type Story = StoryObj<typeof meta>

export const RecoverPasswordDefault: Story = {
  render: () => (
    <Layout>
      <Page>
        <RecoverPassword />
      </Page>
    </Layout>
  ),
}
