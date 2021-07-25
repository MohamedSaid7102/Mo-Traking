import Button from './Button';
import { useLocation } from 'react-router';

function Header({ onAdd, showAdd }) {
  const location = useLocation();
  return (
    <div className="header">
      <h1>Mo-Traking..🚀</h1>
      {
        location.pathname === "/" 
        &&
        <Button
        text={showAdd ? 'Close' : 'Add'}
        onClick={onAdd}
        color={showAdd ? 'red' : ''}
      />
      }
    </div>
  );
}

export default Header;
