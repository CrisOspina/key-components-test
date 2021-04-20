import Link from 'next/link'
import Navbar from '../components/Navbar'
import { useRouter } from 'next/router'
import Github from './github'

function Home() {
  const { pathname } = useRouter()
  return (
    <div>
      <Navbar />
      {pathname === '/github' && <Github />}
      {pathname === '/calendar' && <Github />}
    </div>
  )
}

export default Home
