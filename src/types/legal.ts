export type LegalSectionId = 'marriage' | 'divorce' | 'contract'

export type LawReference = {
  id: string
  title: string
  sourceTitle: string
  url: string
  summary: string
  keyPoints: string[]
}

export type LegalSubsection = {
  id: string
  path: string
  sectionId: LegalSectionId
  title: string
  shortTitle: string
  kicker: string
  heroImage: string
  lead: string
  userNeed: string
  essentials: string[]
  steps?: string[]
  warnings?: string[]
  example?: string
  lawRefs: LawReference[]
}

export type LegalSection = {
  id: LegalSectionId
  path: string
  title: string
  shortTitle: string
  label: string
  lead: string
  image: string
  subsections: LegalSubsection[]
}

export type InfoCard = {
  title: string
  text: string
}
