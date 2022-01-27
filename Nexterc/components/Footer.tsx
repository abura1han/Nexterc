import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../assets/images/logo-light.svg'

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-4 px-2">
      <div className="mx-auto max-w-6xl text-center text-white md:grid md:grid-cols-3 md:gap-4 md:text-left">
        <div>
          <div>
            <Image src={Logo} width={200} height={60} />
          </div>
          <div>&copy; Nextrc Inc. All Rights Reserved</div>
          <div>
            Made by{' '}
            <Link href="https://github.com/abura1han">
              <span className="font-medium text-pink-600 hover:underline">
                Abu Raihan
              </span>
            </Link>
          </div>
        </div>
        <div className="mt-4">
          <div>Address: Nextrc address</div>
          <div>
            Email:{' '}
            <Link href="mailto:ifact000@mgail.com">
              <span className="font-medium text-pink-600">
                ifact000@mgail.com
              </span>
            </Link>
          </div>
          <div>Phone: +880 123x-xxxxx</div>
        </div>
        <div className="mt-4">
          <ul>
            <li className="hover:text-pink-600 hover:underline">
              <Link href="">Facebook</Link>
            </li>
            <li className="hover:text-pink-600 hover:underline">
              <Link href="">Instagram</Link>
            </li>
            <li className="hover:text-pink-600 hover:underline">
              <Link href="">Twitter</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default React.memo(Footer)
