import { Layout } from '@/components/layouts/layout/layout'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Layout,
  tags: ['autodocs'],
  title: 'Layouts/Layout',
} satisfies Meta<typeof Layout>

export default meta
type Story = StoryObj<typeof meta>

export const LayoutDefault: Story = {
  args: {
    children: 'Content',
  },
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
      <div>Lorem ipsum</div>
    </Layout>
  ),
}
