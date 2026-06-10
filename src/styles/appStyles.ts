import { css } from '@emotion/react'

export const appStyles = css`
  :root {
    --bg: #f7f4ef;
    --surface: #fffdf8;
    --surface-strong: #ffffff;
    --ink: #241f1c;
    --muted: #6f665c;
    --line: #d8cbbd;
    --accent: #7d2f2f;
    --accent-strong: #572121;
    --accent-soft: #f1dfd9;
    --blue: #1f4e5f;
    --blue-soft: #dcebef;
    --shadow: 0 18px 45px rgba(70, 51, 33, 0.1);
    color: var(--ink);
    background:
      linear-gradient(180deg, rgba(255, 253, 248, 0.78), rgba(247, 244, 239, 0.96)),
      var(--bg);
    font-family:
      Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      sans-serif;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
  }

  body {
    min-width: 320px;
    margin: 0;
    background:
      linear-gradient(180deg, rgba(255, 253, 248, 0.78), rgba(247, 244, 239, 0.96)),
      var(--bg);
  }

  button,
  input,
  a {
    font: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @keyframes softSheen {
    from {
      transform: translateX(-130%) skewX(-18deg);
    }

    to {
      transform: translateX(400%) skewX(-18deg);
    }
  }

  @keyframes quietPulse {
    0%,
    100% {
      box-shadow: 0 0 0 0 rgba(87, 33, 33, 0);
    }

    50% {
      box-shadow: 0 0 0 5px rgba(87, 33, 33, 0.08);
    }
  }

  h1,
  h2,
  h3,
  p {
    margin: 0;
  }

  h1 {
    max-width: 980px;
    font-size: clamp(2.15rem, 5vw, 4.8rem);
    line-height: 0.98;
    font-weight: 760;
    letter-spacing: 0;
  }

  h2 {
    font-size: clamp(1.45rem, 2.6vw, 2.35rem);
    line-height: 1.08;
    font-weight: 720;
    letter-spacing: 0;
  }

  h3 {
    font-size: 1.08rem;
    line-height: 1.26;
    font-weight: 720;
    letter-spacing: 0;
  }

  p,
  li {
    color: var(--muted);
    line-height: 1.65;
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .site-shell {
    width: min(1180px, calc(100% - 32px));
    margin: 0 auto;
    padding: 0 0 56px;
  }

  .topbar {
    position: sticky;
    height: 90px;
    top: 0;
    margin-bottom: 20px;
    z-index: 10;
    width: 100vw;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    padding: 12px max(16px, calc((100vw - 1180px) / 2)) 18px;
    background: var(--bg);
  }

  .brand {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    min-width: max-content;
    color: var(--ink);
    font-weight: 750;
  }

  .brand-mark {
    display: inline-grid;
    width: 42px;
    height: 42px;
    place-items: center;
    overflow: hidden;
    border: 1px solid rgba(87, 33, 33, 0.18);
    border-radius: 8px;
    background: var(--accent-strong);
    box-shadow: 0 10px 24px rgba(87, 33, 33, 0.14);
  }

  .brand-mark img {
    display: block;
    width: 100%;
    height: 100%;
  }

  .nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 8px;
  }

  .nav a {
    position: relative;
    overflow: hidden;
    min-height: 38px;
    display: inline-flex;
    align-items: center;
    border: 1px solid transparent;
    border-radius: 8px;
    padding: 7px 12px;
    color: var(--muted);
    font-size: 0.92rem;
    font-weight: 650;
    transition:
      background 180ms ease,
      border-color 180ms ease,
      box-shadow 180ms ease,
      color 180ms ease,
      transform 180ms ease;
  }

  .nav a:hover,
  .nav a.active {
    border-color: var(--line);
    background: var(--surface);
    color: var(--accent-strong);
    box-shadow: 0 8px 22px rgba(70, 51, 33, 0.08);
    transform: translateY(-1px);
  }

  .nav a:active {
    transform: translateY(0);
  }

  .hero-section,
  .page-hero,
  .article-hero,
  .page-intro,
  .section-band,
  .two-column {
    border: 1px solid var(--line);
    border-radius: 8px;
    background: var(--surface);
    box-shadow: var(--shadow);
  }

  .hero-section {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 340px;
    gap: 30px;
    align-items: end;
    padding: clamp(28px, 5vw, 58px);
    background:
      linear-gradient(135deg, rgba(125, 47, 47, 0.09), transparent 42%),
      linear-gradient(180deg, var(--surface-strong), var(--surface));
  }

  .page-hero,
  .article-hero {
    position: relative;
    display: grid;
    gap: 28px;
    overflow: hidden;
  }

  .page-hero {
    grid-template-columns: 0.95fr 1.05fr;
    align-items: end;
    min-height: 430px;
    padding: clamp(24px, 4vw, 42px);
  }

  .page-hero img,
  .article-hero img {
    width: 100%;
    height: 100%;
    min-height: 280px;
    object-fit: cover;
    border-radius: 8px;
  }

  .article-hero {
    min-height: 560px;
    align-items: end;
  }

  .article-hero img {
    position: absolute;
    inset: 0;
    border-radius: 0;
    filter: saturate(0.9);
  }

  .article-hero::after {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(90deg, rgba(35, 24, 20, 0.78), rgba(35, 24, 20, 0.18)),
      linear-gradient(180deg, transparent, rgba(35, 24, 20, 0.45));
    content: '';
  }

  .article-hero-copy {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 820px;
    padding: clamp(28px, 5vw, 58px);
  }

  .article-hero-copy h1,
  .article-hero-copy .lead {
    color: #fffaf2;
  }

  .hero-copy,
  .page-intro,
  .section-heading {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .lead {
    max-width: 760px;
    color: #51483f;
    font-size: clamp(1.02rem, 1.6vw, 1.25rem);
    line-height: 1.72;
  }

  .eyebrow {
    color: var(--accent);
    font-size: 0.78rem;
    font-weight: 820;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 8px;
  }

  .primary-link,
  .secondary-link {
    position: relative;
    overflow: hidden;
    min-height: 46px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    padding: 11px 16px;
    font-weight: 760;
    transition:
      background 180ms ease,
      border-color 180ms ease,
      box-shadow 180ms ease,
      transform 180ms ease;
  }

  .primary-link::after,
  .secondary-link::after {
    position: absolute;
    inset: -35% auto -35% -55%;
    width: 38%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.36), transparent);
    content: '';
    opacity: 0;
    pointer-events: none;
  }

  .primary-link {
    background: var(--accent-strong);
    color: #fffaf2;
    box-shadow: 0 12px 26px rgba(87, 33, 33, 0.16);
  }

  .secondary-link {
    border: 1px solid var(--line);
    background: #fffaf2;
    color: var(--accent-strong);
  }

  .primary-link:hover,
  .secondary-link:hover {
    box-shadow: 0 16px 34px rgba(70, 51, 33, 0.16);
    transform: translateY(-2px);
  }

  .primary-link:hover::after,
  .secondary-link:hover::after {
    animation: softSheen 760ms ease;
    opacity: 1;
  }

  .primary-link:active,
  .secondary-link:active {
    box-shadow: 0 8px 18px rgba(70, 51, 33, 0.12);
    transform: translateY(0);
  }

  .hero-panel {
    display: flex;
    flex-direction: column;
    gap: 12px;
    border-left: 4px solid var(--accent);
    border-radius: 8px;
    padding: 22px;
    background: var(--accent-soft);
  }

  .hero-panel span {
    color: var(--accent-strong);
    font-size: 0.78rem;
    font-weight: 820;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .hero-panel p {
    color: var(--accent-strong);
    font-size: 1.04rem;
  }

  .page-intro,
  .section-band {
    padding: clamp(24px, 4vw, 42px);
  }

  .section-band,
  .two-column {
    margin-top: 24px;
  }

  .muted-band {
    background: #f2ece3;
  }

  .cards-grid,
  .note-grid,
  .subsection-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
    margin-top: 26px;
  }

  .cards-grid.two {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .topic-card,
  .subsection-card,
  .note-card,
  .info-panel,
  .chapter-card,
  .decision-card,
  .source-row {
    border: 1px solid var(--line);
    border-radius: 8px;
    background: var(--surface-strong);
  }

  .topic-card,
  .subsection-card,
  .note-card,
  .decision-card {
    display: flex;
    flex-direction: column;
    gap: 12px;
    min-height: 100%;
    padding: 22px;
  }

  .subsection-card {
    padding: 0;
    overflow: hidden;
    transition:
      border-color 180ms ease,
      box-shadow 180ms ease,
      transform 180ms ease;
  }

  .subsection-card img {
    width: 100%;
    aspect-ratio: 16 / 10;
    object-fit: cover;
    transition:
      filter 420ms ease,
      transform 420ms ease;
  }

  .subsection-card:hover img {
    filter: saturate(1.05) contrast(1.03);
    transform: scale(1.035);
  }

  .subsection-card div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
  }

  .subsection-card span {
    color: var(--accent);
    font-size: 0.76rem;
    font-weight: 820;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .topic-card {
    transition:
      transform 160ms ease,
      border-color 160ms ease,
      box-shadow 160ms ease,
      background 160ms ease;
  }

  .topic-card:hover,
  .subsection-card:hover {
    transform: translateY(-3px);
    border-color: #b88b74;
    box-shadow: 0 16px 36px rgba(70, 51, 33, 0.12);
  }

  .topic-card:active,
  .subsection-card:active {
    transform: translateY(-1px);
  }

  .topic-card span,
  .source-row span {
    color: var(--blue);
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .two-column {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
    padding: clamp(20px, 3vw, 28px);
    box-shadow: none;
  }

  .info-panel {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
  }

  .info-panel h2 {
    font-size: 1.18rem;
  }

  .task-list,
  .law-list,
  .decision-card ul {
    display: grid;
    gap: 10px;
    padding: 0;
    margin: 24px 0 0;
    list-style: none;
  }

  .task-list li,
  .law-list li,
  .decision-card li {
    position: relative;
    padding-left: 24px;
  }

  .task-list li::before,
  .law-list li::before,
  .decision-card li::before {
    position: absolute;
    left: 0;
    top: 0.65em;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--accent);
    content: '';
  }

  .chapter-list {
    display: grid;
    gap: 16px;
    margin-top: 26px;
  }

  .chapter-card {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(260px, 0.42fr);
    gap: 24px;
    padding: 24px;
  }

  .chapter-card h3 {
    margin-bottom: 10px;
  }

  .law-list {
    align-self: start;
    margin: 0;
    border-radius: 8px;
    padding: 16px;
    background: var(--blue-soft);
  }

  .law-list li {
    color: #244550;
    font-size: 0.92rem;
  }

  .law-list li::before {
    background: var(--blue);
  }

  .check-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
    margin-top: 24px;
  }

  .check-item {
    display: flex;
    align-items: center;
    gap: 12px;
    min-height: 58px;
    border: 1px solid var(--line);
    border-radius: 8px;
    padding: 14px 16px;
    background: var(--surface-strong);
    color: var(--ink);
    font-weight: 670;
  }

  .check-item input {
    width: 18px;
    height: 18px;
    accent-color: var(--accent);
  }

  .decision-card p {
    margin-top: auto;
    border-top: 1px solid var(--line);
    padding-top: 14px;
    color: var(--accent-strong);
    font-weight: 720;
  }

  .source-list {
    display: grid;
    gap: 12px;
  }

  .reader-band {
    display: grid;
    gap: 26px;
  }

  .reader-intro {
    display: grid;
    gap: 14px;
    max-width: 820px;
  }

  .reader-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
  }

  .reader-card,
  .example-card,
  .warning-card {
    border: 1px solid var(--line);
    border-radius: 8px;
    background: var(--surface-strong);
  }

  .reader-card {
    padding: 24px;
  }

  .reader-card h2 {
    margin-bottom: 16px;
    font-size: 1.18rem;
  }

  .clean-list,
  .step-list,
  .modal-list {
    display: grid;
    gap: 12px;
    margin: 0;
    padding-left: 20px;
  }

  .step-list li::marker {
    color: var(--accent);
    font-weight: 800;
  }

  .example-card {
    display: grid;
    gap: 10px;
    padding: clamp(22px, 4vw, 34px);
    background: var(--blue-soft);
  }

  .example-card p:last-child {
    max-width: 900px;
    color: #244550;
    font-size: 1.08rem;
  }

  .warning-band {
    background: #fff5ed;
  }

  .warning-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
    margin-top: 24px;
  }

  .warning-card {
    border-color: #e0b8a1;
    padding: 20px;
    background: #fffaf6;
  }

  .warning-card p {
    color: var(--accent-strong);
    font-weight: 650;
  }

  .law-chip-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
    margin-top: 24px;
  }

  .law-chip {
    position: relative;
    display: flex;
    min-height: 104px;
    cursor: pointer;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 14px;
    border: 1px solid var(--line);
    border-radius: 8px;
    padding: 16px;
    background: var(--surface-strong);
    color: var(--ink);
    text-align: left;
    transition:
      background 180ms ease,
      border-color 180ms ease,
      box-shadow 180ms ease,
      transform 180ms ease;
  }

  .law-chip:hover {
    transform: translateY(-2px);
    border-color: #b88b74;
    box-shadow: 0 12px 28px rgba(70, 51, 33, 0.1);
  }

  .law-chip:active {
    transform: translateY(0);
  }

  .law-chip:focus-visible,
  .primary-link:focus-visible,
  .secondary-link:focus-visible,
  .nav a:focus-visible,
  .icon-button:focus-visible,
  .topic-card:focus-visible,
  .subsection-card:focus-visible {
    outline: 2px solid rgba(125, 47, 47, 0.58);
    outline-offset: 3px;
    animation: quietPulse 900ms ease;
  }

  .law-chip span {
    font-weight: 800;
  }

  .law-chip small {
    color: var(--muted);
    line-height: 1.35;
  }

  .modal-backdrop {
    position: fixed;
    inset: 0;
    z-index: 50;
    display: grid;
    place-items: center;
    padding: 18px;
    background: rgba(31, 25, 22, 0.58);
  }

  .law-modal {
    width: min(720px, 100%);
    max-height: min(720px, calc(100vh - 36px));
    overflow: auto;
    border: 1px solid var(--line);
    border-radius: 8px;
    padding: clamp(22px, 4vw, 34px);
    background: var(--surface-strong);
    box-shadow: 0 24px 80px rgba(0, 0, 0, 0.28);
  }

  .modal-heading {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 18px;
    margin-bottom: 18px;
  }

  .icon-button {
    display: inline-grid;
    place-items: center;
    width: 40px;
    height: 40px;
    cursor: pointer;
    border: 1px solid var(--line);
    border-radius: 8px;
    background: #fffaf2;
    color: var(--accent-strong);
    transition:
      background 180ms ease,
      border-color 180ms ease,
      box-shadow 180ms ease,
      transform 180ms ease;
  }

  .icon-button:hover {
    border-color: #b88b74;
    background: #fff4e7;
    box-shadow: 0 10px 24px rgba(70, 51, 33, 0.12);
    transform: translateY(-1px) rotate(4deg);
  }

  .icon-button:active {
    transform: translateY(0) scale(0.96);
  }

  .modal-summary {
    color: #51483f;
    font-size: 1.06rem;
  }

  .law-modal h3 {
    margin: 24px 0 12px;
  }

  .modal-link {
    margin-top: 24px;
  }

  .source-row {
    display: grid;
    grid-template-columns: 110px minmax(0, 1fr);
    gap: 18px;
    align-items: center;
    padding: 18px 20px;
  }

  @media (max-width: 880px) {
    .topbar {
      position: static;
      align-items: flex-start;
      flex-direction: column;
    }

    .nav {
      justify-content: flex-start;
    }

    .hero-section,
    .page-hero,
    .chapter-card {
      grid-template-columns: 1fr;
    }

    .hero-section {
      min-height: auto;
    }

    .cards-grid,
    .cards-grid.two,
    .note-grid,
    .subsection-grid,
    .two-column,
    .check-grid,
    .reader-grid,
    .warning-grid,
    .law-chip-grid {
      grid-template-columns: 1fr;
    }

    .article-hero {
      min-height: 500px;
    }
  }

  @media (max-width: 560px) {
    .site-shell {
      width: min(100% - 20px, 1180px);
      padding-bottom: 32px;
    }

    .topbar {
      padding-inline: 10px;
    }

    .brand {
      font-size: 0.95rem;
    }

    .nav a {
      min-height: 36px;
      padding: 6px 9px;
      font-size: 0.84rem;
    }

    .hero-actions {
      flex-direction: column;
    }

    .primary-link,
    .secondary-link {
      width: 100%;
    }

    .source-row {
      grid-template-columns: 1fr;
      gap: 6px;
    }
  }


  .accessibility-trigger {
    position: fixed;
    right: 22px;
    bottom: 22px;
    z-index: 40;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    min-height: 52px;
    cursor: pointer;
    border: 2px solid #111;
    border-radius: 8px;
    padding: 11px 16px;
    background: #fff;
    color: #111;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
    font-weight: 800;
  }

  .accessibility-trigger:hover {
    background: #111;
    color: #fff;
  }

  .accessibility-trigger:focus-visible,
  .accessibility-close:focus-visible,
  .accessibility-option:focus-visible,
  .accessibility-main-action:focus-visible,
  .accessibility-reset:focus-visible,
  .accessibility-checkbox input:focus-visible {
    outline: 4px solid #ffbf00;
    outline-offset: 3px;
  }

  .accessibility-panel {
    position: fixed;
    right: 22px;
    bottom: 86px;
    z-index: 45;
    width: min(520px, calc(100vw - 32px));
    max-height: calc(100vh - 110px);
    overflow: auto;
    border: 3px solid #111;
    border-radius: 8px;
    padding: 22px;
    background: #fff;
    color: #111;
    box-shadow: 0 24px 70px rgba(0, 0, 0, 0.28);
    font-size: 16px;
  }

  .accessibility-panel__heading {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 22px;
  }

  .accessibility-panel__heading h2 {
    color: #111;
    font-size: 25px;
    line-height: 1.2;
  }

  .accessibility-close {
    display: inline-grid;
    flex: 0 0 44px;
    width: 44px;
    height: 44px;
    cursor: pointer;
    place-items: center;
    border: 2px solid #111;
    border-radius: 6px;
    background: #fff;
    color: #111;
  }

  .accessibility-close:hover {
    background: #111;
    color: #fff;
  }

  .accessibility-control {
    display: grid;
    gap: 10px;
    margin-top: 18px;
  }

  .accessibility-label {
    color: #111;
    font-size: 17px;
    font-weight: 800;
  }

  .accessibility-options {
    display: flex;
    flex-wrap: wrap;
    gap: 9px;
  }

  .accessibility-option {
    min-width: 54px;
    min-height: 46px;
    cursor: pointer;
    border: 2px solid #111;
    border-radius: 6px;
    padding: 8px 13px;
    background: #fff;
    color: #111;
    font-weight: 800;
  }

  .accessibility-option:hover,
  .accessibility-option[aria-pressed='true'] {
    background: #111;
    color: #fff;
  }

  .accessibility-font-large {
    font-size: 21px;
  }

  .accessibility-font-extra {
    font-size: 26px;
  }

  .theme-option--white {
    background: #fff;
    color: #000;
  }

  .theme-option--black {
    background: #000;
    color: #fff;
  }

  .theme-option--blue {
    background: #9dd1ff;
    color: #08294f;
  }

  .accessibility-checkbox {
    display: flex;
    align-items: center;
    gap: 12px;
    min-height: 48px;
    margin-top: 20px;
    color: #111;
    font-weight: 800;
  }

  .accessibility-checkbox input {
    width: 24px;
    height: 24px;
    accent-color: #111;
  }

  .accessibility-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 24px;
    border-top: 2px solid #111;
    padding-top: 18px;
  }

  .accessibility-main-action,
  .accessibility-reset {
    display: inline-flex;
    min-height: 48px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: 2px solid #111;
    border-radius: 6px;
    padding: 9px 14px;
    font-weight: 800;
  }

  .accessibility-main-action {
    background: #111;
    color: #fff;
  }

  .accessibility-main-action:hover {
    background: #fff;
    color: #111;
  }

  .accessibility-reset {
    background: #fff;
    color: #111;
  }

  .accessibility-reset:hover {
    background: #111;
    color: #fff;
  }

  html[data-accessibility='true'] {
    --shadow: none;
    scroll-behavior: auto;
  }

  html[data-accessibility='true'][data-font-size='normal'] {
    font-size: 100%;
  }

  html[data-accessibility='true'][data-font-size='large'] {
    font-size: 125%;
  }

  html[data-accessibility='true'][data-font-size='extra-large'] {
    font-size: 150%;
  }

  html[data-accessibility='true'][data-access-theme='white'] {
    --bg: #fff;
    --surface: #fff;
    --surface-strong: #fff;
    --ink: #000;
    --muted: #000;
    --line: #000;
    --accent: #000;
    --accent-strong: #000;
    --accent-soft: #fff;
    --blue: #000;
    --blue-soft: #fff;
  }

  html[data-accessibility='true'][data-access-theme='black'] {
    --bg: #000;
    --surface: #000;
    --surface-strong: #000;
    --ink: #fff;
    --muted: #fff;
    --line: #fff;
    --accent: #ffff00;
    --accent-strong: #ffff00;
    --accent-soft: #000;
    --blue: #00ffff;
    --blue-soft: #000;
  }

  html[data-accessibility='true'][data-access-theme='blue'] {
    --bg: #9dd1ff;
    --surface: #9dd1ff;
    --surface-strong: #9dd1ff;
    --ink: #08294f;
    --muted: #08294f;
    --line: #08294f;
    --accent: #08294f;
    --accent-strong: #08294f;
    --accent-soft: #9dd1ff;
    --blue: #08294f;
    --blue-soft: #9dd1ff;
  }

  html[data-accessibility='true'] body,
  html[data-accessibility='true'] :root {
    background: var(--bg);
  }

  html[data-accessibility='true'] body {
    line-height: 1.75;
  }

  html[data-accessibility='true'] *,
  html[data-accessibility='true'] *::before,
  html[data-accessibility='true'] *::after {
    animation: none !important;
    transition: none !important;
  }

  html[data-accessibility='true'] h1,
  html[data-accessibility='true'] h2,
  html[data-accessibility='true'] h3,
  html[data-accessibility='true'] p,
  html[data-accessibility='true'] li,
  html[data-accessibility='true'] span,
  html[data-accessibility='true'] small,
  html[data-accessibility='true'] a,
  html[data-accessibility='true'] button,
  html[data-accessibility='true'] label {
    text-shadow: none;
  }

  html[data-accessibility='true'] p,
  html[data-accessibility='true'] li,
  html[data-accessibility='true'] .lead,
  html[data-accessibility='true'] .modal-summary,
  html[data-accessibility='true'] .example-card p:last-child,
  html[data-accessibility='true'] .law-list li,
  html[data-accessibility='true'] .article-hero-copy h1,
  html[data-accessibility='true'] .article-hero-copy .lead {
    color: var(--ink);
  }

  html[data-accessibility='true'] .hero-section,
  html[data-accessibility='true'] .page-hero,
  html[data-accessibility='true'] .article-hero,
  html[data-accessibility='true'] .page-intro,
  html[data-accessibility='true'] .section-band,
  html[data-accessibility='true'] .two-column,
  html[data-accessibility='true'] .topic-card,
  html[data-accessibility='true'] .subsection-card,
  html[data-accessibility='true'] .note-card,
  html[data-accessibility='true'] .info-panel,
  html[data-accessibility='true'] .chapter-card,
  html[data-accessibility='true'] .decision-card,
  html[data-accessibility='true'] .source-row,
  html[data-accessibility='true'] .reader-card,
  html[data-accessibility='true'] .example-card,
  html[data-accessibility='true'] .warning-card,
  html[data-accessibility='true'] .law-chip,
  html[data-accessibility='true'] .law-modal,
  html[data-accessibility='true'] .law-list,
  html[data-accessibility='true'] .topbar {
    border-color: var(--line) !important;
    background: var(--surface) !important;
    color: var(--ink) !important;
    box-shadow: none !important;
  }

  html[data-accessibility='true'] .hero-section,
  html[data-accessibility='true'] .article-hero::after {
    background: var(--surface) !important;
  }

  html[data-accessibility='true'] .article-hero::after {
    opacity: 0.82;
  }

  html[data-accessibility='true'] .brand-mark {
    border: 2px solid var(--line);
    background: var(--surface);
    box-shadow: none;
  }

  html[data-accessibility='true'] .nav a,
  html[data-accessibility='true'] .primary-link,
  html[data-accessibility='true'] .secondary-link,
  html[data-accessibility='true'] .icon-button,
  html[data-accessibility='true'] .modal-link {
    border: 2px solid var(--line);
    background: var(--surface);
    color: var(--ink);
    box-shadow: none;
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 3px;
  }

  html[data-accessibility='true'] .nav a:hover,
  html[data-accessibility='true'] .nav a.active,
  html[data-accessibility='true'] .primary-link:hover,
  html[data-accessibility='true'] .secondary-link:hover,
  html[data-accessibility='true'] .law-chip:hover,
  html[data-accessibility='true'] .topic-card:hover,
  html[data-accessibility='true'] .subsection-card:hover {
    transform: none;
    outline: 4px solid var(--accent);
    outline-offset: 2px;
  }

  html[data-accessibility='true'] a:focus-visible,
  html[data-accessibility='true'] button:focus-visible,
  html[data-accessibility='true'] input:focus-visible {
    outline: 4px solid var(--accent) !important;
    outline-offset: 3px !important;
  }

  html[data-accessibility='true'] .eyebrow,
  html[data-accessibility='true'] .subsection-card span,
  html[data-accessibility='true'] .topic-card span,
  html[data-accessibility='true'] .source-row span,
  html[data-accessibility='true'] .hero-panel span {
    color: var(--accent);
  }

  html[data-accessibility='true'] .hero-panel,
  html[data-accessibility='true'] .warning-band,
  html[data-accessibility='true'] .warning-card {
    border-color: var(--line);
    background: var(--surface);
  }

  html[data-accessibility='true'] .hero-panel p,
  html[data-accessibility='true'] .warning-card p,
  html[data-accessibility='true'] .decision-card p {
    color: var(--ink);
  }

  html[data-accessibility='true'][data-text-spacing='wide'] body {
    letter-spacing: 0.12em;
    word-spacing: 0.16em;
  }

  html[data-accessibility='true'][data-images='hidden'] .page-hero > img,
  html[data-accessibility='true'][data-images='hidden'] .article-hero > img,
  html[data-accessibility='true'][data-images='hidden'] .subsection-card > img {
    display: none;
  }

  html[data-accessibility='true'][data-images='hidden'] .page-hero {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  html[data-accessibility='true'][data-images='hidden'] .article-hero {
    min-height: auto;
  }

  html[data-accessibility='true'][data-images='hidden'] .article-hero::after {
    display: none;
  }

  html[data-accessibility='true'][data-images='hidden'] .article-hero-copy {
    max-width: none;
  }

  html[data-accessibility='true'][data-access-theme='black'] .accessibility-trigger,
  html[data-accessibility='true'][data-access-theme='black'] .accessibility-panel,
  html[data-accessibility='true'][data-access-theme='black'] .accessibility-close,
  html[data-accessibility='true'][data-access-theme='black'] .accessibility-option,
  html[data-accessibility='true'][data-access-theme='black'] .accessibility-reset {
    border-color: #fff;
    background: #000;
    color: #fff;
  }

  html[data-accessibility='true'][data-access-theme='black'] .accessibility-panel__heading h2,
  html[data-accessibility='true'][data-access-theme='black'] .accessibility-label,
  html[data-accessibility='true'][data-access-theme='black'] .accessibility-checkbox {
    color: #fff;
  }

  html[data-accessibility='true'][data-access-theme='black'] .accessibility-option[aria-pressed='true'],
  html[data-accessibility='true'][data-access-theme='black'] .accessibility-main-action {
    border-color: #ffff00;
    background: #ffff00;
    color: #000;
  }

  html[data-accessibility='true'][data-access-theme='blue'] .accessibility-trigger,
  html[data-accessibility='true'][data-access-theme='blue'] .accessibility-panel,
  html[data-accessibility='true'][data-access-theme='blue'] .accessibility-close,
  html[data-accessibility='true'][data-access-theme='blue'] .accessibility-option,
  html[data-accessibility='true'][data-access-theme='blue'] .accessibility-reset {
    border-color: #08294f;
    background: #9dd1ff;
    color: #08294f;
  }

  html[data-accessibility='true'][data-access-theme='blue'] .accessibility-panel__heading h2,
  html[data-accessibility='true'][data-access-theme='blue'] .accessibility-label,
  html[data-accessibility='true'][data-access-theme='blue'] .accessibility-checkbox {
    color: #08294f;
  }

  html[data-accessibility='true'][data-access-theme='blue'] .accessibility-option[aria-pressed='true'],
  html[data-accessibility='true'][data-access-theme='blue'] .accessibility-main-action {
    background: #08294f;
    color: #fff;
  }

  @media (max-width: 620px) {
    .accessibility-trigger {
      right: 10px;
      bottom: 10px;
      width: calc(100vw - 20px);
      justify-content: center;
    }

    .accessibility-panel {
      right: 10px;
      bottom: 76px;
      width: calc(100vw - 20px);
      max-height: calc(100vh - 96px);
      padding: 18px;
    }

    html[data-accessibility='true'][data-font-size='extra-large'] {
      font-size: 137.5%;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      scroll-behavior: auto !important;
      transition-duration: 0.01ms !important;
    }
  }
`
