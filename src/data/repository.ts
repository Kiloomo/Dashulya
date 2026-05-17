import type { LegalSection } from '../types/legal'

export class LegalContentRepository {
  private readonly sections: LegalSection[]

  constructor(sections: LegalSection[]) {
    this.sections = sections
  }

  getSections() {
    return this.sections
  }

  getSubsections() {
    return this.sections.flatMap((section) => section.subsections)
  }

  getSources() {
    return Array.from(
      new Map(
        this.getSubsections()
          .flatMap((subsection) => subsection.lawRefs)
          .map((law) => [law.id, law]),
      ).values(),
    )
  }
}
