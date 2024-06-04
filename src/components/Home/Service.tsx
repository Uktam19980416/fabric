import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import deliveryImg from '../../assets/images/noun_delivery_1095359.svg'
import guaranteeImg from '../../assets/images/noun_guarantee_952398.svg'
import supportImg from '../../assets/images/Group-995.svg'
import walletImg from '../../assets/images/noun_Wallet_745515.svg'

export const Service: FC = () => {
  const { t } = useTranslation()
  return (
    <div className="container w-full max-w-[1440px] mx-auto max-sm:px-2 max-sm:w-full rounded-3xl mt-10">
      <div className="grid grid-cols-4 max-md:grid-cols-2 max-smallest:grid-cols-1 gap-5">
        <div className="flex items-center gap-5 justify-center max-lg:flex-col max-lg:text-center">
          <div>
            <img src={deliveryImg} alt="Service 1" />
          </div>
          <div className="leading-5">
            <p className="text-lg font-bold leading-5 max-lg:text-sm">{t("home.service.shippingTitle")}</p>
            <p className="text-lg leading-5 text-slate-500 max-lg:text-sm">{t("home.service.shippingText")}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 justify-center max-lg:flex-col max-lg:text-center">
          <div>
            <img src={guaranteeImg} alt="Service 1" />
          </div>
          <div className="leading-5">
            <p className="text-lg font-bold leading-5 max-lg:text-sm">{t("home.service.guaranteeTitle")}</p>
            <p className="text-lg leading-5 text-slate-500 max-lg:text-sm">{t("home.service.guaranteeText")}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-5 justify-center max-lg:flex-col max-lg:text-center">
          <div>
            <img src={supportImg} alt="Service 1" />
          </div>
          <div className="leading-5">
            <p className="text-lg font-bold leading-5 max-lg:text-sm">{t("home.service.supportTitle")}</p>
            <p className="text-lg leading-5 text-slate-500 max-lg:text-sm">{t("home.service.guaranteeText")}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 justify-center max-lg:flex-col max-lg:text-center">
          <div>
            <img src={walletImg} alt="Service 1" />
          </div>
          <div className="leading-5">
            <p className="text-lg font-bold leading-5 max-lg:text-sm">{t("home.service.paymentTitle")}</p>
            <p className="text-lg leading-5 text-slate-500 max-lg:text-sm">{t("home.service.paymentText")}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
