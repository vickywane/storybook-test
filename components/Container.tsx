export default function Container({
  children,
  background = "transparent",
  padding,
}) {
  return (
    <div
      style={{
        backgroundColor: background,
        padding,
      }}
    >
      <div className="max-w-[1070px] m-auto">{children}</div>
    </div>
  );
}
