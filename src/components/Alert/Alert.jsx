export function Alert({ children, onClear }) {
  return (
    <div>
      {children}
      <span onClick={onClear}>x</span>
    </div>
  );
}
