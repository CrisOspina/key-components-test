import Link from 'next/link'
import Layout from '../components/Layout'

export default function Navbar() {
  return (
    <Layout>
      <ul className='flex justify-around items-center w-full-screen h-screen mt-5'>
        <li className='mx-5'>
          <Link href='/github'>
            <h1 className='text-3xl cursor-pointer'>Github 🚀</h1>
          </Link>
        </li>
        <li className='mx-5'>
          <Link href='/calendar'>
            <h1 className='text-3xl cursor-pointer'>Google Calendar 📌</h1>
          </Link>
        </li>
        <li className='mx-5'>
          <Link href='/login'>
            <h1 className='text-3xl bold cursor-pointer'>Salir ⚓</h1>
          </Link>
        </li>
      </ul>
    </Layout>
  )
}
