import { Layout } from '@/components/layouts'
import { EditProfilePage } from '@/components/pages'
import { Meta, StoryObj } from '@storybook/react'

import avatar from '../../../assets/images/user-profile.png'

const meta = {
  component: EditProfilePage,
  tags: ['autodocs'],
  title: 'Pages/EditProfilePage',
} satisfies Meta<typeof EditProfilePage>

export default meta
type Story = StoryObj<typeof meta>

export const EditProfilePageDefault: Story = {
  args: {
    avatarUrl: avatar,
    email: 'email@email.com',
    name: 'John Doe John Doe',
  },
  render: args => (
    <Layout>
      <EditProfilePage {...args} />
    </Layout>
  ),
}
