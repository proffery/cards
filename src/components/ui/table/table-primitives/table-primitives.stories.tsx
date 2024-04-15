import type { Meta, StoryObj } from '@storybook/react'

import { Table, TableBody, TableBodyCell, TableHead, TableHeadCell, TableRow } from '@/components'

const meta = {
  component: Table,
  tags: ['autodocs'],
  title: 'Components/Table/Default',
} satisfies Meta<typeof Table>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell>Column1</TableHeadCell>
          <TableHeadCell>Column2</TableHeadCell>
          <TableHeadCell>Column3</TableHeadCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableBodyCell>Cell1</TableBodyCell>
          <TableBodyCell>Cell2</TableBodyCell>
          <TableBodyCell>Cell3</TableBodyCell>
        </TableRow>
        <TableRow>
          <TableBodyCell>Cell4</TableBodyCell>
          <TableBodyCell>Cell5</TableBodyCell>
          <TableBodyCell>Cell6</TableBodyCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}
