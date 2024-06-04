import { FC } from 'react'
import byzantium from '../../assets/images/diz-68-scaled-370x278.jpg'
import eveningGarden from '../../assets/images/diz-66-scaled-370x278.jpg'
import featherMarq from '../../assets/images/diz-65-scaled-370x278.jpg'
import lavender from '../../assets/images/diz-64-scaled-370x278.jpg'
import { WinterCollectionDataType } from '../../types/types'

export const SimilarProducts: FC = () => {
  const data: WinterCollectionDataType[] = [
    {
      id: 7,
      title: 'Byzantium',
      img: byzantium,
    },
    {
      id: 8,
      title: 'Evening garden',
      img: eveningGarden,
    },
    {
      id: 9,
      title: 'Feather Marquis',
      img: featherMarq,
    },
    {
      id: 10,
      title: 'Lavender Roses',
      img: lavender,
    },
  ]
  return (
    <div className="max-xl:px-2">
      <div className="container w-full max-w-[1440px] mx-auto max-sm:px-2 max-sm:w-full mt-20">
        <h1 className="text-slate-950 font-bold text-5xl text-center">
          Similar products
        </h1>
        <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-iphone:grid-cols-1 gap-5 mt-10">
          {data.map((item) => (
            <div
              key={item.id}
              className="cursor-pointer hover:shadow-custom-hover transition-shadow duration-300 rounded-3xl"
            >
              <div>
              <img
                src={item.img}
                alt={item.title}
                className="rounded-3xl w-full h-full object-cover"
              />
              </div>
              <div className="p-5">
                <h2 className="text-lg text-teal-800 font-bold hover:text-orange-600 cursor-pointer">
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
