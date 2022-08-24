import { useEffect } from 'react'
import {
  GOOGLE_CLIENT_ID,
  GOOGLE_TOKEN_COOKIE
} from '../../../utility/constants/app'
import { useRouter } from 'next/router'
// import { useNavigate } from 'react-router-dom'

declare var google: any
export default function GoogleLoginContainer() {
  // let navigate = useNavigate()
  const router = useRouter()

  const onSuccess = async (res: any) => {
    const tokenId = res.credential
    try {
      // TODO using fetch since useFetcher data is not showing in action
      fetch('/auth/login', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          [GOOGLE_TOKEN_COOKIE]: tokenId
        },
        method: 'POST',
        body: JSON.stringify({ [GOOGLE_TOKEN_COOKIE]: tokenId })
      })
      // const result = await response.json()
      // console.dir(result)
      // navigate('/', { replace: true })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    // prettier-ignore
    if ((window as any).google) {
      google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: onSuccess
      })
      google.accounts.id.renderButton(
        document.getElementById('sign-in-div'), {
        type: 'standard'
      })
    }
  }, [router])

  return (
    <>
      <div
        id="g_id_onload"
        data-client_id={GOOGLE_CLIENT_ID}
        data-auto_select="false"
      ></div>
      <div id="sign-in-div"></div>
    </>
  )
}
