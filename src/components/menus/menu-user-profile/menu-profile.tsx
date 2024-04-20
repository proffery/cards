import { Logout, Person } from '@/assets/icons'
import UserProfile from '@/assets/images/user-profile.png'
import { Typography } from '@/components'

import s from './menu-profile.module.scss'

import { DropdownItem, DropdownMenu, DropdownSeparator } from '../../ui/drop-down'

export const MenuProfile = () => {
  return (
    <DropdownMenu
      ariaLabel={'Menu user profile'}
      trigger={<img alt={'UserProfile'} className={s.userTirgger} src={UserProfile}></img>}
    >
      <DropdownItem asChild>
        <div className={s.userWrapper}>
          <img alt={'UserProfile'} className={s.userImage} src={UserProfile}></img>
          <div className={s.userData}>
            <Typography.Subtitle2 className={s.userName}>
              John Doe John Doe John Doe
            </Typography.Subtitle2>
            <Typography.Caption className={s.userEmail}>email@email.com</Typography.Caption>
          </div>
        </div>
      </DropdownItem>
      <DropdownSeparator />
      <DropdownItem asChild>
        <a className={s.userItemLink} href={'#'}>
          <Person />
          My Profile
        </a>
      </DropdownItem>
      <DropdownSeparator />
      <DropdownItem asChild>
        <a className={s.userItemLink} href={'#'}>
          <Logout />
          Sing Out
        </a>
      </DropdownItem>
    </DropdownMenu>
  )
}
