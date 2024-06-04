import { FC } from 'react'
import en from '../../assets/images/en.svg'
import ru from '../../assets/images/ru.svg'
import pl from '../../assets/images/pl.svg'
import uz from '../../assets/images/uz.svg'
import Select, { StylesConfig } from 'react-select'
import { OptionType } from '../../types/types'

export const LanguageSelect: FC = () => {
  const option: OptionType[] = [
    {
      value: 'uz',
      label: (
        <div className="flex items-center gap-3">
          <p className="text-lg font-medium max-iphone:hidden">English</p>{' '}
          <img src={en} alt="UK Flag" className="w-8 max-iphone:w-6" />
        </div>
      ),
    },
    {
      value: 'en',
      label: (
        <div className="flex items-center gap-3">
          <p className="text-lg font-medium max-iphone:hidden">Russian</p>{' '}
          <img src={ru} alt="Russian Flag" className="w-8 max-iphone:w-6" />
        </div>
      ),
    },
    {
      value: 'pl',
      label: (
        <div className="flex items-center gap-3">
          <p className="text-lg font-medium max-iphone:hidden">Polish</p>{' '}
          <img src={pl} alt="Polish Flag" className="w-8 max-iphone:w-6" />
        </div>
      ),
    },
    {
      value: 'ru',
      label: (
        <div className="flex items-center gap-3">
          <p className="text-lg font-medium max-iphone:hidden">Uzbek</p>{' '}
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
      color: state.isSelected ? 'white' : 'black',
      backgroundColor: state.isSelected ? 'blue' : 'white',
    }),
  }
  return (
    <Select
      options={option}
      styles={customStyles}
      defaultValue={option[0]}
      isSearchable={false}
      components={{ IndicatorSeparator: () => null }}
    />
  )
}
