import { useParams } from 'react-router-dom'

import { CheckEmail } from '@/components/forms'
import { Page } from '@/components/layouts'

export const CheckEmailPage = () => {
  const params = useParams<{ email: string }>()

  return (
    <Page>
      <CheckEmail email={params?.email} />
    </Page>
  )
}
