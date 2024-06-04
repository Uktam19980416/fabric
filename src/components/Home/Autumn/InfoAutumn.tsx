import { FC } from 'react'
import infoImg from '../../../assets/images/111-1.png'
import { useTranslation } from 'react-i18next'

export const InfoAutumn: FC = () => {
  const { t } = useTranslation()
  return (
    <div className="max-xl:px-2">
      <div className="container w-full max-w-[1440px] mx-auto max-sm:px-2 max-sm:w-full rounded-3xl mt-28 relative">
        <div className="absolute inset-0 flex justify-center items-center -top-20 sm:top-0 z-50 max-forSofaOnly:hidden">
          <img src={infoImg} alt="" className="max-w-[800px] h-[450px]" />
        </div>
        <div className="bg-custom-gradient-2 px-10 relative rounded-3xl py-10 shadow-custom-lg hover:shadow-custom-hover transition-shadow duration-300">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="w-full sm:w-1/3 text-center sm:text-left">
              <p className="text-8xl text-slate-50 font-bold">100%</p>
              <p className="text-2xl text-slate-50 font-semibold">
                {t('home.info.material')}
              </p>
            </div>

            <div className="w-full sm:w-1/3 flex flex-col gap-5 text-center sm:text-left mt-10 sm:mt-0">
              <h2 className="text-4xl text-slate-50 font-bold">
                '{t('home.info.naturalProduct')}'
              </h2>
              <p className="text-lg text-slate-50 font-normal">
                {t('home.info.naturalProductText')}
              </p>
              <button className="w-fit mx-auto sm:mx-0 px-10 py-2 bg-slate-600 text-slate-50 rounded-full">
                {t('home.info.btn')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
// linear-gradient(0deg,#31384d 9%,#616884 50%)
