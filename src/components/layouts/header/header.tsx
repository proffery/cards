import { memo } from 'react'

import { useNoAuthRoutes } from '@/common/hooks/no-auth-routes'
import { PrivateHeader } from '@/components/layouts/header/privatHeader'
import { PublicHeader } from '@/components/layouts/header/publicHeader'

export const Header = memo(() => {
  const isNoAuthRoute = useNoAuthRoutes()

  return isNoAuthRoute ? <PublicHeader /> : <PrivateHeader />
})
