import { Link } from 'react-router-dom'
import { FC, useState } from 'react'
import logo from '../../assets/images/logo.2230098a.png'
import { LanguageSelect } from './LanguageSelect'
import { LightMode } from './LightMode'
import { HeaderMobile } from './HeaderMobile'
import {useLanguageContext} from '../../context/LanguageProvider'

export const Header: FC = () => {
  const [loading, setLoading] = useState(true)

  const handleLogoClick = () => {
    setLoading(true)
    setTimeout(() => {
      window.location.reload()
    }, 1000)
  }

  const {isDarkTheme} = useLanguageContext()
  return (
    <>
      {loading && (
        <div className="loader-overlay">
          <div className="loader"></div>
        </div>
      )}
      <div className="container w-full max-w-[1440px] mx-auto py-5 max-sm:px-2 max-sm:w-full" data-theme={isDarkTheme ? 'dark': 'light'}>
        <div className="flex justify-between items-center max-lg:hidden">
          {/* <div className="flex items-center gap-10"> */}
          <div className="w-[200px]">
            <img src={logo} alt="Logo" />
          </div>
          <div className="flex items-center gap-10">
            <Link to="/" className="text-slate-500 font-semibold text-xl">
              Home
            </Link>
            <Link
              to="/contacts"
              className="text-slate-500 font-semibold text-xl"
            >
              Contacts
            </Link>
            <Link
              to="/collection"
              className="text-slate-500 font-semibold text-xl"
            >
              Collection
            </Link>
            <Link to="/about" className="text-slate-500 font-semibold text-xl">
              About
            </Link>
          </div>
          {/* </div> */}
          <div className="flex items-center gap-5">
            <LightMode />
            <LanguageSelect />
          </div>
        </div>
      <HeaderMobile handleLogoClick={handleLogoClick} logo={logo} />
      </div>
    </>
  )
}
