import * as React from "react";
import Head from "next/head";
import { Header } from "./header";

interface ILayoutProps{
    children: React.ReactNode
}

export const Layout: React.FC<ILayoutProps> = ({children}) => (
    <>
        <Head><title>TITH ARTIUM</title></Head>
        <Header />
        <main>
        <div className="container">{children}</div>
        </main>
    </>
);

