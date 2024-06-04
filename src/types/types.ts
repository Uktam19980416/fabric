import { ReactNode } from 'react'

export interface OptionType {
  value: string
  label: JSX.Element
}

export interface HeaderProps {
  handleLogoClick: () => void
  logo: string
}

export interface LanguageProviderProps {
  children: ReactNode
}

export interface LanguageContextType {
  isDarkTheme: boolean
  toggleTheme: () => void
}

export interface WinterCollectionDataType {
  id: number
  title: string
  image: string
}
