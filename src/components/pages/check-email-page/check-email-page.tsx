import { useEffect, useState } from 'react'

import { CheckEmail } from '@/components/forms'
import { Page } from '@/components/layouts'

export const CheckEmailPage = () => {
  // const params = useParams<{ email: string }>()

  const [email, setEmail] = useState('')

  useEffect(() => {
    const storedEmail = sessionStorage.getItem('email') // Retrieve email from session storage

    if (storedEmail) {
      setEmail(storedEmail)
    }
  }, [])

  return (
    <Page>
      <CheckEmail email={email} />
    </Page>
  )
}
