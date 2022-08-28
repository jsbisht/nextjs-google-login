import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAuthContext } from '../../../state/AuthContext'
import { Props } from '../../../types/Props'
import { LOGIN_UI_PATH } from '../../../utility/constants/app'

function AuthenticationChecker({ children }: Props) {
  const router = useRouter()
  const context = useAuthContext()
  const { pathname } = router

  useEffect(() => {
    if (!context?.authData && pathname !== LOGIN_UI_PATH) {
      router.push(LOGIN_UI_PATH)
    }
  }, [router])

  return <>{children}</>
}

export { AuthenticationChecker }
