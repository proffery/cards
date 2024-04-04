import { Deck } from '@/api'
type Props = {
  items?: Deck[]
}
export const TableDecks = ({ items }: Props) => {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Cards</th>
        <th>Last Updated</th>
        <th>Created by</th>
      </tr>
      {items?.map(item => (
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.cardsCount}</td>
          <td>{item.updated}</td>
          <td>{item.author.name}</td>
        </tr>
      ))}
    </table>
  )
}
