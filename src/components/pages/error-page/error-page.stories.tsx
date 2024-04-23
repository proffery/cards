import { Layout } from '@/components/layouts/layout/layout'
import { Meta, StoryObj } from '@storybook/react'

import { ErrorPage } from './error-page'

const meta = {
  component: ErrorPage,
  tags: ['autodocs'],
  title: 'Pages/ErrorPage',
} satisfies Meta<typeof ErrorPage>

export default meta
type Story = StoryObj<typeof meta>

export const ErrorPageDefault: Story = {
  decorators: [
    Story => (
      <>
        <style>{`.sb-show-main.sb-main-padded {padding: 0}`}</style>
        <Story />
      </>
    ),
  ],
  render: () => (
    <Layout>
      <ErrorPage />
    </Layout>
  ),
}
