
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className={`antialiased w-full min-h-[100vh] bg-abbah-dark-green`}>{children}</section>;
}
// categories, price, property type, bedrooms, condition, furnishing, bathrooms, facilities, property size