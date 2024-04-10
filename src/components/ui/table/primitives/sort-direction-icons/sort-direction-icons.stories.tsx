import type { Meta, StoryObj } from '@storybook/react'

import { SortDirectionIcons, Table, TableHead, TableHeadCell, TableRow } from '@/components'

const meta = {
  argTypes: {
    orderDirection: {
      control: { type: 'radio' },
      options: ['asc', 'desc'],
    },
  },
  component: SortDirectionIcons,
  tags: ['autodocs'],
  title: 'Components/Table/Primitives/SortDirectionIcons',
} satisfies Meta<typeof SortDirectionIcons>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    fieldName: 'name',
    orderDirection: 'asc',
    orderField: 'name',
  },
  render: args => (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell>
            Table column
            <SortDirectionIcons {...args} />
          </TableHeadCell>
        </TableRow>
      </TableHead>
    </Table>
  ),
}
