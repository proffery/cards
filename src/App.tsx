import { SignUp } from '@/components/forms'

export default function App() {
  return (
    <div>
      <SignUp onSubmit={data => console.log(data)} />
    </div>
  )
}
