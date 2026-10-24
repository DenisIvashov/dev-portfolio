
import './Header.css';
import { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="header">
      <div className="header-container">
        <a href="#" className="header-link">
          Front<span className="text-accent">Dev</span>
        </a>

        <button
          className={`burger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Открыть меню"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`header-nav ${isOpen ? "open" : ""}`}>
          <a
            href="#works"
            className="header-nav__link"
            onClick={() => setIsOpen(false)}
          >
            Работы
          </a>
          <a
            href="#process"
            className="header-nav__link"
            onClick={() => setIsOpen(false)}
          >
            Как работаем
          </a>
          <a
            href="#services"
            className="header-nav__link"
            onClick={() => setIsOpen(false)}
          >
            Услуги
          </a>
          <a
            href="#footer"
            className="header-nav__link"
            onClick={() => setIsOpen(false)}
          >
            Контакты
          </a>
        </nav>

        <div className="header-contacts">
          <div className="header-contacts__container">
            <a
              href="https://t.me/@mifologi"
              target="_blank"
              rel="noopener noreferrer"
              className="header-link"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M21.9 4.3 18.7 19c-.2 1-.9 1.3-1.8.8l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.4-5 9.1-8.2c.4-.4-.1-.6-.6-.2L6.3 12.1 1.5 10.6c-1-.3-1-1 .2-1.5l19-7.3c.9-.3 1.6.2 1.2 2.5Z"></path>
              </svg>
            </a>
            <a
              href="https://max.ru/u/f9LHodD0cOJaSYo4oSMrdbnN-x6JqDLP2X4cfdW8eOeeKHD_e3wA8aEEVtg"
              target="_blank"
              rel="noopener noreferrer"
              className="header-link"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12.6 3.2c-4.7 0-8.5 3.6-8.5 8 0 2.2 1 4.3 2.6 5.8l-1 3.5c-.2.6.5 1.1 1 .8l3.6-2.2c.7.1 1.5.2 2.3.2 4.7 0 8.5-3.6 8.5-8s-3.8-8.1-8.5-8.1Zm0 11.6a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2Z"></path>
              </svg>
            </a>
            <a href="mailto:ivashov2402@icloud.com" className="header-link">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <rect
                  x="2.75"
                  y="5.25"
                  width="18.5"
                  height="13.5"
                  rx="2"
                  stroke="currentColor"
                  stroke-width="1.6"
                ></rect>
                <path
                  d="m3.5 7 8.5 6 8.5-6"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <a href="#" id='header-btn' className="btn">
          Написать
        </a>
      </div>
    </header>
  );
}

export default Header;
