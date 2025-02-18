export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex">
        <main className="relative flex flex-col gap-0 py-[48px] sm:pt-[200px] justify-center items-start text-left px-4 lg:px-0 md:px-0 md:w-[80%] xl:w-[45%] max-w-[45rem] mx-auto  z-10">
          {children}
        </main>
      </div>
    </>
  );
}
