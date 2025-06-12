
import Footer from "@/components/footer/footer";
import "../styles/globals.css";
import Header from "@/components/header/Header";



export const metadata = {
  title: "Arminverse Projects",
  description: "لیست نمونه پروژهای من",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
      
    </html>
  );
}
