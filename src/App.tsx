import { useEffect, useState } from 'react'

import { Deck, decksAPI } from '@/api'
import { Logout } from '@/assets/icons/components/Logout'
import { Button, Input, TabSwitcher, Typography } from '@/components'
import { TableDecks } from '@/components/ui/tableDecks/tableDecks'

export default function App() {
  const [value, setValue] = useState('test')
  const [decks, setDecks] = useState<Deck[]>([])

  const getDecks = async () => {
    try {
      const res = await decksAPI.fetchDecks()

      setDecks(res.data.items)
      console.log(res.data.items)
    } catch (e) {
      console.warn(e)
    }
  }

  useEffect(() => {
    getDecks()
  }, [])

  return (
    <div style={{ display: 'flex', gap: '20px', width: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Button>
          <Logout size={16} />
          Hello
        </Button>
        <Button disabled variant={'primary'}>
          Hello
        </Button>
        <Input label={'default'} placeholder={'placeholder'} />
        <Input label={'password'} placeholder={'placeholder'} type={'password'} />
        <Input
          cleanSearch={() => setValue('')}
          onChange={e => setValue(e.currentTarget.value)}
          placeholder={'placeholder'}
          value={value}
          variant={'search'}
        />
        <Input disabled placeholder={'placeholder'} variant={'search'} />
        <Input errorMessage={'Error!'} placeholder={'placeholder'} variant={'search'} />
        <Input placeholder={'placeholder'} type={'password'} />
        <Input
          errorMessage={'Error!'}
          label={'Error'}
          placeholder={'placeholder'}
          type={'password'}
        />
        <Input
          disabled
          errorMessage={'Error!'}
          label={'disabled'}
          placeholder={'placeholder'}
          type={'password'}
        />
        <TabSwitcher />
      </div>
      <div>
        <TableDecks items={decks} />
        <Typography.H1 as={'a'}>text</Typography.H1>
      </div>
    </div>
  )
}
