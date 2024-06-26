import { FC } from 'react'
import ZoomedImage from './ZoomedImage'
import { FilterComment } from './FilterComment/FilterComment'
import { SimilarProducts } from './SimilarProducts'
import { useTranslation } from 'react-i18next'

interface WinterCollectionProps {
  item: {
    title: string
    image: string
  }
}

export const WinterCollectionParams: FC<WinterCollectionProps> = ({ item }) => {
  const { t } = useTranslation()
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
                    {t('home.gridSofa.eachModule.material')}:
                  </td>
                  <td className="border border-gray-200 px-4 py-4 text-xl font-extralight">
                    {t('home.gridSofa.eachModule.cottonFlannel')}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-4 text-xl font-extralight">
                    {t('home.gridSofa.eachModule.pillowcase')}:
                  </td>
                  <td className="border border-gray-200 px-4 py-4 text-xl font-extralight">
                    {t('home.gridSofa.eachModule.size')}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-4 text-xl font-extralight">
                    {t('home.gridSofa.eachModule.sheet')}:
                  </td>
                  <td className="border border-gray-200 px-4 py-4 text-xl font-extralight">
                    {t('home.gridSofa.eachModule.size2')}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-4 text-xl font-extralight">
                    {t('home.gridSofa.eachModule.duvetCover')}:
                  </td>
                  <td className="border border-gray-200 px-4 py-4 text-xl font-extralight">
                    {t('home.gridSofa.eachModule.size3')}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-4 text-xl font-extralight">
                    {t('home.gridSofa.eachModule.sizeTitle')}:
                  </td>
                  <td className="border border-gray-200 px-4 py-4 text-xl font-extralight">
                    {t('home.gridSofa.eachModule.specialSize')}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-4 text-xl font-extralight">
                    {t('home.gridSofa.eachModule.manufacturer')}:
                  </td>
                  <td className="border border-gray-200 px-4 py-4 text-xl font-extralight">
                    {t('home.gridSofa.eachModule.naturalProduct')}
                  </td>
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
