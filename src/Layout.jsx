export default function Layout({ children }) {
  return (
    <div className="min-h-screen w-full">
      <div className="min-h-screen w-full aurora-bg fixed -z-10"></div>
      {children}
    </div>
  );
}
