export default function Button({ children, ...props }) {
  return (
    <button type="button" {...props}>
      {children || "Button"}
    </button>
  );
}
