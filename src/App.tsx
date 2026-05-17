import { Global } from '@emotion/react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { contentRepository } from './data/legalContent'
import { HomePage } from './pages/HomePage'
import { SectionPage, SubsectionPage } from './pages/SectionPage'
import { SourcesPage } from './pages/SourcesPage'
import { appStyles } from './styles/appStyles'

const sections = contentRepository.getSections()
const subsections = contentRepository.getSubsections()

function App() {
  return (
    <>
      <Global styles={appStyles} />
      <Routes>
        <Route element={<Layout sections={sections} />}>
          <Route index element={<HomePage sections={sections} />} />
          {sections.map((section) => (
            <Route
              key={section.id}
              path={section.path}
              element={<SectionPage section={section} />}
            />
          ))}
          {subsections.map((subsection) => (
            <Route
              key={subsection.id}
              path={subsection.path}
              element={<SubsectionPage subsection={subsection} />}
            />
          ))}
          <Route path="/sources" element={<SourcesPage sources={contentRepository.getSources()} />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
