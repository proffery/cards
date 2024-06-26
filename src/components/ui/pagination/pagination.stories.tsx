import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Pagination } from '@/components/ui'
import { fn } from '@storybook/test'

const meta = {
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/Pagination',
} satisfies Meta<typeof Pagination>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    currentPage: 1,
    itemsPerPage: 10,
    onItemsPerPageChange: fn(),
    onPageChange: fn(),
    totalItems: 1000,
    totalPages: 100,
  },
}

const PaginationComponent = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  return (
    <Pagination
      currentPage={+currentPage}
      itemsPerPage={+itemsPerPage}
      onItemsPerPageChange={setItemsPerPage}
      onPageChange={setCurrentPage}
      totalItems={5}
      totalPages={100}
    />
  )
}

export const Interactive: Story = {
  args: {
    currentPage: 1,
    itemsPerPage: 10,
    onItemsPerPageChange: fn(),
    onPageChange: fn(),
    totalItems: 1000,
    totalPages: 100,
  },
  render: () => <PaginationComponent />,
}
