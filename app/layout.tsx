import "./globals.css";

export const metadata = {
  title: "ALX Listing App",
  description: "Airbnb-style listing page built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


