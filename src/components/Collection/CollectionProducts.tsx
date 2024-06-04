import { FC, useState, FormEvent } from 'react'
import { WinterCollectionDataType } from '../../types/types'

interface WinterCollectionProps {
  datas: WinterCollectionDataType[]
}

export const CollectionProducts: FC<WinterCollectionProps> = ({ datas }) => {
  const [search, setSearch] = useState('' as string)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 16
  const searchData = datas.filter((data) =>
    data.title.toLowerCase().includes(search.toLowerCase())
  )

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = Math.min(startIndex + itemsPerPage, searchData.length)
  const paginatedData = searchData.slice(startIndex, endIndex)

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const generatePageNumbers = () => {
    const totalPages = Math.ceil(searchData.length / itemsPerPage)
    const pageNumbers = []
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i)
    }
    return pageNumbers.map((pageNumber) => (
      <button
        key={pageNumber}
        className={`px-2 py-1 mr-2 rounded-md ${
          currentPage === pageNumber ? 'bg-slate-200' : ''
        }`}
        onClick={() => handlePageChange(pageNumber)}
      >
        {pageNumber}
      </button>
    ))
  }

  return (
    <div className="container w-full max-w-[1440px] mx-auto px-2 rounded-3xl mt-10">
      <div className="w-full flex gap-5">
        <aside className="w-1/3 px-5 space-y-5">
          <div className="relative">
            <input
              className="w-full py-4 border-2 pl-5 rounded-full"
              type="text"
              placeholder="Search"
              onChange={(e: FormEvent<HTMLInputElement>) =>
                setSearch(e.currentTarget.value)
              }
            />
            <button className="py-2 px-5 bg-orange-600 rounded-full text-slate-50 absolute right-3 top-3 hover:bg-slate-50 hover:text-orange-600 transition-all hover:border-2 hover:border-orange-600">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>

          <div className="flex items-center justify-between px-5">
            <p className="text-lg font-bold">Collection</p>
            <div>
              <i className="fa-solid fa-greater-than text-xs"></i>
            </div>
          </div>

          <ul className="pl-10">
            <li className="text-lg text-slate-600 cursor-pointer">
              Spring Collection
            </li>
            <li className="text-lg text-slate-600 cursor-pointer">
              Winter Collection
            </li>
            <li className="text-lg text-slate-600 cursor-pointer">
              Summer Collection
            </li>
            <li className="text-lg text-slate-600 cursor-pointer">
              Autumn Collection
            </li>
          </ul>
        </aside>

        <div className="w-full">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h2 className="text-slate-900 text-4xl font-bold">
                Spring collection
              </h2>
              Showing {startIndex + 1}–{endIndex} of {searchData.length} Initial
            </div>
            <select className="bg-slate-700 py-2 px-5 text-slate-50 rounded-full outline-none text-lg">
              <option value="">Initial Sort</option>
              <option value="">By popularity</option>
              <option value="">By rating</option>
              <option value="">By novelty</option>
              <option value="">Prices: Ascending</option>
              <option value="">Prices: Descending</option>
            </select>
          </div>

          <div className="grid grid-cols-4 gap-5 mt-5">
            {paginatedData.map((data) => (
              <div key={data.id} className="">
                <img
                  className="w-full h-[300px] object-cover rounded-3xl"
                  src={data.image}
                  alt={data.title}
                />
                <p className="text-lg font-bold mt-2">{data.title}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-5">
            {generatePageNumbers()}
          </div>

          {/* <div className="join">
            <input
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label="1"
              checked
            />
            <input
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label="2"
            />
            <input
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label="3"
            />
            <input
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label="4"
            />
          </div> */}
        </div>
      </div>
      {/* <div>{datas.map((data) => data.title)}</div> */}
    </div>
  )
}
