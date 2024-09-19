import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="overflow-x-hidden">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
