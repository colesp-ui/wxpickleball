export const metadata = {
  title: "WX Pickleball | Woods Cross High School",
  description: "Woods Cross High School Pickleball — team, schedule, tournaments, sponsors, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}