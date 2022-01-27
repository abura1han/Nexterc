import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../assets/images/logo.svg'

const Header: React.FC = () => {
  const [isMenuShow, setIsMenuShow] = React.useState<boolean>(false)
  const [isSearchShow, setIsSearchShow] = React.useState<boolean>(false)

  const handleMobileMenu = () => {
    if (window.innerWidth > 766 && !isMenuShow) {
      setIsMenuShow(true)
    } else {
      setIsMenuShow(false)
    }
  }

  React.useEffect(() => {
    handleMobileMenu()
    window.addEventListener('resize', handleMobileMenu)

    return () => {
      window.removeEventListener('resize', handleMobileMenu)
    }
  }, [])

  return (
    <header className="px-2 pb-2 sm:px-5 lg:px-10">
      <div className="mx-auto mt-2 max-w-7xl justify-between md:flex ">
        <div
          className="text-center
font-medium text-black md:text-justify"
        >
          Get 10% off on your first{' '}
          <span className="text-pink-600">purchese</span>!
        </div>
        <div className="hidden md:block">
          <ul className="flex">
            <li className="mr-5 font-medium last:mr-0">
              <Link href="/my-account">My Account</Link>
            </li>
            <li className="mr-5 font-medium last:mr-0">
              <Link href="/shopping-cart">Shopping-cart</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto hidden max-w-7xl justify-center md:flex">
        <Link href="/">
          <a href="/" title="NEXTERC">
            <Image
              loading="lazy"
              src={Logo}
              width={240}
              height={40}
              alt="NooCommerce logo"
              className="cursor-pointer"
            />
          </a>
        </Link>
      </div>
      <nav className="relative mx-auto mt-2 flex max-w-7xl items-center justify-between">
        <div className="md:hidden">
          <button onClick={() => setIsMenuShow(!isMenuShow)}>
            <span className="material-icons-outlined">menu</span>
          </button>
        </div>
        <div className="hidden md:block">
          <button onClick={() => setIsSearchShow(!isSearchShow)}>
            <span className="material-icons text-black">search</span>
          </button>
        </div>
        <div className="md:hidden">
          <Link href="/">
            <Image src={Logo} width={180} height={50} />
          </Link>
        </div>
        {isMenuShow && (
          <ul className="absolute top-full left-0 z-10 w-full rounded-md bg-white md:static md:flex md:w-auto md:rounded-none">
            <li className="mx-3 border-b-2 border-b-transparent hover:border-b-pink-600">
              <Link href="/demos">Demos</Link>
            </li>
            <li className="mx-3 border-b-2 border-b-transparent hover:border-b-pink-600">
              <Link href="/featured">Featured</Link>
            </li>
            <li className="mx-3 border-b-2 border-b-transparent hover:border-b-pink-600">
              <Link href="/pages">Pages</Link>
            </li>
            <li className="mx-3 border-b-2 border-b-transparent hover:border-b-pink-600">
              <Link href="/elements">Elements</Link>
            </li>
            <li className="mx-3 border-b-2 border-b-transparent hover:border-b-pink-600">
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li className="mx-3 border-b-2 border-b-transparent hover:border-b-pink-600">
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        )}
        <div>
          <button
            className="mr-4 md:hidden"
            onClick={() => setIsSearchShow(!isSearchShow)}
          >
            <span className="material-icons text-black">search</span>
          </button>
          <button>
            <span className="material-icons text-black">shopping_cart</span>
          </button>
        </div>
        {/* Search box */}
        {isSearchShow && (
          <div className="absolute top-0 left-0 z-10 w-full bg-white">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full items-center"
            >
              <input
                type="search"
                placeholder="Search..."
                className="w-full px-2 py-3"
              />
              <button
                type="button"
                className="px-3 py-3"
                onClick={() => setIsSearchShow(!isSearchShow)}
              >
                <span className="material-icons text-pink-600">close</span>
              </button>
            </form>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
