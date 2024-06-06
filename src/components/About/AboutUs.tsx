import { FC } from 'react'
import image from '../../assets/images/group-of-young-businesspeople-with-laptop-working-8SHTZUN.png'
import { useTranslation } from 'react-i18next'

export const AboutUs: FC = () => {
  const { t } = useTranslation()
  return (
    <div className="container w-full max-w-[1440px] mx-auto px-2 rounded-3xl mt-10">
      <div className="grid grid-cols-2 gap-5 items-center max-lg:grid-cols-1">
        <div>
          <h2 className="text-3xl font-extrabold">{t("aboutUs.title1")}</h2>
          <h4 className="text-3xl font-extrabold">{t("aboutUs.title2")}</h4>
          <p className="text-lg max-iphone:text-sm">
          {t("aboutUs.text")}
          </p>
        </div>

        <div className="w-full">
          <img
            className="w-full object-cover"
            src={image}
            alt="Business People"
          />
        </div>
      </div>
    </div>
  )
}
