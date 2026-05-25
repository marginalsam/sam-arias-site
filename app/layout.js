import "./globals.css";
import Nav from "../components/Nav";

export const metadata = {
  title: "Sam Arias",
  description:
    "Sam Arias — Consultant at Deloitte, General Manager of P.H.0, and analog photographer based in New York.",
  openGraph: {
    title: "Sam Arias",
    description:
      "Consultant at Deloitte, General Manager of P.H.0, and analog photographer.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
