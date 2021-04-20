import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'

export default function Github() {
  return (
    <Layout>
      <Head>
        <title>Github</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Repositorios</h1>
        <Link href='/home'>
          <a>Regresar</a>
        </Link>
      </main>
    </Layout>
  )
}
