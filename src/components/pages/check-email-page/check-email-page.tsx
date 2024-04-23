import { CheckEmail } from '@/components/forms'
import { Page } from '@/components/layouts'

export const CheckEmailPage = () => {
  const email = 'some@email.com' //need to change in future

  return (
    <Page>
      <CheckEmail email={email} />
    </Page>
  )
}
