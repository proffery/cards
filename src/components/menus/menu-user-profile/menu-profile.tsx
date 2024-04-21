import { Logout, Person } from '@/assets/icons'
import UserImage from '@/assets/images/user-profile.png'
import { Avatar, Typography } from '@/components'

import s from './menu-profile.module.scss'

import { DropdownItem, DropdownMenu, DropdownSeparator } from '../../ui/drop-down'

export const MenuProfile = () => {
  return (
    <DropdownMenu
      ariaLabel={'Menu user profile'}
      trigger={<Avatar name={'John Doe'} size={'s'} url={UserImage} />}
    >
      <DropdownItem asChild>
        <div className={s.userWrapper}>
          <Avatar name={'John Doe'} size={'s'} url={UserImage} />
          <div className={s.userData}>
            <Typography.Subtitle2>John Doe John Doe John Doe</Typography.Subtitle2>
            <Typography.Caption className={s.userEmail}>email@email.com</Typography.Caption>
          </div>
        </div>
      </DropdownItem>
      <DropdownSeparator />
      <DropdownItem asChild>
        <a href={'#'}>
          <Person />
          My Profile
        </a>
      </DropdownItem>
      <DropdownSeparator />
      <DropdownItem asChild>
        <a href={'#'}>
          <Logout />
          Sing Out
        </a>
      </DropdownItem>
    </DropdownMenu>
  )
}
