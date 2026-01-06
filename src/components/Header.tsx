import './Header.css';

const Header = () => {
  return (
    <header className="top-bar">
      <div className="top-bar__content">
        <div className="contact-item">
          <span className="icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="presentation" focusable="false">
              <path d="M12 2.5c-3.27 0-5.93 2.55-5.93 5.7 0 4.35 5.13 11.37 5.35 11.66.16.22.42.34.68.34.27 0 .52-.12.69-.33.22-.29 5.35-7.3 5.35-11.67 0-3.15-2.66-5.7-5.94-5.7zm0 8.46a2.77 2.77 0 1 1 0-5.54 2.77 2.77 0 0 1 0 5.54z" />
            </svg>
          </span>
          <span className="contact-text">La Serena, Chile</span>
        </div>
        <div className="contact-item">
          <span className="icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="presentation" focusable="false">
              <path d="M20.5 5.5H3.5c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-11c0-.55-.45-1-1-1zm-1.4 2.18-6.31 4.3a1 1 0 0 1-1.08 0l-6.31-4.3a.25.25 0 0 1 .14-.45h13.42a.25.25 0 0 1 .14.45z" />
            </svg>
          </span>
          <a className="contact-text contact-link" href="mailto:contacto@solarired.cl">
            contacto@solarired.cl
          </a>
        </div>
        <div className="contact-item">
          <span className="icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="presentation" focusable="false">
              <path d="M17.79 14.88c-.47-.14-1-.03-1.35.32l-1.06 1.06c-2.15-1.15-3.89-2.89-5.04-5.04l1.06-1.06c.35-.35.46-.88.32-1.35l-.63-2.07A1.25 1.25 0 0 0 9.88 6H6.75C6 6 5.38 6.62 5.45 7.36c.4 4.06 3.18 7.84 7.24 8.24.75.07 1.37-.55 1.37-1.3v-1.12l2.07.63c.12.04.23.05.35.05.32 0 .64-.12.88-.36l1.37-1.37c.43-.43.29-1.17-.24-1.45l-2-1.1z" />
            </svg>
          </span>
          <a className="contact-text contact-link" href="tel:+56931490321">
            +56 9 3149 0321
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
