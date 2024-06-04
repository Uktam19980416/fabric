import {FC} from 'react'
import { WinterCollectionDataType } from '../../../types/types'
import squares from '../../../assets/images/diz-73-scaled-370x278.jpg'
import ikat from '../../../assets/images/diz-72-scaled-370x278.jpg'
import circles from '../../../assets/images/diz-71-scaled-370x278.jpg'
import geomBlue from '../../../assets/images/diz-70-scaled-370x278.jpg'
import tropLeaves from '../../../assets/images/diz-69-1-scaled-370x278.jpg'
import bambi from '../../../assets/images/diz-68-scaled-370x278.jpg'
import byzantium from '../../../assets/images/diz-68-scaled-370x278.jpg'
import eveningGarden from '../../../assets/images/diz-66-scaled-370x278.jpg'
import featherMarq from '../../../assets/images/diz-65-scaled-370x278.jpg'
import lavender from '../../../assets/images/diz-64-scaled-370x278.jpg'
import { SummerCollection } from './SummerCollection'

export const SummerCollectionData: FC = () => {
  const data: WinterCollectionDataType[] = [
    {
      id: 1,
      title: 'Squares',
      img: squares
    },
    {
      id: 2,
      title: 'Ikat',
      img: ikat
    },
    {
      id: 3,
      title: 'Circles',
      img: circles
    },
    {
      id: 4,
      title: 'Geometry Blue',
      img: geomBlue
    },
    {
      id: 5,
      title: 'Tropical Leaves',
      img: tropLeaves
    },
    {
      id: 6,
      title: 'Bambi',
      img: bambi
    },
    {
      id: 7,
      title: 'Byzantium',
      img: byzantium
    },
    {
      id: 8,
      title: 'Evening garden',
      img: eveningGarden
    },
    {
      id: 9,
      title: 'Feather Marquis',
      img: featherMarq
    },
    {
      id: 10,
      title: 'Lavender Roses',
      img: lavender
    }
  ]
  return (
    <>
      <SummerCollection data={data} />
    </>
  )
}
