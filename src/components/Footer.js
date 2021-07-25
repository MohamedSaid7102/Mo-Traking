import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <Link to="/about" className="footer">
        About
      </Link>
    </footer>
  );
}

export default Footer;
