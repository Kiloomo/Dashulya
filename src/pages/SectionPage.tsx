import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { LawReferenceList } from '../components/LawReferenceList'
import { SectionHeading } from '../components/SectionHeading'
import type { LegalSection, LegalSubsection } from '../types/legal'

type SectionPageProps = {
  section: LegalSection
}

export function SectionPage({ section }: SectionPageProps) {
  return (
    <>
      <section className="page-hero">
        <img alt="" src={section.image} />
        <div>
          <p className="eyebrow">{section.label}</p>
          <h1 style={{ marginBottom: '1rem' }}>{section.title}</h1>
          <p className="lead">{section.lead}</p>
        </div>
      </section>

      <section className="section-band">
        <SectionHeading eyebrow="Маршруты" title="Что нужно разобрать" />
        <div className="subsection-grid">
          {section.subsections.map((subsection) => (
            <Link className="subsection-card" key={subsection.id} to={subsection.path}>
              <img alt="" src={subsection.heroImage} />
              <div>
                <span>{subsection.kicker}</span>
                <h3>{subsection.shortTitle}</h3>
                <p>{subsection.lead}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}

type SubsectionPageProps = {
  subsection: LegalSubsection
}

export function SubsectionPage({ subsection }: SubsectionPageProps) {
  return (
    <>
      <section className="article-hero">
        <img alt="" src={subsection.heroImage} />
        <div className="article-hero-copy">
          <p className="eyebrow">{subsection.kicker}</p>
          <h1 >{subsection.title}</h1>
          <p className="lead">{subsection.lead}</p>
        </div>
      </section>

      <section className="section-band reader-band">
        <div className="reader-intro">
          <SectionHeading title="Зачем это знать" />
        </div>

        <div className="reader-grid">
          <InfoBlock title="Главное">
            <ul className="clean-list">
              {subsection.essentials.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </InfoBlock>

          {subsection.steps && (
            <InfoBlock title="Как действовать">
              <ol className="step-list">
                {subsection.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </InfoBlock>
          )}
        </div>
      </section>

      {subsection.warnings && (
        <section className="section-band warning-band">
          <SectionHeading eyebrow="Риски" title="На что не стоит закрывать глаза" />
          <div className="warning-grid">
            {subsection.warnings.map((warning) => (
              <article className="warning-card" key={warning}>
                <p>{warning}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="section-band muted-band">
        <SectionHeading eyebrow="Нормы права" title="Открыть статью и краткое объяснение" />
        <LawReferenceList laws={subsection.lawRefs} />
      </section>
    </>
  )
}

function InfoBlock({ children, title }: { children: ReactNode; title: string }) {
  return (
    <article className="reader-card">
      <h2>{title}</h2>
      {children}
    </article>
  )
}
