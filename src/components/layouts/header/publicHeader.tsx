import { Link } from 'react-router-dom'

import logo from '@/assets/images/LogoITI.svg'
import { ROUTES } from '@/common/consts/routes'
import { Button } from '@/components/ui'

import s from './header.module.scss'

export const PublicHeader = () => {
  return (
    <header className={s.root}>
      <div className={s.content}>
        <Link className={s.banner} to={ROUTES.base}>
          <img alt={'Logo'} height={36} src={logo} width={157} />
        </Link>
        <Button as={Link} to={ROUTES.signIn} variant={'secondary'}>
          Sign In
        </Button>
      </div>
    </header>
  )
}
