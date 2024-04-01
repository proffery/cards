import { Button } from '@/components/ui/button'

import icon from './assets/icons/log-out.svg'

export default function App() {
  return (
    <Button>
      <img alt={'icon'} src={icon} />
      Hello
    </Button>
  )
}
