import { SignUp } from '@/components/forms'
import { Layout, Page } from '@/components/layouts'
import { SignUpPage } from '@/components/pages/sign-up/sign-up-page'
import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

const meta = {
  component: SignUpPage,
  tags: ['autodocs'],
  title: 'Pages/SignUpPage',
} satisfies Meta<typeof SignUpPage>

export default meta
type Story = StoryObj<typeof meta>

export const SignUpPageDefault: Story = {
  render: () => (
    <Layout>
      <Page>
        <SignUp onSubmit={fn()} />
      </Page>
    </Layout>
  ),
}
