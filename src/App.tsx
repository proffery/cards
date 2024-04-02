import { Button, Input } from '@/components'

import icon from './assets/icons/log-out.svg'

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Button>
        <img alt={'icon'} src={icon} />
        Hello
      </Button>
      <Input label={'label'} placeholder={'1112'} />
      <Input label={'label2'} placeholder={'1112'} type={'password'} variant={'default'} />
      <Input placeholder={'1112'} type={'password'} variant={'search'} />
      <Input error={'dfsdg'} placeholder={'1112'} variant={'search'} />
      <Input placeholder={'1112'} type={'password'} variant={'default'} />
      <Input error={'123'} label={'321'} placeholder={'1112'} type={'password'} />
      <Input disabled error={'123'} label={'disabled'} placeholder={'1112'} type={'password'} />
    </div>
  )
}
