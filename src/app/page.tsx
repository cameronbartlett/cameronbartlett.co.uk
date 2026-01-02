import Image from "next/image";
import Head from "next/head";
import Header from "./components/Header";

export default function Home() {
    return (
        <>
            <Head>
                <title>Cameron Bartlett - Developer</title>
            </Head>
            <main className="grow w-full block relative">
                <Header
                    eyebrow="Developer"
                    title="Cameron Bartlett"
                    description="I'm Cameron, a software developer. I build things and write about what I'm learning as I go."
                />
            </main>
        </>
    );
}
