import { useState } from 'react'

import { EditProfile } from '@/components/forms/edit-profile/edit-profile'
import { Page } from '@/components/layouts'

type Props = {
  avatarUrl: string
  email: string
  name: string
}

export const EditProfilePage = (props: Props) => {
  const [userData] = useState<Props>(props)

  const onAvatarChange = (file: File) => {
    alert(`Avatar changed: ${file.name}`)
  }

  const onLogout = () => {
    alert('User logged out')
  }

  const onSubmit = (data: {}) => {
    alert(`Form data submitted: ${JSON.stringify(data)}`)
  }

  return (
    <Page>
      <EditProfile
        avatarUrl={userData.avatarUrl}
        email={userData.email}
        name={userData.name}
        onAvatarChange={onAvatarChange}
        onLogout={onLogout}
        onSubmit={onSubmit}
      />
    </Page>
  )
}
