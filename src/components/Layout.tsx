import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import type { LegalSection } from '../types/legal'

type LayoutProps = {
  sections: LegalSection[]
}

const faviconUrl = `${import.meta.env.BASE_URL}favicon.svg`

export function Layout({ sections }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="topbar">
        <Link className="brand" to="/" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">
            <img src={faviconUrl} alt="" />
          </span>
          <span>Семейное право РФ</span>
        </Link>

        <button
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          className="menu-button"
          type="button"
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          {isMenuOpen ? <X aria-hidden="true" size={21} /> : <Menu aria-hidden="true" size={21} />}
        </button>

        <nav
          className={isMenuOpen ? 'nav nav-open' : 'nav'}
          aria-label="Основная навигация"
        >
          <NavLink to="/" onClick={closeMenu}>
            Обзор
          </NavLink>
          {sections.map((section) => (
            <NavLink key={section.id} to={section.path} onClick={closeMenu}>
              {section.shortTitle}
            </NavLink>
          ))}
          <NavLink to="/sources" onClick={closeMenu}>
            Нормы
          </NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}
