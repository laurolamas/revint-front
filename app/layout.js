import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata = {
  title: "ReVint",
  description: "Revint app",
};

export default function RootLayout({ children }) {
  // check if page is login page to see wether or not to render the header
  const isLogin = children.props.childProp.segment === "login";

  return (
    <html lang="en" data-theme="dark">
      <body>
        {!isLogin && <Header />}
        {children}
        {!isLogin && <Footer />}
      </body>
    </html>
  );
}
