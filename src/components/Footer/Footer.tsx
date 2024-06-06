import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/images/logo.2230098a.png';
import { Link } from 'react-router-dom';
import { useLanguageContext } from '../../context/LanguageProvider';

export const Footer: FC = () => {
  const { t } = useTranslation();
  const { isDarkTheme } = useLanguageContext()
  const darkTheme = isDarkTheme ? 'dark' : 'light'

  return (
    <>
      <div className="max-xl:px-2">
        <div className="container w-full max-w-[1440px] mx-auto max-sm:px-2 max-sm:w-full mt-20">
          <div className="grid grid-cols-4 gap-5 max-xl:grid-cols-3 max-md:grid-cols-2 max-iphone:grid-cols-1 max-iphone:w-full max-iphone:text-center">
            <div className="flex flex-col justify-between">
              <div>
                <img src={logo} alt="Footer Logo" />
              </div>
              <p className={`${darkTheme ? 'text-slate-500' : 'text-slate-900'}`}>
                {t('home.footer.logoTitle')}
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <p className={`${darkTheme ? 'text-slate-500' : 'text-slate-800'} text-lg font-bold`}>{t('home.footer.menu')}</p>
              <ul className="flex flex-col gap-1">
                <li className={`${darkTheme ? 'text-slate-500' : 'text-slate-800'} text-lg font-semibold`}>
                  <Link to="/">{t('home.footer.home')}</Link>
                </li>
                <li className={`${darkTheme ? 'text-slate-500' : 'text-slate-800'} text-lg font-semibold`}>
                  <Link to="/about">{t('home.footer.about')}</Link>
                </li>
                <li className={`${darkTheme ? 'text-slate-500' : 'text-slate-800'} text-lg font-semibold`}>
                  <Link to="/collection">{t('home.footer.collection')}</Link>
                </li>
                <li className={`${darkTheme ? 'text-slate-500' : 'text-slate-800'} text-lg font-semibold`}>
                  <Link to="/contacts">{t('home.footer.contacts')}</Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <p className={`${darkTheme ? 'text-slate-500' : 'text-slate-800'} text-lg font-bold`}>{t('home.footer.contacts')}</p>
              <ul className="flex flex-col gap-1">
                <li className={`${darkTheme ? 'text-slate-500' : 'text-slate-800'} text-lg font-semibold`}>Bukhara, st. Alpomysh 80.</li>
                <li className={`${darkTheme ? 'text-slate-500' : 'text-slate-800'} text-lg font-semibold`}>Bnpuz@bk.ru</li>
                <li className={`${darkTheme ? 'text-slate-500' : 'text-slate-800'} text-lg font-semibold`}>bnp_fabrik</li>
                <li className={`${darkTheme ? 'text-slate-500' : 'text-slate-800'} text-lg font-semibold`}>info@bnpfabric.com</li>
                <li className={`${darkTheme ? 'text-slate-500' : 'text-slate-800'} text-lg font-semibold`}>+998 93 383 75 85</li>
                <li className={`${darkTheme ? 'text-slate-500' : 'text-slate-800'} text-lg font-semibold`}>+998 93 960 78 00</li>
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <p className={`${darkTheme ? 'text-slate-500' : 'text-slate-800'} text-lg font-bold`}>{t('home.footer.subscribeText')}</p>
              <div className="relative">
                <input className="w-full py-4 border-2 pl-5 rounded-full" type="text" placeholder={t('home.footer.subscribeText')} />
                <button className='py-2 px-5 bg-orange-600 rounded-full text-slate-50 absolute right-3 top-3 hover:bg-slate-50 hover:text-orange-600 transition-all hover:border-2 hover:border-orange-600'>
                  {t('home.footer.subscribeBtn')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black py-5 mt-10">
        <div className="container w-full max-w-[1440px] mx-auto max-sm:px-2 max-sm:w-full">
          <p className="text-slate-300">
            {t('home.footer.subFooter')}
          </p>
        </div>
      </div>
    </>
  );
}
