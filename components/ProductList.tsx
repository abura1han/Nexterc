import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Product from './Product'

const ProductList: React.FC = () => {
  return (
    <div className="mx-auto max-w-6xl px-3">
      <nav className="sticky  top-0 left-0 z-10 flex flex-col items-center bg-[#ffffff6c] pt-3 pb-1 backdrop-blur-sm md:flex-row md:justify-between">
        <ul className="flex w-full overflow-x-auto whitespace-nowrap pb-2 md:w-auto">
          <li className="mx-5 border-b-2 border-b-transparent text-base font-normal text-black first:ml-0 hover:border-b-pink-600">
            <Link href="">All Products</Link>
          </li>
          <li className="mx-5 border-b-2 border-b-transparent text-base font-normal text-black first:ml-0 hover:border-b-pink-600">
            <Link href="">Bags</Link>
          </li>
          <li className="mx-5 border-b-2 border-b-transparent text-base font-normal text-black first:ml-0 hover:border-b-pink-600">
            <Link href="">Watch</Link>
          </li>
          <li className="mx-5 border-b-2 border-b-transparent text-base font-normal text-black first:ml-0 hover:border-b-pink-600">
            <Link href="">Laptops</Link>
          </li>
          <li className="mx-5 border-b-2 border-b-transparent text-base font-normal text-black first:ml-0 hover:border-b-pink-600">
            <Link href="">Desks</Link>
          </li>
          <li className="mx-5 border-b-2 border-b-transparent text-base font-normal text-black first:ml-0 hover:border-b-pink-600">
            <Link href="">Lights</Link>
          </li>
        </ul>
        <ul className="mt-5 flex w-full justify-between sm:justify-start md:mt-0 md:w-auto">
          <li className="mx-5 border-b-2 border-b-transparent text-base font-normal text-black first:ml-0 hover:border-b-pink-600 md:last:mr-0">
            <Link href="">
              <div className="flex cursor-pointer items-center">
                <div className="mr-2 flex">
                  <span className="material-icons-outlined text-xl">
                    filter_alt
                  </span>
                </div>
                <div>Filter</div>
              </div>
            </Link>
          </li>
          <li className="mx-5 border-b-2 border-b-transparent text-base font-normal text-black first:ml-0 hover:border-b-pink-600 md:last:mr-0">
            <Link href="">
              <div className="flex cursor-pointer items-center">
                <div className="mr-2 flex">
                  <span className="material-icons-outlined text-xl">
                    search
                  </span>
                </div>
                <div>Search</div>
              </div>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="mt-10 grid grid-cols-2 gap-2 sm:max-w-6xl sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-5 lg:grid-cols-4 lg:gap-4">
        {Array(20)
          .fill(1)
          .map((_, i) => (
            <Product key={i} />
          ))}
      </div>
      <div className="my-5 flex justify-center">
        <button className="mt-4 rounded-3xl border-2 border-pink-600 px-4 py-2 font-medium text-black">
          LOAD MORE
        </button>
      </div>
    </div>
  )
}

export default ProductList
