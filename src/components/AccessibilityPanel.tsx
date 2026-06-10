import { Eye, RotateCcw, X } from 'lucide-react'
import { useEffect, useState } from 'react'

type FontSize = 'normal' | 'large' | 'extra-large'
type ColorTheme = 'white' | 'black' | 'blue'
type TextSpacing = 'normal' | 'wide'

type AccessibilitySettings = {
  enabled: boolean
  fontSize: FontSize
  colorTheme: ColorTheme
  hideImages: boolean
  textSpacing: TextSpacing
}

const STORAGE_KEY = 'site-accessibility-settings'

const defaultSettings: AccessibilitySettings = {
  enabled: false,
  fontSize: 'large',
  colorTheme: 'white',
  hideImages: false,
  textSpacing: 'normal',
}

function loadSettings(): AccessibilitySettings {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? { ...defaultSettings, ...JSON.parse(saved) } : defaultSettings
  } catch {
    return defaultSettings
  }
}

export function AccessibilityPanel() {
  const [settings, setSettings] = useState<AccessibilitySettings>(loadSettings)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const root = document.documentElement

    if (settings.enabled) {
      root.dataset.accessibility = 'true'
      root.dataset.accessTheme = settings.colorTheme
      root.dataset.fontSize = settings.fontSize
      root.dataset.images = settings.hideImages ? 'hidden' : 'visible'
      root.dataset.textSpacing = settings.textSpacing
    } else {
      delete root.dataset.accessibility
      delete root.dataset.accessTheme
      delete root.dataset.fontSize
      delete root.dataset.images
      delete root.dataset.textSpacing
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
  }, [settings])

  const updateSettings = (changes: Partial<AccessibilitySettings>) => {
    setSettings((current) => ({ ...current, ...changes, enabled: true }))
  }

  const toggleMode = () => {
    setSettings((current) => ({ ...current, enabled: !current.enabled }))
  }

  const resetSettings = () => {
    setSettings(defaultSettings)
    setIsOpen(false)
  }

  return (
    <>
      <button
        className="accessibility-trigger"
        type="button"
        aria-pressed={settings.enabled}
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
        onClick={() => {
          if (!settings.enabled) {
            setSettings((current) => ({ ...current, enabled: true }))
          }
          setIsOpen((open) => !open)
        }}
      >
        <Eye aria-hidden="true" size={24} />
        <span>Версия для слабовидящих</span>
      </button>

      {isOpen && (
        <section
          className="accessibility-panel"
          id="accessibility-panel"
          aria-label="Настройки версии для слабовидящих"
        >
          <div className="accessibility-panel__heading">
            <h2>Настройки отображения</h2>
            <button
              className="accessibility-close"
              type="button"
              aria-label="Закрыть настройки"
              onClick={() => setIsOpen(false)}
            >
              <X aria-hidden="true" size={24} />
            </button>
          </div>

          <div className="accessibility-control">
            <span className="accessibility-label">Размер шрифта</span>
            <div className="accessibility-options" role="group" aria-label="Размер шрифта">
              <OptionButton
                active={settings.fontSize === 'normal'}
                onClick={() => updateSettings({ fontSize: 'normal' })}
              >
                A
              </OptionButton>
              <OptionButton
                active={settings.fontSize === 'large'}
                className="accessibility-font-large"
                onClick={() => updateSettings({ fontSize: 'large' })}
              >
                A
              </OptionButton>
              <OptionButton
                active={settings.fontSize === 'extra-large'}
                className="accessibility-font-extra"
                onClick={() => updateSettings({ fontSize: 'extra-large' })}
              >
                A
              </OptionButton>
            </div>
          </div>

          <div className="accessibility-control">
            <span className="accessibility-label">Цветовая схема</span>
            <div className="accessibility-options" role="group" aria-label="Цветовая схема">
              <OptionButton
                active={settings.colorTheme === 'white'}
                className="theme-option theme-option--white"
                onClick={() => updateSettings({ colorTheme: 'white' })}
              >
                Ч/Б
              </OptionButton>
              <OptionButton
                active={settings.colorTheme === 'black'}
                className="theme-option theme-option--black"
                onClick={() => updateSettings({ colorTheme: 'black' })}
              >
                Б/Ч
              </OptionButton>
              <OptionButton
                active={settings.colorTheme === 'blue'}
                className="theme-option theme-option--blue"
                onClick={() => updateSettings({ colorTheme: 'blue' })}
              >
                С/Т
              </OptionButton>
            </div>
          </div>

          <div className="accessibility-control">
            <span className="accessibility-label">Интервал между буквами</span>
            <div className="accessibility-options" role="group" aria-label="Интервал между буквами">
              <OptionButton
                active={settings.textSpacing === 'normal'}
                onClick={() => updateSettings({ textSpacing: 'normal' })}
              >
                Обычный
              </OptionButton>
              <OptionButton
                active={settings.textSpacing === 'wide'}
                onClick={() => updateSettings({ textSpacing: 'wide' })}
              >
                Увеличенный
              </OptionButton>
            </div>
          </div>

          <label className="accessibility-checkbox">
            <input
              type="checkbox"
              checked={settings.hideImages}
              onChange={(event) => updateSettings({ hideImages: event.target.checked })}
            />
            <span>Отключить изображения</span>
          </label>

          <div className="accessibility-actions">
            <button className="accessibility-main-action" type="button" onClick={toggleMode}>
              {settings.enabled ? 'Выключить режим' : 'Включить режим'}
            </button>
            <button className="accessibility-reset" type="button" onClick={resetSettings}>
              <RotateCcw aria-hidden="true" size={18} />
              Сбросить
            </button>
          </div>
        </section>
      )}
    </>
  )
}

type OptionButtonProps = {
  active: boolean
  children: React.ReactNode
  className?: string
  onClick: () => void
}

function OptionButton({ active, children, className = '', onClick }: OptionButtonProps) {
  return (
    <button
      className={`accessibility-option ${className}`.trim()}
      type="button"
      aria-pressed={active}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
