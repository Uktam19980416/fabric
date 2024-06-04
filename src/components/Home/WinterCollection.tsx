import {FC} from 'react'
import { WinterCollectionDataType } from '../../types/types'
import { Link, useParams } from 'react-router-dom'
import { WinterCollectionParams } from './WinterCollectionParams';

interface WinterCollectionProps {
  data: WinterCollectionDataType[];
}

export const WinterCollection: FC<WinterCollectionProps> = ({data}) => {
  const {title} = useParams<{title: string}>()

  if (title) {
    const item = data.find(item => item.title === title);
    if (!item) return <div>Item not found</div>;
    return <WinterCollectionParams item={item} />
  }

  return (
    <div className="max-xl:px-2 mt-10">
      <div className="container w-full max-w-[1440px] mx-auto max-sm:px-2 max-sm:w-full mt-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Winter collection</h1>
          <p className="text-xl font-medium text-slate-600">Bukhara Natural Product</p>
        </div>
        <div className="grid grid-cols-5 gap-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-iphone:grid-cols-1 mt-10">
          {data.map((item) => (
            <Link to={`/${item.title}`} key={item.id} className="relative cursor-pointer">
              <img src={item.image} alt={item.title} className="w-full h-full rounded-3xl" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-3xl hover:bg-opacity-0 transition-all duration-300">
                <h2 className="text-3xl text-slate-50 font-bold">{item.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
