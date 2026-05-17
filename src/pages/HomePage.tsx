import { Link } from 'react-router-dom'
import type { LegalSection } from '../types/legal'
import { SectionHeading } from '../components/SectionHeading'

type HomePageProps = {
  sections: LegalSection[]
}

export function HomePage({ sections }: HomePageProps) {
  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Учебный навигатор по семейному законодательству</p>
          <h1>Заключение и расторжение брака, брачный договор в РФ</h1>
          <div className="hero-actions">
            <Link className="primary-link" to="/marriage">
              Начать с заключения брака
            </Link>
            <Link className="secondary-link" to="/sources">
              Посмотреть нормы права
            </Link>
          </div>
        </div>
        <aside className="hero-panel" aria-label="Ключевой вопрос">
          <span>Главный фокус</span>
          <p>
            Как правовые условия, ограничения и договорные механизмы влияют на
            возникновение, прекращение и имущественные последствия брака?
          </p>
        </aside>
      </section>

      <section className="section-band">
        <SectionHeading eyebrow="Структура" title="Выберите нужную ситуацию" />
        <div className="cards-grid">
          {sections.map((section) => (
            <Link className="topic-card" key={section.id} to={section.path}>
              <span>{section.label}</span>
              <h3>{section.shortTitle}</h3>
              <p>{section.lead}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
