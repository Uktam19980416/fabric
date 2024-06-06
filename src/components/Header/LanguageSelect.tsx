import { FC } from 'react'
import en from '../../assets/images/en.svg'
import ru from '../../assets/images/ru.svg'
import pl from '../../assets/images/pl.svg'
import uz from '../../assets/images/uz.svg'
import Select, { StylesConfig, SingleValue } from 'react-select'
import { OptionType } from '../../types/types'
import { useTranslation } from 'react-i18next'
import { useLanguageContext } from '../../context/LanguageProvider'

export const LanguageSelect: FC = () => {
  const { t, i18n } = useTranslation()
  const { isDarkTheme } = useLanguageContext()
  const darkTheme = isDarkTheme ? 'dark' : 'light'

  const handleSelect = (selectedOption: SingleValue<OptionType>) => {
    if (selectedOption) {
      const lang = selectedOption.value
      i18n.changeLanguage(lang)
    }
  }

  const options: OptionType[] = [
    {
      value: 'en',
      label: (
        <div className="flex items-center gap-3">
          <p className={`text-lg font-medium max-iphone:hidden ${darkTheme ? 'text-slate-500' : 'text-slate-800'}`}>{t("languages.en")}</p>{' '}
          <img src={en} alt="UK Flag" className="w-8 max-iphone:w-6" />
        </div>
      ),
    },
    {
      value: 'ru',
      label: (
        <div className="flex items-center gap-3">
          <p className={`text-lg font-medium max-iphone:hidden ${darkTheme ? 'text-slate-500' : 'text-slate-800'}`}>{t("languages.ru")}</p>{' '}
          <img src={ru} alt="Russian Flag" className="w-8 max-iphone:w-6" />
        </div>
      ),
    },
    {
      value: 'pl',
      label: (
        <div className="flex items-center gap-3">
          <p className={`text-lg font-medium max-iphone:hidden ${darkTheme ? 'text-slate-500' : 'text-slate-800'}`}>{t("languages.pl")}</p>{' '}
          <img src={pl} alt="Polish Flag" className="w-8 max-iphone:w-6" />
        </div>
      ),
    },
    {
      value: 'uz',
      label: (
        <div className="flex items-center gap-3">
          <p className={`text-lg font-medium max-iphone:hidden ${darkTheme ? 'text-slate-500' : 'text-slate-800'}`}>{t("languages.uz")}</p>{' '}
          <img src={uz} alt="Uzbekistan Flag" className="w-8 max-iphone:w-6" />
        </div>
      ),
    },
  ]

  const customStyles: StylesConfig<OptionType, false> = {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'transparent',
      border: 'none',
      boxShadow: 'none',
      color: 'white',
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? 'white' : `${darkTheme === 'dark' ? 'white' : '#1F2937'}`,
      backgroundColor: state.isSelected ? 'blue' : `${darkTheme === 'dark' ? '#1F2937' : 'white'}`,
    }),
  }

  return (
    <Select
      options={options}
      styles={customStyles}
      defaultValue={options.find(option => option.value === i18n.language)}
      isSearchable={false}
      components={{ IndicatorSeparator: () => null }}
      onChange={handleSelect}
    />
  )
}
