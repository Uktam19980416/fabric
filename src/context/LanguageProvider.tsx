import { FC, createContext, useState, useContext } from 'react'
import { LanguageContextType, LanguageProviderProps } from '../types/types'

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
)

export const LanguageProvider: FC<LanguageProviderProps> = ({ children }) => {
  const [isDarkTheme, setDarkTheme] = useState<boolean>(false)

  const toggleTheme = () => setDarkTheme((prevTheme) => !prevTheme)
  const value: LanguageContextType = { isDarkTheme, toggleTheme }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguageContext = (): LanguageContextType => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguageContext must be used within a LanguageProvider')
  }
  return context
}