import { LawReferenceList } from '../components/LawReferenceList'
import type { LawReference } from '../types/legal'

type SourcesPageProps = {
  sources: LawReference[]
}

export function SourcesPage({ sources }: SourcesPageProps) {
  return (
    <>
      <section className="page-intro">
        <p className="eyebrow">Нормативная база</p>
        <h1>Основные правовые источники</h1>
        <p className="lead">
          На этой странице собраны статьи и федеральные акты, которые используются в
          разделах сайта.
        </p>
      </section>
      <section className="section-band">
        <LawReferenceList laws={sources} />
      </section>
    </>
  )
}
