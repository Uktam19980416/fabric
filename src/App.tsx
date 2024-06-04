import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { Header } from './components/Header/Header'
import {
  LanguageProvider,
  useLanguageContext,
} from './context/LanguageProvider'
import { WinterCollectionData } from './components/Home/WinterCollectionData'
import { Footer } from './components/Footer/Footer'
import { NewsData } from './components/Home/NewsData'

function AppContent() {
  const { isDarkTheme } = useLanguageContext()
  const Home = lazy(() => import('./pages/Home'))
  const Collection = lazy(() => import('./pages/Collection'))
  const About = lazy(() => import('./pages/About'))
  const Contacts = lazy(() => import('./pages/Contacts'))

  return (
    <div data-theme={isDarkTheme ? 'dark' : 'light'}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/:title" element={<WinterCollectionData />} />
            <Route path="/news/:id" element={<NewsData />} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App
