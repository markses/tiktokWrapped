import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-brown-800 text-cream-100 py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="mb-2 md:mb-0">© {new Date().getFullYear()} TikTok Wrapped. All rights reserved.</p>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/legal/terms" className="hover:text-brown-300">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/legal/privacy" className="hover:text-brown-300">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer