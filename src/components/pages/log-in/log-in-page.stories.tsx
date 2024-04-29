import { SignIn } from '@/components/forms/sign-in/sign-in'
import { Layout, Page } from '@/components/layouts'
import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { LogInPage } from './log-in-page'

const meta = {
  component: LogInPage,
  tags: ['autodocs'],
  title: 'Pages/LogInPage',
} satisfies Meta<typeof LogInPage>

export default meta
type Story = StoryObj<typeof meta>

export const LogInPageDefault: Story = {
  render: () => (
    <Layout>
      <Page>
        <SignIn onSubmit={fn()} />
      </Page>
    </Layout>
  ),
}
