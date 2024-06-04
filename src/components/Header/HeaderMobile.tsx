import PropTypes from 'prop-types'
import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HeaderProps } from '../../types/types'
import { LanguageSelect } from './LanguageSelect'
import { LightMode } from './LightMode'
import { Link } from 'react-router-dom'

export const HeaderMobile: FC<HeaderProps> = ({ handleLogoClick, logo }) => {
  const { t } = useTranslation()
  const [checked, setChecked] = useState(false)

  const handleToggle = () => {
    setChecked(!checked)
  }

  const handleLinkClick = () => {
    setChecked(false)
  }

  // const changeLang = (lang: string) => {
  //   i18n.changeLanguage(lang)
  //   setChecked(false)
  // }

  return (
    <>
      <div className="hidden max-lg:block max-sm:px-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5 cursor-pointer">
            <label htmlFor="menu-toggle" onClick={handleToggle}>
              <i
                className={`fa-solid fa-${
                  checked ? 'xmark' : 'bars-staggered'
                } cursor-pointer text-2xl max-sm:text-xl`}
              ></i>
            </label>
            <div
              className="w-[130px] max-sm:w-[100px] object-cover"
              onClick={handleLogoClick}
            >
              <img className="w-full" src={logo} alt="Logo" />
            </div>
          </div>
          <div className="flex items-center gap-5">
            <LanguageSelect />
            <LightMode />
          </div>
        </div>
      </div>

      <input
        type="checkbox"
        className="hidden"
        id="menu-toggle"
        checked={checked}
        readOnly
      />
      <div
        className={`lg:hidden fixed ${
          checked ? 'left-0' : '-left-full'
        } top-0 w-full h-dvh toggled-bar flex flex-col bg-white transition-all px-10 py-5 z-50`}
      >
        <div className="flex items-center border-b-4 pb-5 justify-between">
          <div
            className="flex items-center cursor-pointer"
            onClick={handleLogoClick}
          >
            <div className="w-[130px] max-sm:w-[100px] object-cover">
              <img className="w-full" src={logo} alt="Logo" />
            </div>
          </div>
          <label
            htmlFor="menu-toggle"
            className="max-sm:text-xl"
            onClick={handleToggle}
          >
            <i className="fa-solid fa-xmark text-2xl text-black cursor-pointer"></i>
          </label>
        </div>
        <div className="mt-5 flex justify-center text-center">
          <ul className="flex flex-col gap-5">
            <li>
              <Link
                to="/"
                className="text-xl font-medium"
                onClick={handleLinkClick}
              >
                {t('home.home')}
              </Link>
            </li>
            <li>
              <Link
                to="/collection"
                className="text-xl font-medium"
                onClick={handleLinkClick}
              >
                {t('home.collection')}
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-xl font-medium"
                onClick={handleLinkClick}
              >
                {t('home.about')}
              </Link>
            </li>
            <li>
              <Link
                to="/contacts"
                className="text-xl font-medium"
                onClick={handleLinkClick}
              >
                {t('home.contact')}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

HeaderMobile.propTypes = {
  handleLogoClick: PropTypes.func.isRequired,
  logo: PropTypes.string.isRequired,
}
