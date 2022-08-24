import '../styles/globals.css'
import Image from 'next/image'
import type { AppProps } from 'next/app'
import styles from '../styles/Home.module.css'
import { Props } from '../types/Props'
import { AuthProvider } from '../state/AuthProvider'

function Main({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </>
  )
}

function Layout({ children }: Props) {
  return (
    <>
      <header>
        <strong>My App</strong>
      </header>

      <main className={styles.main}>
        <h2>Content</h2>
        {children}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  )
}

export default Main
