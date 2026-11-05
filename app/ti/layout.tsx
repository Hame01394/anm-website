
export default function TigrinyaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      lang="ti"
      className="font-[var(--font-noto-ethiopic)]"
    >
      {children}
    </div>
  );
}
