function Button({ text, color, onClick }) {
  return (
    <button className={ color==='red'?'btn close':'btn' } onClick={onClick} >
      {text}
    </button>
  );
}

export default Button;
