import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'

export default function Registro() {
  const router = useRouter()

  return (
    <Layout>
      <Head>
        <title>Login</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Registrarse</h1>
        <form className='flex justify-center flex-col my-12'>
          <label htmlFor=''>Nombre</label>
          <input
            placeholder='Odin Midgard'
            className='border p-3 shadow rounded-lg mb-5 mt-3'
          />

          <label htmlFor=''>Usuario</label>
          <input
            placeholder='Odin'
            className='border p-3 shadow rounded-lg mb-5 mt-3'
          />

          <label htmlFor=''>Contraseña</label>
          <input
            type='password'
            placeholder='*****'
            className='border p-3 shadow rounded-lg mb-5 mt-3'
          />

          <button className='px-4 py-2 bg-gray-200 rounded-lg text-gray bold mt-5'>
            Registrarse 🚀
          </button>

          <button
            type='button'
            className='px-4 py-2 rounded-lg text-gray-500'
            onClick={() => router.back()}
          >
            Regresar
          </button>
        </form>
      </main>
    </Layout>
  )
}
