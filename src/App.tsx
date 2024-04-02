import { useState } from 'react'

import { Logout } from '@/assets/icons/components/Logout'
import { Button, Input } from '@/components'

export default function App() {
  const [value, setValue] = useState('test')

  return (
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
    </div>
  )
}
