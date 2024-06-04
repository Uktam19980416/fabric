import { FC } from 'react'
import { Main } from '../components/Home/Main'
import { Service } from '../components/Home/Service'
import { Info } from '../components/Home/Info'
import { WinterCollectionData } from '../components/Home/WinterCollectionData'
import { AutumnCollectionData } from '../components/Home/Autumn/AutumnCollectionData'
import { InfoAutumn } from '../components/Home/Autumn/InfoAutumn'
import { InfoSummer } from '../components/Home/Summer/InfoSummer'
import { SummerCollectionData } from '../components/Home/Summer/SummerCollectionData'
import { NewsData } from '../components/Home/NewsData'


const Home: FC = () => {
  return (
    <>
      <Main />
      <Service />
      <Info />
      <WinterCollectionData />
      <InfoAutumn />
      <AutumnCollectionData />
      <InfoSummer />
      <SummerCollectionData />
      <NewsData />
    </>
  )
}

export default Home
