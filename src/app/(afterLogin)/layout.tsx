export default function AfterLoginLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <div>에프터 로그인 레이아웃</div>
      {children}
    </main>
  );
}
