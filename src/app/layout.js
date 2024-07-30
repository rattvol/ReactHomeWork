export const metadata = {
  title: "Restaurants",
  description: "Restaurant menu and reviews",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
