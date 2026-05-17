import { LegalContentRepository } from './repository'
import { contractSection } from './sections/contract'
import { divorceSection } from './sections/divorce'
import { marriageSection } from './sections/marriage'

export { quickGuide } from './homeContent'
export { law } from './laws'

export const legalSections = [marriageSection, divorceSection, contractSection]
export const contentRepository = new LegalContentRepository(legalSections)
