import { useState } from 'react'
import { X } from 'lucide-react'
import type { LawReference } from '../types/legal'

type LawReferenceListProps = {
  laws: LawReference[]
}

export function LawReferenceList({ laws }: LawReferenceListProps) {
  const [activeLaw, setActiveLaw] = useState<LawReference | null>(null)

  return (
    <>
      <div className="law-chip-grid">
        {laws.map((law) => (
          <button className="law-chip" key={law.id} type="button" onClick={() => setActiveLaw(law)}>
            <span>{law.title}</span>
            <small>{law.sourceTitle}</small>
          </button>
        ))}
      </div>

      {activeLaw && (
        <div className="modal-backdrop" role="presentation" onClick={() => setActiveLaw(null)}>
          <section
            aria-modal="true"
            className="law-modal"
            role="dialog"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="modal-heading">
              <div>
                <p className="eyebrow">Норма права</p>
                <h2>{activeLaw.title}</h2>
              </div>
              <button
                aria-label="Закрыть окно с нормой права"
                className="icon-button"
                type="button"
                onClick={() => setActiveLaw(null)}
              >
                <X aria-hidden="true" size={20} strokeWidth={2.4} />
              </button>
            </div>

            <p className="modal-summary">{activeLaw.summary}</p>

            <h3>Что важно</h3>
            <ul className="modal-list">
              {activeLaw.keyPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <a className="primary-link modal-link" href={activeLaw.url} rel="noreferrer" target="_blank">
              Открыть актуальный текст
            </a>
          </section>
        </div>
      )}
    </>
  )
}
