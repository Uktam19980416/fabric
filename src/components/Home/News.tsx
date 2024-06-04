import {FC} from 'react'
import { Link, useParams } from 'react-router-dom'
import { NewsParams } from './NewsParams'

interface NewsDataType {
  id: number
  img: string
  date: string
  title: string
  text: string
}

export const News: FC<{ datas: NewsDataType[] }> = ({ datas }) => {
  const { id } = useParams<{ id: string }>()

  if (id) {
    const numericId = parseInt(id, 10)
    const item = datas.find((item) => item.id === numericId)
    if (!item) return <div>Item not found</div>
    return <NewsParams item={item} />
  }
  
  return (
    <div className="max-xl:px-2 mt-10">
      <div className="container w-full max-w-[1440px] mx-auto max-sm:px-2 max-sm:w-full rounded-3xl mt-10">
        <div className="text-center">
          <h2 className="font-bold text-5xl">News</h2>
          <p className="text-slate-700 text-xl font-semibold">Bukhara Natural Product</p>
        </div>

        <div className="grid grid-cols-3 gap-5 mt-10">
          {datas.map((data, index) => (
            <Link to={`/news/${data.id}`} key={index} className="cursor-pointer hover:shadow-custom-hover transition-shadow duration-300 rounded-3xl">
              <div className="w-full">
                <img src={data.img} alt={data.title} className="w-full h-full object-cover rounded-3xl" />
              </div>
              <div className="flex flex-col p-5">
                <p className="text-slate-600 text-lg font-bold">{data.date}</p>
                <p className="text-slate-700 text-2xl font-bold">{data.title}</p>
                <p className="text-slate-500 text-sm font-bold">
                  {data.text.length > 50 ? data.text.slice(0, 100) + '...' : data.text}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
