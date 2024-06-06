import { FC } from 'react'
import { ContactInfo } from './ContactInfo'
import { useTranslation } from 'react-i18next'

export const Contact: FC = () => {
  const { t } = useTranslation()
  return (
    <div className="mt-10">
      <div className="container w-full max-w-[1440px] mx-auto max-sm:px-2 max-sm:w-full rounded-3xl mt-10">
        <div className="flex items-center justify-between gap-5 max-md:flex-col">
          <div className="w-full">
            <h1 className="text-5xl text-slate-800 font-semibold">{t("contact.contact")}</h1>
            <form className="w-2/3 max-xl:w-full flex flex-col gap-5 mt-5">
              <input
                type="email"
                placeholder={t("contact.email")}
                className="py-3 pl-5 rounded-full border-2"
              />
              <input
                type="tel"
                placeholder={t("contact.phoneNumber")}
                className="py-3 pl-5 rounded-full border-2"
              />
              <textarea
                placeholder={t("contact.textarea")}
                className="py-3 pl-5 rounded-xl border-2"
                rows={10}
              ></textarea>
              <div className="flex justify-end">
                <button className="w-fit py-2 px-5 bg-orange-600 rounded-full text-slate-50 hover:bg-slate-50 hover:text-orange-600 transition-all hover:border-2 hover:border-orange-600">
                {t("contact.btn")}
                </button>
              </div>
            </form>
          </div>

          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d1533.8183256386183!2d64.460066!3d39.747812!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDQ0JzUwLjgiTiA2NMKwMjcnMzUuOSJF!5e0!3m2!1sen!2sus!4v1717413703697!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <ContactInfo />
      </div>
    </div>
  )
}
