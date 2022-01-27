import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import productImage from '../assets/images/macbook.png'

const Product: React.FC = () => {
  const [isHover, setIsHover] = React.useState(false)

  return (
    <div>
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="cursor-pointer"
      >
        <div className="min-h-[120px] w-full bg-gray-200">
          <Link href="/product/macbook">
            <a href="/" title="Product">
              <Image src={productImage} layout="responsive" loading="lazy" />
            </a>
          </Link>
        </div>
        <div className="mt-3 flex justify-between">
          <h2 className="text-base font-medium text-black">
            <Link href="">Macbook pro</Link>
          </h2>
          <button>
            <span className="material-icons text-2xl text-black">
              favorite_border
            </span>
          </button>
        </div>
        <div>
          {isHover ? (
            <button className="text-xs font-medium text-pink-600 hover:underline">
              ADD TO CART
            </button>
          ) : (
            <div>$666</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Product
