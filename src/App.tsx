import { useState } from 'react'

import { Button, Input } from '@/components'

import icon from './assets/icons/log-out.svg'

export default function App() {
  const [value, setValue] = useState('test')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Button>
        <svg height={'16px'} viewBox={'0 0 24 24'} width={'16px'}>
          <use href={`${icon}#log-out`} xlinkHref={`${icon}#log-out`} />
        </svg>
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
