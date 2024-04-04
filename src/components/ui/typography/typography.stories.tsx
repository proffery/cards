import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from '@/components'

const meta = {
  component: Typography.H1,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography.H1>

export default meta
type Story = StoryObj<typeof meta>

export const H1: Story = {
  render: () => (
    <Typography.H1>Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH</Typography.H1>
  ),
}
export const H2: Story = {
  render: () => (
    <Typography.H2>Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH</Typography.H2>
  ),
}
export const H3: Story = {
  render: () => (
    <Typography.H3>Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH</Typography.H3>
  ),
}
export const H4: Story = {
  render: () => (
    <Typography.H4>Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH</Typography.H4>
  ),
}
export const Body1: Story = {
  render: () => (
    <Typography.Body1>
      Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH
    </Typography.Body1>
  ),
}
export const Subtitle1: Story = {
  render: () => (
    <Typography.Subtitle1>
      Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH
    </Typography.Subtitle1>
  ),
}

export const Body2: Story = {
  render: () => (
    <Typography.Body2>
      Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH
    </Typography.Body2>
  ),
}

export const Subtitle2: Story = {
  render: () => (
    <Typography.Subtitle2>
      Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH
    </Typography.Subtitle2>
  ),
}
export const Caption: Story = {
  render: () => (
    <Typography.Caption>
      Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH
    </Typography.Caption>
  ),
}
export const Overline: Story = {
  render: () => (
    <Typography.Overline>
      Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH
    </Typography.Overline>
  ),
}
export const Link1: Story = {
  render: () => (
    <Typography.Link1>
      Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH
    </Typography.Link1>
  ),
}
export const Link2: Story = {
  render: () => (
    <Typography.Link2>
      Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH
    </Typography.Link2>
  ),
}
