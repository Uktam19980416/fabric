import {FC} from 'react'

interface NewsDataType {
  id: number
  img: string
  date: string
  title: string
  text: string
}

export const NewsParams: FC<{item: NewsDataType}> = ({item}) => {
  return (
    <div className="max-xl:px-2 mt-10">
        <div className="container w-full max-w-[1440px] mx-auto max-sm:px-2 max-sm:w-full mt-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold max-md:text-3xl">{item.title}</h1>
            <p className="text-xl font-medium text-slate-600">Bukhara Natural Product</p>
          </div>
          <div className="grid grid-cols-1 gap-5 mt-10">
            <div className="relative">
              <img src={item.img} alt={item.title} className="w-full h-full rounded-3xl" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-3xl hover:bg-opacity-0 transition-all duration-300">
                
              </div>
            </div>
            <div className="w-2/3 mx-auto space-y-5 max-md:w-full">
            <p className="text-slate-700 text-2xl font-bold">{item.date}</p>
            <p className="text-slate-500 text-xl max-md:text-sm font-bold">{item.text}</p>
            </div>
          </div>
        </div>
      </div>
  )
}
