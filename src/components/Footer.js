import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

function Footer() {
  const locationAbout = useLocation();
  return (
    <footer>
      <Link to="/about" className="footer">
        {locationAbout.pathname==='/' && "About"}
      </Link>
    </footer>
  );
}

export default Footer;
