import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-brown-800 text-cream-100 py-4">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          TikTok Wrapped
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-brown-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="hover:text-brown-300">
              Blogs
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header