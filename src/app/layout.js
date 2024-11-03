import "./globals.css";




export default function RootLayout({ children}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Dancing+Script:wght@400;500;600;700&family=Press+Start+2P&family=Space+Grotesk:wght@400;500;600;700&family=Marcellus&family=Rubik+Glitch&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
      {children}
      </body>
    </html>
  );
}