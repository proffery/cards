import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Pagination } from '@/components'

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
    onItemsPerPageChange: (itemsNumber: number) => {
      alert(`Items per page changed to: ${itemsNumber}`)
    },
    onPageChange: (pageNumber: number) => {
      alert(`Page number changed to: ${pageNumber}`)
    },
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
      totalPages={1}
    />
  )
}

export const Interactive: Story = {
  args: {
    currentPage: 1,
    itemsPerPage: 10,
    onItemsPerPageChange: (itemsNumber: number) => {
      alert(`Items per page changed to: ${itemsNumber}`)
    },
    onPageChange: (pageNumber: number) => {
      alert(`Page number changed to: ${pageNumber}`)
    },
    totalItems: 1000,
    totalPages: 100,
  },
  render: () => <PaginationComponent />,
}
