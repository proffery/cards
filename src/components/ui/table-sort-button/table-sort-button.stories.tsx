import type { Meta, StoryObj } from '@storybook/react'

import { Table, TableHead, TableHeadCell, TableRow, TableSortButton } from '@/components/ui'
import { fn } from '@storybook/test'

const meta = {
  argTypes: {
    orderDirection: {
      control: { type: 'radio' },
      options: ['asc', 'desc'],
    },
  },
  component: TableSortButton,
  tags: ['autodocs'],
  title: 'Components/TableSortButton',
} satisfies Meta<typeof TableSortButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    disabled: false,
    fieldKey: 'name',
    onClick: fn(),
    orderDirection: 'asc',
    orderField: 'name',
  },
  render: args => (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell>
            <TableSortButton
              {...args}
              // onClick={() =>
              //   alert(
              //     `Table must be sorted: Field name: ${args.fieldKey}, Field direction: ${
              //       args.orderDirection === 'asc' ? 'desc' : 'asc'
              //     }`
              //   )
              // }
            >
              Name
            </TableSortButton>
          </TableHeadCell>
        </TableRow>
      </TableHead>
    </Table>
  ),
}
