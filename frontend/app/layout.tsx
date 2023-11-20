import { Providers } from "./providers";
import { GeistSans } from "geist/font/sans";
import "@utils/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>Fire roll</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Play RPG online with friends" />
      </head>
      <body className={GeistSans.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
