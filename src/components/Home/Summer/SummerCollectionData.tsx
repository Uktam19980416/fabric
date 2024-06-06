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
import { useTranslation } from 'react-i18next'

export const SummerCollectionData: FC = () => {
  const { t } = useTranslation();
  const data: WinterCollectionDataType[] = [
    {
      id: 1,
      title: t('home.gridSofa.square'),
      image: squares
    },
    {
      id: 2,
      title: t('home.gridSofa.ikat'),
      image: ikat
    },
    {
      id: 3,
      title: t('home.gridSofa.circles'),
      image: circles
    },
    {
      id: 4,
      title: t('home.gridSofa.geomBlue'),
      image: geomBlue
    },
    {
      id: 5,
      title: t('home.gridSofa.tropLeaves'),
      image: tropLeaves
    },
    {
      id: 6,
      title: t('home.gridSofa.bambi'),
      image: bambi
    },
    {
      id: 7,
      title: t('home.gridSofa.byzantium'),
      image: byzantium
    },
    {
      id: 8,
      title: t('home.gridSofa.eveningGarden'),
      image: eveningGarden
    },
    {
      id: 9,
      title: t('home.gridSofa.featherMarq'),
      image: featherMarq
    },
    {
      id: 10,
      title: t('home.gridSofa.lavender'),
      image: lavender
    }
  ]
  return (
    <>
      <SummerCollection data={data} />
    </>
  )
}
