import Link from 'next/link'
import React from 'react'

const HEROIMAGE =
  'https://mir-s3-cdn-cf.behance.net/project_modules/1400/2493ce96261989.5eb6e88d8d903.jpg'

const HeroSection: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${HEROIMAGE})`,
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className="relative flex h-[90vh]  w-full flex-col justify-center sm:flex-row sm:items-center"
    >
      <div className="mx-auto flex max-w-6xl flex-1 items-center justify-center">
        <div className="flex flex-col items-center rounded-md bg-[#2424244a] p-4 text-center backdrop-blur-sm">
          <h2 className="text-4xl font-bold text-white">GRAY Watch out now</h2>
          <p className="mt-2 text-xl font-thin text-white">
            Cool example of create shop website
          </p>
          <button className="mt-4 rounded-3xl border-2 border-pink-600 px-8 py-2 text-white transition hover:translate-y-1">
            <Link href="/product/watch">SHOP NOW</Link>
          </button>
        </div>
      </div>

      {/* Store features */}
      <div className="right-2/4 bottom-0 flex w-full  max-w-[1000px] flex-col items-center justify-between rounded-md bg-[#24242475] p-4 backdrop-blur-sm sm:absolute sm:mt-0 sm:translate-x-2/4 md:top-[90%] md:flex-row">
        <div className="mx-3 mt-4 flex md:mt-0">
          <div>
            <span className="material-icons-outlined text-3xl text-pink-600">
              local_shipping
            </span>
          </div>
          <div className="ml-3">
            <h2 className="text-xl font-normal text-white">Free shipping</h2>
            <p className="text-base font-thin text-white">
              Anywhere in the planet
            </p>
          </div>
        </div>
        <div className="mx-3 mt-4 flex md:mt-0">
          <div>
            <span className="material-icons-outlined text-3xl text-pink-600">
              shopping_cart
            </span>
          </div>
          <div className="ml-3">
            <h2 className="text-xl font-normal text-white">Cash on delivery</h2>
            <p className="text-base font-thin text-white">
              Anywhere in the planet
            </p>
          </div>
        </div>
        <div className="mx-3 mt-4 flex md:mt-0">
          <div>
            <span className="material-icons-outlined text-3xl text-pink-600">
              loop
            </span>
          </div>
          <div className="ml-3">
            <h2 className="text-xl font-normal text-white">30 days Returns</h2>
            <p className="text-base font-thin text-white">
              Anywhere in the planet
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
