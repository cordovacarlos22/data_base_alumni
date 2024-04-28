
import Nav from "@/components/navigation/nav";
import "./globals.css";



export const metadata = {
  title: "Student  Dashboard",
  description: "This is a student dashboard   ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className=" bg-gray-300  flex  " >
        <Nav />
        {children}

      </body>
    </html>
  );
}
