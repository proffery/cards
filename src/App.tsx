import { Button, Input } from '@/components'

import icon from './assets/icons/log-out.svg'

export default function App() {
  return (
    <>
      <Button>
        <img alt={'icon'} src={icon} />
        Hello
      </Button>
      <Input label={'label'} />
      <Input label={'label2'} variant={'password'} />
      <Input variant={'search'} />
      <Input variant={'password'} />
    </>
  )
}
