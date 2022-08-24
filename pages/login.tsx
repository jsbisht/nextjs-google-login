import type { NextPage } from 'next'
import styled from 'styled-components'
import GoogleLogin from '../components/organisms/auth/GoogleLogin'

const Login: NextPage = () => {
  return (
    <StyledLoginPage className="login-providers">
      <div className="login-provider">
        <h1>Login page</h1>
        <GoogleLogin />
      </div>
    </StyledLoginPage>
  )
}

const StyledLoginPage = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
`

export default Login
