import { FC } from 'react'
import mainSofaImg from '../../assets/images/Background.png'
import { useTranslation } from 'react-i18next'

export const Main: FC = () => {
  const { t } = useTranslation()

  return (
    <div className="max-xl:px-2">
      <div className="container w-full max-w-[1440px] mx-auto max-sm:px-2 max-sm:w-full bg-[#464342] h-2/3 rounded-3xl px-20 py-14 max-sm:py-10">
        <div className="flex flex-col items-center justify-center h-2/3">
          <div className="flex justify-between max-sm:flex-col-reverse max-sm:gap-5">
            <div className="max-xl:w-3/5 max-sm:mx-auto">
              <img src={mainSofaImg} alt={t('home.mainSofa')} />
            </div>
            <div className="flex flex-col items-end mt-10 max-sm:items-center max-sm:mt-0">
              <p className="text text-5xl font-bold text-slate-50 max-xl:text-3xl max-lg:text-2xl max-iphone:text-xl">
                {t('home.mainCountry')}
              </p>
              <p className="text text-7xl font-bold text-slate-50 max-xl:text-5xl max-lg:text-4xl max-iphone:text-3xl">
                {t('home.mainNatural')}
              </p>
              <p className="text text-9xl font-bold text-slate-50 uppercase max-xl:text-7xl max-lg:text-6xl max-iphone:text-5xl max-smallest:text-4xl">
                {t('home.mainProduct')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
