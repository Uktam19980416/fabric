import { FC } from 'react'
import ZoomedImage from './ZoomedImage'
import { FilterComment } from './FilterComment/FilterComment'
import { SimilarProducts } from './SimilarProducts'

interface WinterCollectionProps {
  item: {
    title: string,
    image: string
  }
}

export const WinterCollectionParams: FC<WinterCollectionProps> = ({ item }) => {
  return (
    <div className="max-xl:px-2">
      <div className="container w-full max-w-[1440px] mx-auto max-sm:px-2 max-sm:w-full mt-20">
        <div className="flex items-center justify-between gap-5">
          <ZoomedImage img={item.image} />
          <div>
            <h1 className="text-5xl font-bold">{item.title}</h1>
            <table className="border-collapse border border-gray-200 mt-5">
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-4 text-xl font-extralight">
                    Material:
                  </td>
                  <td className="border border-gray-200 px-4 py-4 text-xl font-extralight">
                  100% cotton flannel
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-4 text-xl font-extralight">
                  Pillowcase:
                  </td>
                  <td className="border border-gray-200 px-4 py-4 text-xl font-extralight">50x70 cm (2 pcs.)</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-4 text-xl font-extralight">
                  Bed sheet:
                  </td>
                  <td className="border border-gray-200 px-4 py-4 text-xl font-extralight">260×280 cm (1 piece)</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-4 text-xl font-extralight">
                  Duvet cover:
                  </td>
                  <td className="border border-gray-200 px-4 py-4 text-xl font-extralight">160x220 cm (2 pcs.)</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-4 text-xl font-extralight">
                  Size:
                  </td>
                  <td className="border border-gray-200 px-4 py-4 text-xl font-extralight">Special size</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-4 text-xl font-extralight">
                  Manufacturer:
                  </td>
                  <td className="border border-gray-200 px-4 py-4 text-xl font-extralight">Bukhara Natural Product</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <FilterComment reviewCount={0} />
        <SimilarProducts />
      </div>
    </div>
  )
}
