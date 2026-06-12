import "./globals.css";
import Nav from "../components/Nav";

export const metadata = {
  metadataBase: new URL("https://sam-arias.com"),
  title: "Sam Arias",
  description:
    "Sam Arias — Account Manager & Implementation Specialist at Allocate, General Manager of P.H.0, and analog photographer based in New York.",
  openGraph: {
    title: "Sam Arias",
    description:
      "Account Manager & Implementation Specialist at Allocate, General Manager of P.H.0, and analog photographer based in New York.",
    type: "website",
    url: "https://sam-arias.com",
    images: [
      {
        url: "/assets/nyc-skyline.jpg",
        width: 2400,
        height: 1591,
        alt: "Manhattan skyline shot on black-and-white film by Sam Arias",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sam Arias",
    description:
      "Account Manager & Implementation Specialist at Allocate, GM of P.H.0, analog photographer.",
    images: ["/assets/nyc-skyline.jpg"],
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
