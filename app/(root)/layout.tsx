
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import { Metadata } from "next"

    export const metadata:Metadata = {
        title:{
            template:"Snap UI = Open Source Components",
            default: "Snap UI",
        }
    }

   export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header/>
            <main className="relative w-full pt-0 md:pt-0 bg-white dark:bg-black">
                {children}
            </main>
            <Footer/>
        </>
    );
}