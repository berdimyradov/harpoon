import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Harpoon",
  description: "Catch Your First Pokemon and Get Your First Badge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-screen-xl text-center mx-auto my-0 p-8">
          {children}
        </main>
      </body>
    </html>
  );
}
