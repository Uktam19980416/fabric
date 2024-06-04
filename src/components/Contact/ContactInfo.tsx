import { FC } from 'react'
import img1 from '../../assets/images/noun_Email_254038.svg'
import img2 from '../../assets/images/noun_Phone_17950751.svg'
import img3 from '../../assets/images/noun_Location_19355641.svg'

export const ContactInfo: FC = () => {
  return (
    <div className="mt-10">
      <div className="container w-full max-w-[1440px] mx-auto max-sm:px-2 max-sm:w-full rounded-3xl mt-10">
        <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          <div className="flex items-center gap-5 max-lg:mx-auto max-lg:w-full">
            <img src={img1} alt="Email icon" />
            <p>
              <span className="text-slate-900 text-lg font-semibold">
                Email
              </span>
              : info@bnpfabric.uz
            </p>
          </div>

          <div className="flex items-center gap-5">
            <img src={img2} alt="Phone icon" />
            <p>
              <span className="text-slate-900 text-lg font-semibold">Tel</span>:
              +998 93 383 75 85 +998 93 960 78 00
            </p>
          </div>

          <div className="flex items-center gap-5">
            <img src={img3} alt="Address icon" />
            <p>
              <span className="text-slate-900 text-lg font-semibold">
                Address
              </span>
              : Bukhara, st. Alpomysh 80.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
