import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata = {
  title: "ReVint",
  description: "Revint app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
