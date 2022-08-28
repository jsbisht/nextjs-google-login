import type { NextPage } from 'next'
import { useAuthContext } from '../state/AuthContext'

const Home: NextPage = () => {
  const context = useAuthContext()
  return (
    <>
      <h1>Home Page</h1>
      <div>{JSON.stringify(context?.authData)}</div>
    </>
  )
}

export default Home
