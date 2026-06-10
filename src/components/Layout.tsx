import { Link, NavLink, Outlet } from 'react-router-dom'
import { AccessibilityPanel } from './AccessibilityPanel'
import type { LegalSection } from '../types/legal'

type LayoutProps = {
  sections: LegalSection[]
}

export function Layout({ sections }: LayoutProps) {
  return (
    <div className="site-shell">
      <header className="topbar">
        <Link className="brand" to="/">
          <span className="brand-mark" aria-hidden="true">
            <img src="/favicon.svg" alt="" />
          </span>
          <span>Семейное право РФ</span>
        </Link>
        <nav className="nav" aria-label="Основная навигация">
          <NavLink to="/">Обзор</NavLink>
          {sections.map((section) => (
            <NavLink key={section.id} to={section.path}>
              {section.shortTitle}
            </NavLink>
          ))}
          <NavLink to="/sources">Нормы</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <AccessibilityPanel />
    </div>
  )
}
