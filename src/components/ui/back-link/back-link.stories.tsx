import type { Meta, StoryObj } from '@storybook/react'

import { BackLink } from './back-link'

const meta: Meta<typeof BackLink> = {
  component: BackLink,
  tags: ['autodocs'],
  title: 'Components/BackLink',
}

export default meta

type BackLinkStory = StoryObj<typeof BackLink>

export const Default: BackLinkStory = {
  args: {
    text: 'Back to Decks List',
  },
  render: args => <BackLink {...args} />,
}
