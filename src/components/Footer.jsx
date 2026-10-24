import './Footer.css';

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        <a href="#" className="footer-logo">
          Front
          <span className="text-accent">Dev</span>
        </a>

        <div className="footer-links">
          <a
            href="https://t.me/@mifologi"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Telegram
          </a>
          <a
            href="https://max.ru/u/f9LHodD0cOJaSYo4oSMrdbnN-x6JqDLP2X4cfdW8eOeeKHD_e3wA8aEEVtg"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Max
          </a>
          <a href="mailto:ivashov2402@icloud.com" className="footer-link">
            Email
          </a>
        </div>

        <p className="footer-note">Отвечаю днём, между сменами</p>

        <div className="footer-bottom">
          <span className="footer-copyright">
            &copy; 2026 FrontDev. Все права защищены
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
