import Button from './Button';

function Header({ onAdd, showAdd }) {
  return (
    <div className="header">
      <h1>Mo-Traking..🚀</h1>
      <Button
        text={showAdd ? 'Close' : 'Add'}
        onClick={onAdd}
        color={showAdd ? 'red' : ''}
      />
    </div>
  );
}

export default Header;
