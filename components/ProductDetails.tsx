import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import productImage from '../assets/images/macbook.png'
import Footer from './Footer'
import Product from './Product'

const ProductDetails: React.FC = () => {
  const [previewImage, setPreviewImage] = React.useState<string>('')

  return (
    <div>
      <div className="mx-auto mt-5 max-w-6xl">
        <div className="relative grid grid-cols-1 md:grid-cols-2">
          <div className="mx-3">
            <Image src={productImage} alt="" />
            <div className="flex select-none flex-wrap overflow-x-auto border border-gray-400">
              {Array(10)
                .fill(0)
                .map((_, i) => (
                  <div className="mx-1 w-20 cursor-pointer" key={i}>
                    <Link href="#">
                      <Image
                        src={productImage}
                        alt=""
                        onClick={(e) => setPreviewImage('')}
                      />
                    </Link>
                  </div>
                ))}
            </div>
          </div>
          <div className="mx-3 mt-5 md:mt-1">
            <h2 className="text-xl font-medium text-black">Macbook 14'</h2>
            <div className="flex items-center">
              <div className="flex">
                <span className="material-icons-outlined text-pink-600">
                  star
                </span>
                <span className="material-icons-outlined text-pink-600">
                  star
                </span>
                <span className="material-icons-outlined text-pink-600">
                  star
                </span>
                <span className="material-icons-outlined text-pink-600">
                  star
                </span>
                <span className="material-icons-outlined text-pink-600">
                  star_half
                </span>
              </div>
              <div className="ml-2">
                <div className="text-pink-600 hover:underline">
                  <Link href="">100 ratings</Link>
                </div>
              </div>
            </div>

            <div className="mt-3 flex">
              <div>Color:</div>
              <button className="material-icons mx-2 h-8 w-14 rounded border-2 bg-green-500 text-transparent mix-blend-lighten focus:text-white">
                done
              </button>
              <button className="material-icons mx-2 h-8 w-14 rounded border-2 bg-green-500 text-transparent focus:text-white">
                done
              </button>
              <button className="material-icons mx-2 h-8 w-14 rounded border-2 bg-green-500 text-transparent focus:text-white">
                done
              </button>
            </div>
            <div className="mt-3 flex">
              <div className="font-medium text-black">Size:</div>
              <button className="mx-2">normal</button>
              <button className="mx-2">xl</button>
              <button className="mx-2">2xl</button>
            </div>
            <div className="mt-3">
              <span className="font-medium">price:</span> $999
            </div>
            <div className="mt-3">
              <button className="rounded bg-blue-600 px-4 py-2 text-xs font-medium text-white">
                ADD TO CART
              </button>
            </div>
            <div className="mt-4">
              <h2 className="font-semibold text-black">About this product:</h2>
              <p className="mt-2 text-base text-black">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deserunt temporibus culpa laudantium illo magni labore quasi,
                libero blanditiis deleniti numquam nisi natus aspernatur quo
                totam atque aut? Officia, culpa veritatis.
              </p>
            </div>
          </div>
        </div>
        <div className="px-2">
          <div className="mt-10">
            <h2 className="text-base font-medium text-black">
              Product details
            </h2>
            <p>product details in here</p>
          </div>
          <div className="mt-10">
            <h2 className="text-base font-medium text-black">
              Product reviews
            </h2>
            <p>Product reviews here</p>
          </div>
          <div className="mt-10">
            <h2 className="mb-3 text-base font-medium text-black">
              Similar products
            </h2>
            <div className="grid grid-cols-2 gap-2 sm:max-w-6xl sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-5 lg:grid-cols-4 lg:gap-4">
              {Array(4)
                .fill(1)
                .map((_, i) => (
                  <Product key={i} />
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  )
}

export default ProductDetails
