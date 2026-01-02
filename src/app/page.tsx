import Image from "next/image";
import Head from "next/head";
import Header from "./components/Header";

export default function Home() {
    return (
        <>
            <Head>
                <title>Cameron Bartlett</title>
            </Head>
            <main className="grow w-full block relative">
                <Header
                    title="Welcome"
                    description="Welcome to my little website here. It's not much right now but it will be... maybe."
                />
            </main>
        </>
    );
}
