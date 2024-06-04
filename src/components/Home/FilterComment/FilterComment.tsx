import { FC, useState } from 'react'
import { Description } from './Description'
import { Reviews } from './Reviews'

interface FilterCommentProps {
  reviewCount: number
}

export const FilterComment: FC<FilterCommentProps> = ({ reviewCount }) => {
  const activeClass = 'text-slate-900 border-t-2 border-orange-600 font-bold'
  const mainClass = 'pt-5 cursor-pointer'
  const [activeTab, setActiveTab] = useState(1)
  const handleTab = (tab: number) => setActiveTab(tab)
  const setActiveClass = (index: number) =>
    activeTab === index ? `${mainClass} ${activeClass}` : mainClass

  return (
    <div className="border-t-2 w-full mt-10 pt-5">
      <div className="flex items-center justify-center gap-10 relative -top-5">
        <p
          className={setActiveClass(1)}
          onClick={() => handleTab(1)}
        >
          Description
        </p>
        <p
          className={setActiveClass(2)}
          onClick={() => handleTab(2)}
        >
          Reviews ({reviewCount})
        </p>
      </div>
      {activeTab === 1 && <Description />}
      {activeTab === 2 && <Reviews />}
    </div>
  )
}
