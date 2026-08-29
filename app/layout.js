export const metadata = {
  title: "WX Pickleball | Woods Cross High School",
  description: "Woods Cross High School Pickleball — team, schedule, tournaments, sponsors, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <script dangerouslySetInnerHTML={{__html: `
          document.addEventListener('click', function (event) {
            var link = event.target.closest('.site-menu-panel a');
            if (!link) return;
            var menu = link.closest('details.site-menu');
            if (menu) menu.removeAttribute('open');
          });
        `}} />
      </body>
    </html>
  );
}